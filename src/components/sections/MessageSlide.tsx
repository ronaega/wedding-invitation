import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import guests from "@/guests.json";

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

  const containerRef = useRef<HTMLDivElement | null>(null);

  // 📌 Guest ID
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestCode(params.get("id"));

    fetchMessages();

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

  // 📌 Load messages
  const fetchMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  // 📌 Guest name
  const getGuestName = (code: string | null) => {
    const guest = guests.find((g) => g.code === code);
    return guest ? guest.name : "Guest";
  };

  // 📌 Send message
  const sendMessage = async () => {
    if (!text || !guestCode) return;

    await supabase.from("messages").insert([
      {
        guest_code: guestCode,
        name: getGuestName(guestCode),
        message: text,
      },
    ]);

    setText("");
  };

  return (
    <section className="section-slide flex flex-col items-center text-center px-6 py-16">

      {/* 🌸 TITLE */}
      <div className="mb-10">
        <h2 className="font-display text-4xl md:text-5xl text-maroon mb-2">
          Wishes & Blessings
        </h2>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Live Guest Wall
        </p>
      </div>

      {/* 💌 INPUT */}
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6 mb-10">

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

      {/* 🌊 LIVE WALL + SWIPE */}
      <div
        ref={containerRef}
        className="w-full max-w-lg overflow-x-auto flex gap-4 px-2 snap-x snap-mandatory scroll-smooth"
      >
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm italic w-full text-center">
            No messages yet… be the first 🤍
          </p>
        ) : (
          messages.map((m) => (
            <motion.div
              key={m.id}
              whileTap={{ scale: 0.97 }}
              className="min-w-[85%] snap-center bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-3xl p-6 text-left flex-shrink-0"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-60 rounded-3xl" />

              <div className="relative">
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">
                  “{m.message}”
                </p>

                <p className="text-xs font-semibold text-maroon">
                  — {m.name}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default MessageSlide;