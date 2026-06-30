import { testimonials } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-neural-surface/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Recommendations"
          title="What Colleagues Say"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="glass-card relative rounded-2xl p-8"
            >
              <span className="absolute right-6 top-4 font-serif text-6xl leading-none text-neural-cyan/20">
                &rdquo;
              </span>
              <blockquote className="text-sm leading-relaxed text-slate-300">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-neural-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neural-cyan to-neural-purple text-sm font-bold text-neural-bg">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  {t.linkedin ? (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-100 hover:text-neural-cyan"
                    >
                      {t.author}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-100">
                      {t.author}
                    </span>
                  )}
                  <div className="text-xs text-slate-500">{t.relationship}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
