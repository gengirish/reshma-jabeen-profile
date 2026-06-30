import { personalInfo } from "@/data/resume-data";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neural-border bg-neural-bg py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card rounded-2xl p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">Let&rsquo;s build something great</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Open to program leadership, cloud migration and transformation
            opportunities. Reach out to start a conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neural-cyan px-6 py-3 text-sm font-semibold text-neural-bg transition-all hover:glow-cyan"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neural-green/40 px-6 py-3 text-sm font-semibold text-neural-green transition-all hover:bg-neural-green/10"
            >
              Want a profile like this? Join our WhatsApp group
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
          <a
            href="https://www.intelliforge.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neural-cyan"
          >
            Built by <span className="font-semibold text-neural-cyan">IntelliForge AI</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
