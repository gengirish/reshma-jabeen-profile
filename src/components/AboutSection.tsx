import { personalInfo, domains } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Profile" title="About" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="glass-card rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              {personalInfo.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-neural-cyan/10 px-3 py-1 text-neural-cyan">
                PSM II
              </span>
              <span className="rounded-full bg-neural-purple/10 px-3 py-1 text-neural-purple">
                PSPO II
              </span>
              <span className="rounded-full bg-neural-green/10 px-3 py-1 text-neural-green">
                Microsoft Azure
              </span>
              <span className="rounded-full bg-neural-amber/10 px-3 py-1 text-neural-amber">
                ITIL
              </span>
              <span className="rounded-full bg-neural-pink/10 px-3 py-1 text-neural-pink">
                Scrum
              </span>
            </div>

            <div className="mt-8 border-t border-neural-border pt-6">
              <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-slate-500">
                Languages
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <span>English — Full Professional</span>
                <span className="text-slate-600">·</span>
                <span>Telugu — Native</span>
                <span className="text-slate-600">·</span>
                <span>Hindi — Native</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="glass-card h-full rounded-2xl p-8">
            <h4 className="mb-5 text-sm font-semibold text-slate-200">
              Industry Domains
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((domain) => (
                <div
                  key={domain.name}
                  className="flex items-center gap-3 rounded-xl border border-neural-border bg-neural-surface/40 px-3 py-3 transition-colors hover:border-neural-cyan/40"
                >
                  <span className="text-xl">{domain.icon}</span>
                  <span className="text-sm text-slate-300">{domain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
