import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { config } from "@/portfolio.config";

export function Education() {
  if (!config.education || config.education.length === 0) return null;

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
            Education
          </p>
          <h2 className="section-heading text-4xl md:text-5xl text-foreground">
            Academic Background
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {config.education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card card-hover"
              data-testid={`education-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {edu.institution}
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border whitespace-nowrap shrink-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
