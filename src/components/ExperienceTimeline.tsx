import { experience } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

export default function ExperienceTimeline() {
  const ordered = [...experience].sort((a, b) => b.epoch - a.epoch);

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Journey"
        title="Career Timeline"
        subtitle="Each epoch marks a phase of growth — from hands-on engineering to enterprise program leadership."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neural-cyan via-neural-purple to-neural-pink md:left-1/2 md:block" />

        <div className="space-y-10">
          {ordered.map((role, idx) => (
            <div
              key={`${role.company}-${role.epoch}`}
              className={`relative md:flex ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="md:w-1/2 md:px-8">
                <div
                  className="glass-card rounded-2xl p-6"
                  style={{ borderColor: `${role.domainColor}33` }}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: `${role.domainColor}1a`,
                        color: role.domainColor,
                      }}
                    >
                      {role.domain}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      EPOCH {role.epoch}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-100">
                    {role.title}
                  </h3>
                  <div className="text-sm text-neural-cyan">{role.company}</div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    {role.period} · {role.companyType}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {role.description}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {role.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-slate-300"
                      >
                        <span style={{ color: role.domainColor }}>▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neural-bg/60 px-2 py-1 font-mono text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-neural-border pt-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Delivery maturity</span>
                      <span style={{ color: role.domainColor }}>
                        {role.accuracy}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neural-bg">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${role.accuracy}%`,
                          backgroundColor: role.domainColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span
                className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-neural-bg md:left-1/2 md:block"
                style={{ backgroundColor: role.domainColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
