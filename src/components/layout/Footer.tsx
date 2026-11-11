import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border bg-card/50 py-12 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white font-mono text-xs font-bold">
                AB
              </span>
              <span className="font-semibold text-foreground tracking-tight">
                {t.common.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {t.hero.role} &bull; {t.footer.location}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label="Send Email"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              aria-label="Call Phone"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} {t.common.name}. {t.footer.copyright}
          </p>
          <p className="flex items-center gap-1">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};
