"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/resume-data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Tell me about Reshma's experience",
  "What technologies does she know?",
  "Why should I hire Reshma?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm ${personalInfo.name.split(" ")[0]}'s AI assistant. Ask me anything about her 19+ years in program management, cloud migration and enterprise integration.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "Sorry, I couldn't process that right now. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please reach out via LinkedIn in the meantime.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neural-cyan to-neural-purple text-neural-bg shadow-lg transition-transform hover:scale-110 glow-cyan"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <span className="text-xl">💬</span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-neural-border bg-neural-surface shadow-2xl">
          <div className="flex items-center gap-3 border-b border-neural-border bg-neural-card px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neural-cyan to-neural-purple text-sm font-bold text-neural-bg">
              RJ
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-100">
                Talk to My Resume
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neural-green">
                <span className="h-1.5 w-1.5 rounded-full bg-neural-green" />
                AI Assistant · Online
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-neural-cyan text-neural-bg"
                      : "bg-neural-card text-slate-200"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-neural-card px-3.5 py-2.5">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neural-cyan [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neural-cyan [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neural-cyan" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-neural-border px-3 py-1 text-xs text-slate-400 transition-colors hover:border-neural-cyan hover:text-neural-cyan"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-neural-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my career..."
              className="flex-1 rounded-full border border-neural-border bg-neural-bg px-4 py-2 text-sm text-slate-200 outline-none focus:border-neural-cyan"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neural-cyan text-neural-bg transition-opacity disabled:opacity-40"
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
