import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import guests from "@/data/guests.json";

interface Message {
  id: string;
  name: string;
  message: string;
  guest_code?: string;
  created_at?: string;
}

const MessageSlide = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [guestCode, setGuestCode] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSent, setHasSent] = useState(false);

  // 📌 Get guest ID from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    setGuestCode(id);

    fetchMessages();

    // 🔥 REALTIME
    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [payload.new as Message, ...prev]);
        }
      )
      .subscribe((status) => {
        console.log("Realtime status:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 🎠 Auto carousel
  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  // 📌 Fetch messages
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setMessages(data);

      // 🚫 check if this guest already sent message
      const existing = data.find((m) => m.guest_code === guestCode);
      if (existing) {
        setHasSent(true);
      }
    }
  };

  // 📌 Get guest name
  const getGuestName = (code: string | null) => {
    const guest = guests.find((g) => g.code === code);
    return guest ? guest.name : "Guest";
  };

  // 📌 Send message
  const sendMessage = async () => {
    if (!text || !guestCode || hasSent) return;

    const { error } = await supabase.from("messages").insert([
      {
        guest_code: guestCode,
        name: getGuestName(guestCode),
        message: text,
      },
    ]);

    if (!error) {
      setText("");
      setHasSent(true);
    }
  };

  return (
    <section className="section-slide flex flex-col items-center text-center px-6 py-16">

      {/* 🌸 TITLE */}
      <div className="mb-10">
        <h2 className="font-display text-4xl md:text-5xl text-maroon mb-2">
          Wishes & Blessings
        </h2>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Live Wedding Guestbook
        </p>
      </div>

      {/* 💌 INPUT CARD */}
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6 mb-10">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-28 p-4 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/40 text-sm resize-none"
          placeholder="Write your heartfelt message..."
          disabled={hasSent}
        />

        <button
          onClick={sendMessage}
          disabled={hasSent}
          className={`mt-4 w-full py-2 rounded-xl transition-all duration-200 ${
            hasSent
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-maroon text-white hover:scale-[1.02]"
          }`}
        >
          {hasSent ? "You already sent a blessing ❤️" : "Send Blessing ✨"}
        </button>
      </div>

      {/* 🎠 PREMIUM CAROUSEL */}
      <div className="w-full max-w-lg relative h-48 flex items-center justify-center mt-6">

        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm italic">
            No messages yet… be the first to leave a blessing 🤍
          </p>
        ) : (
          messages.map((m, index) => (
            <div
              key={m.id}
              className={`absolute w-full transition-all duration-1000 ease-out transform ${
                index === activeIndex
                  ? "opacity-100 scale-100 translate-y-0 blur-0"
                  : "opacity-0 scale-90 translate-y-6 blur-sm"
              }`}
            >
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6 text-left overflow-hidden">

                {/* glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-60" />

                <div className="relative">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">
                    “{m.message}”
                  </p>

                  <p className="text-xs font-semibold text-maroon tracking-wide">
                    — {m.name}
                  </p>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔘 INDICATORS */}
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