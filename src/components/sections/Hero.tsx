import React from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background ambient accent blur */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Availability Status Badge */}
          {siteConfig.availableForHire && (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-foreground shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{t.hero.badge}</span>
            </div>
          )}

          {/* Intro & Main Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl sm:leading-[1.1] mb-6">
            {t.hero.greeting}{' '}
            <span className="text-primary">{t.common.name}</span>
            <span className="block text-2xl sm:text-4xl font-semibold text-muted-foreground mt-2">
              {t.hero.role}
            </span>
          </h1>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            {t.hero.headline}
          </p>

          <p className="text-base text-muted-foreground/90 leading-relaxed mb-10 max-w-2xl">
            {t.hero.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              size="lg"
              variant="default"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="gap-2 group"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>{t.hero.ctaContact}</span>
            </Button>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors h-12 px-6 text-base gap-2 bg-secondary text-secondary-foreground hover:bg-muted border border-border hidden sm:inline-flex cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>{t.hero.ctaWhatsapp}</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/80 pt-6 w-full">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">
              {t.hero.connectLabel}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="text-xs font-mono">github</span>
              </a>
              <span className="text-border">&bull;</span>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-xs font-mono">linkedin</span>
              </a>
              <span className="text-border">&bull;</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                <span className="text-xs font-mono">email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
