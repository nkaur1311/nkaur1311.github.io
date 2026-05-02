import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Share2, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { config } from "@/portfolio.config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}${config.resumeUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${config.name} - Resume`, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="py-24 px-6 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-8"
        >
          <div>
            <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="section-heading text-4xl md:text-5xl text-foreground mb-4">
              Let&rsquo;s work together.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I&rsquo;m currently open to new opportunities. Whether you have a question or just
              want to say hi, my inbox is always open.
            </p>
          </div>

          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
            data-testid="link-contact-email"
          >
            <Mail size={18} />
            {config.email}
          </a>

          <div className="flex items-center gap-4">
            {config.social.github && (
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="GitHub"
                data-testid="link-footer-github"
              >
                <FaGithub size={20} />
              </a>
            )}
            {config.social.linkedin && (
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {config.social.twitter && (
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <FaXTwitter size={20} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={config.resumeUrl}
              download={config.resumeFileName}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
              data-testid="button-download-resume-footer"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
              data-testid="button-share-resume-footer"
            >
              {copied ? (
                <>
                  <CheckCircle size={15} className="text-green-500" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Share2 size={15} />
                  Share Resume
                </>
              )}
            </button>
          </div>

          <div className="pt-8 border-t border-border w-full text-center">
            <p className="text-xs text-muted-foreground font-mono">
              Built with React + Vite &mdash; fork and make it yours.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
