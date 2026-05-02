import { motion } from "framer-motion";
import { config } from "@/portfolio.config";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
            Toolbox
          </p>
          <h2 className="section-heading text-4xl md:text-5xl text-foreground">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card"
              data-testid={`skills-group-${group.category.toLowerCase()}`}
            >
              <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
