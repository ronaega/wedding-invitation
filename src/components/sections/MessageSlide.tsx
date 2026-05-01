import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Message {
  id: string;
  name: string;
  message: string;
}

const MessageSlide = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [guestCode, setGuestCode] = useState<string | null>(null);

  // 📌 Get guest ID from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestCode(params.get("id"));

    fetchMessages();

    // 🔥 Realtime listener
    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [payload.new as Message, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 📌 Load existing messages
  const fetchMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  // 📌 Send message
  const sendMessage = async () => {
    if (!text || !guestCode) return;

    const { error } = await supabase.from("messages").insert([
      {
        guest_code: guestCode,
        name: "Guest",
        message: text,
      },
    ]);

    if (error) {
      alert("You already sent a message ❤️");
    } else {
      setText("");
    }
  };

  return (
    <section className="section-slide flex flex-col items-center text-center px-6 py-16">
      
      {/* Title */}
      <div className="mb-10">
        <h2 className="font-display text-4xl md:text-5xl text-maroon mb-2">
          Wishes & Blessings
        </h2>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Leave a heartfelt message
        </p>
      </div>

      {/* Message Input Card */}
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6 mb-10">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-28 p-4 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/40 text-sm resize-none"
          placeholder="Write your wishes for the couple..."
        />

        <button
          onClick={sendMessage}
          className="mt-4 w-full bg-maroon text-white py-2 rounded-xl hover:scale-[1.02] transition-all duration-200"
        >
          Send Blessing ✨
        </button>
      </div>

      {/* Messages Section */}
      <div className="w-full max-w-lg space-y-4">
        {messages.length === 0 && (
          <p className="text-muted-foreground text-sm italic">
            No messages yet… be the first to leave a blessing 🤍
          </p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className="relative bg-white/70 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-5 text-left transition-all hover:shadow-lg"
          >
            {/* Decorative quote */}
            <span className="absolute top-3 right-4 text-gold text-xl">
              “
            </span>

            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {m.message}
            </p>

            <p className="text-xs font-semibold text-maroon tracking-wide">
              — {m.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MessageSlide;