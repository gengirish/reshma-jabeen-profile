import { featuredProjects, certifications } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Impact"
        title="Featured Programs"
        subtitle="Selected programs and engagements across cloud migration, integration and transformation."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="glass-card group flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1.5"
          >
            <span
              className="mb-3 w-fit rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: `${project.domainColor}1a`,
                color: project.domainColor,
              }}
            >
              {project.domain}
            </span>
            <h3 className="text-lg font-semibold text-slate-100">
              {project.title}
            </h3>
            <div className="mt-1 text-xs text-slate-500">{project.client}</div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <div
              className="mt-4 rounded-lg border-l-2 bg-neural-bg/40 px-3 py-2 text-xs text-slate-300"
              style={{ borderColor: project.domainColor }}
            >
              {project.impact}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-neural-bg/60 px-2 py-1 font-mono text-[11px] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass-card rounded-xl p-5 transition-colors hover:border-neural-cyan/40"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-semibold text-slate-100">
                  {cert.title}
                </h4>
                <span className="shrink-0 rounded-full bg-neural-green/10 px-2 py-0.5 text-[10px] text-neural-green">
                  {cert.date}
                </span>
              </div>
              <div className="mt-1 text-xs text-neural-cyan">{cert.issuer}</div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
