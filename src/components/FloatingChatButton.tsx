import { Bot } from "lucide-react";

const FloatingChatButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 group"
      aria-label="Chat with our robot assistant"
    >
      <div className="relative">
        <Bot className="h-6 w-6 animate-bounce group-hover:animate-none" />
        {/* Pulsing ring effect */}
        <span className="absolute -inset-1 rounded-full bg-primary/30 animate-ping" />
      </div>
    </button>
  );
};

export default FloatingChatButton;