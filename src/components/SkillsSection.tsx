import { skillCategories } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-neural-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Expertise"
          subtitle="A blend of program leadership, cloud transformation and deep integration engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: `0 0 0 1px ${category.color}22` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                  style={{ backgroundColor: `${category.color}1a` }}
                >
                  {category.icon}
                </span>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-neural-border bg-neural-bg/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
