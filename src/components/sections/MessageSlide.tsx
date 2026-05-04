import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import guests from "@/guests.json";

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
  const [showModal, setShowModal] = useState(false);

  // 📌 Get guest ID
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestCode(params.get("id"));

    fetchMessages();

    // 🔥 realtime
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

  // 🎠 auto carousel
  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 📌 fetch messages
  const fetchMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  // 📌 guest name
  const getGuestName = (code: string | null) => {
    const guest = guests.find((g) => g.code === code);
    return guest ? guest.name : "Guest";
  };

  // 📌 send message (UNLIMITED)
  const sendMessage = async () => {
    if (!text || !guestCode) return;

    const { error } = await supabase.from("messages").insert([
      {
        guest_code: guestCode,
        name: getGuestName(guestCode),
        message: text,
      },
    ]);

    if (!error) setText("");
  };

  return (
    <section className="section-slide flex flex-col items-center text-center px-6 py-16">

      {/* 🌸 TITLE */}
      <div className="mb-10">
        <h2 className="font-display text-4xl md:text-5xl text-maroon mb-2">
          Wishes & Blessings
        </h2>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Guest Carousel
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

      {/* 🎠 CAROUSEL */}
      <div className="w-full max-w-lg relative h-52 flex items-center justify-center">

        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm italic">
            No messages yet… be the first 🤍
          </p>
        ) : (
          messages.map((m, index) => (
            <div
              key={m.id}
              className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                index === activeIndex
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-4"
              }`}
            >
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6 text-left overflow-hidden">

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-60" />

                <div className="relative">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">
                    “{m.message}”
                  </p>

                  <p className="text-xs font-semibold text-maroon">
                    — {m.name}
                  </p>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔘 DOTS */}
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

      <button
        onClick={() => setShowModal(true)}
        className="mt-6 text-sm text-maroon underline hover:opacity-70 transition"
      >
        View All Messages
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)} // 🧿 click outside
          >
            {/* Modal Card */}
            <motion.div
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-xl max-h-[80vh] bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden"
            >

              {/* Header (sticky) */}
              <div className="sticky top-0 bg-white/60 backdrop-blur-md px-6 py-4 border-b border-white/30 flex justify-between items-center">
                <h3 className="text-lg font-display text-maroon">
                  Guest Messages
                </h3>

                {/* ❌ Close */}
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div
                className="overflow-y-auto px-6 py-4 space-y-4"
                style={{ maxHeight: "60vh" }}
              >
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow"
                  >
                    <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                      “{m.message}”
                    </p>

                    <p className="text-xs font-semibold text-maroon">
                      — {m.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default MessageSlide;