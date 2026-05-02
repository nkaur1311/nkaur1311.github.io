import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { config } from "@/portfolio.config";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
              About Me
            </p>
            <h2 className="section-heading text-4xl md:text-5xl text-foreground mb-6">
              The person behind
              <br />
              the keyboard.
            </h2>
            <div
              className="w-12 h-1 rounded-full mb-8"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(250 84% 80%))",
              }}
            />
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {config.about}
            </p>
            {config.email && (
              <a
                href={`mailto:${config.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                data-testid="link-email"
              >
                <Mail size={15} />
                {config.email}
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Shipped", value: "20+" },
              { label: "Technologies", value: `${config.skills.reduce((acc, s) => acc + s.items.length, 0)}+` },
              { label: "Cups of Coffee", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-border bg-card card-hover"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-4xl font-serif font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
