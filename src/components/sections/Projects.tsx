import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { config } from "@/portfolio.config";

export function Projects() {
  const featured = config.projects.filter((p) => p.featured);
  const others = config.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
            Work
          </p>
          <h2 className="section-heading text-4xl md:text-5xl text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 rounded-2xl border border-border bg-card card-hover flex flex-col gap-4"
              data-testid={`project-featured-${i}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      aria-label="GitHub repo"
                      data-testid={`link-repo-${project.name.toLowerCase()}`}
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      aria-label="Live project"
                      data-testid={`link-live-${project.name.toLowerCase()}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group p-5 rounded-xl border border-border bg-card card-hover flex flex-col gap-3"
                  data-testid={`project-other-${i}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <div className="flex gap-1">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
