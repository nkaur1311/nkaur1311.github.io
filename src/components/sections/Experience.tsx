import { motion } from "framer-motion";
import { config } from "@/portfolio.config";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
            Career
          </p>
          <h2 className="section-heading text-4xl md:text-5xl text-foreground">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-10">
            {config.experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-24"
                data-testid={`experience-${i}`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>
                  {job.highlights && job.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
