import { Brain, MessageCircle } from "lucide-react";
import { useState } from "react";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="AI Assistant"
      >
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-teal-accent/30 animate-pulse-ring" />
        
        {/* Main Button */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-accent to-accent shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <div className="relative">
            <Brain className={`h-6 w-6 text-white transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
            <MessageCircle className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
          </div>
        </div>
      </button>

      {/* Chat Placeholder Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-fade-in-up">
          <div className="rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary-foreground" />
                <span className="font-semibold text-primary-foreground">
                  AI Research Assistant
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 min-h-[200px] bg-secondary/30">
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4 text-accent" />
                </div>
                <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-sm">
                  <p className="text-sm text-foreground">
                    Hello! I'm your research assistant. How can I help you discover academic projects today?
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about projects..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-secondary border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-navy-dark transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
