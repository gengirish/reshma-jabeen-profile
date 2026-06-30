"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> initializing profile.kernel ...",
  "> loading career.dataset [19+ years] ...",
  "> mounting program_management.module ...",
  "> compiling cloud_migration.pipeline ...",
  "> establishing ai.assistant link ...",
  "> profile ready.",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, BOOT_LINES[i]]);
      i += 1;
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 500);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neural-bg grid-bg transition-opacity duration-500">
      <div className="w-full max-w-md px-6 font-mono text-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-neural-pink" />
          <span className="h-3 w-3 rounded-full bg-neural-amber" />
          <span className="h-3 w-3 rounded-full bg-neural-green" />
          <span className="ml-2 text-neural-cyan/60">reshma-jabeen — profile</span>
        </div>
        <div className="rounded-lg border border-neural-border bg-neural-surface/70 p-4">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={
                line?.includes("ready")
                  ? "text-neural-green"
                  : "text-neural-cyan/80"
              }
            >
              {line}
            </div>
          ))}
          <span className="inline-block h-4 w-2 animate-blink bg-neural-cyan align-middle" />
        </div>
        <div className="mt-3 text-center text-xs text-slate-500">v1.0.0 · IntelliForge AI</div>
      </div>
    </div>
  );
}
