import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import guests from "@/data/guests.json";

interface Message {
  id: string;
  name: string;
  message: string;
  created_at?: string;
}

const MessageSlide = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [guestCode, setGuestCode] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 📌 Get guest ID from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestCode(params.get("id"));

    fetchMessages();

    // 🔥 REAL-TIME LISTENER
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

  // 📌 Auto carousel rotation
  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages]);

  // 📌 Load messages
  const fetchMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  // 📌 Get guest name
  const getGuestName = (code: string | null) => {
    const guest = guests.find((g) => g.code === code);
    return guest ? guest.name : "Guest";
  };

  // 📌 Send message
  const sendMessage = async () => {
    if (!text || !guestCode) return;

    const { error } = await supabase.from("messages").insert([
      {
        guest_code: guestCode,
        name: getGuestName(guestCode),
        message: text,
      },
    ]);

    if (!error) {
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
          Live Guestbook
        </p>
      </div>

      {/* Input */}
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6 mb-10">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-28 p-4 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/40 text-sm resize-none"
          placeholder="Write your message..."
        />

        <button
          onClick={sendMessage}
          className="mt-4 w-full bg-maroon text-white py-2 rounded-xl hover:scale-[1.02] transition-all duration-200"
        >
          Send Blessing ✨
        </button>
      </div>

      {/* 🎠 CAROUSEL */}
      <div className="w-full max-w-lg relative h-40 flex items-center justify-center">

        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm italic">
            No messages yet… be the first to leave a blessing 🤍
          </p>
        ) : (
          messages.map((m, index) => (
            <div
              key={m.id}
              className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                index === activeIndex
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <div className="bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-6 text-left">
                
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {m.message}
                </p>

                <p className="text-xs font-semibold text-maroon">
                  — {m.name}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Dots indicator */}
      {messages.length > 0 && (
        <div className="flex gap-2 mt-6">
          {messages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? "bg-maroon" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MessageSlide;