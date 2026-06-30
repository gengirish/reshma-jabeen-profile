"use client";

import { useEffect, useState } from "react";
import { personalInfo, stats } from "@/data/resume-data";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const ROLES = [
  "Program Manager",
  "Migration Manager",
  "Cloud Transformation Leader",
  "Agile Delivery Expert",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg pt-20"
    >
      <NeuralNetworkCanvas />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neural-cyan/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-neural-purple/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neural-border bg-neural-surface/60 px-4 py-1.5 text-xs font-medium text-neural-cyan">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neural-green" />
          Available for program leadership · {personalInfo.location}
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient-animate">{personalInfo.name}</span>
        </h1>

        <div className="mt-4 font-mono text-lg text-slate-300 sm:text-2xl">
          <span className="text-neural-purple">{"<"}</span>
          {text}
          <span className="animate-blink text-neural-cyan">|</span>
          <span className="text-neural-purple">{" />"}</span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            className="rounded-full bg-neural-cyan px-6 py-3 text-sm font-semibold text-neural-bg transition-all hover:glow-cyan"
          >
            Explore Career
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neural-border px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-neural-cyan hover:text-neural-cyan"
          >
            View LinkedIn
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl px-4 py-5 text-center"
            >
              <div className="text-2xl font-bold text-gradient sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
