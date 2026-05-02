import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from "framer-motion";
import { config } from "@/portfolio.config";
import { fadeUpVariants } from "@/lib/animation";

const fadeUp = fadeUpVariants(40, 0.7, 0.1);

// ─── Animated counter ─────────────────────────────────────────────────────────

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) =>
    Math.round(v).toLocaleString()
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, value, motionVal]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {prefix && (
        <span className="text-2xl md:text-3xl font-bold text-primary mr-0.5">
          {prefix}
        </span>
      )}
      <motion.span>{display}</motion.span>
      {suffix && (
        <span className="text-2xl md:text-3xl font-bold text-primary ml-0.5">
          {suffix}
        </span>
      )}
    </span>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Stats() {
  const stats = config.stats ?? [];
  if (!stats.length) return null;

  return (
    <section id="stats" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
        >
          By the numbers
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-heading text-4xl md:text-5xl text-foreground mb-14"
        >
          At a Glance
        </motion.h2>

        <div
          className={`grid gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl overflow-hidden ${
            stats.length <= 2
              ? "md:grid-cols-2"
              : stats.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-4"
          }`}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group flex flex-col items-center justify-center px-8 py-10 bg-background hover:bg-primary/5 transition-colors duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums leading-none group-hover:text-primary transition-colors duration-300">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
