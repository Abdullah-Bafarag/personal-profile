import React from 'react';
import { Code, Cpu, Layers, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';

const iconMap = {
  layers: Layers,
  zap: Zap,
  cpu: Cpu,
  code: Code,
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      label: t.about.highlights.education,
      value: t.about.highlights.educationVal,
      description: t.about.highlights.educationDesc,
    },
    {
      label: t.about.highlights.focus,
      value: t.about.highlights.focusVal,
      description: t.about.highlights.focusDesc,
    },
    {
      label: t.about.highlights.languages,
      value: t.about.highlights.languagesVal,
      description: t.about.highlights.languagesDesc,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            {t.about.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t.about.description}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights / Metrics */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/40"
              >
                <div className="text-3xl font-extrabold text-primary font-mono">
                  {highlight.value}
                </div>
                <div className="mt-1 font-semibold text-foreground text-sm">
                  {highlight.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">
            {t.about.principlesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.principles.map((principle, index) => {
              const IconComponent = iconMap[principle.icon];
              return (
                <Card
                  key={index}
                  className="hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                >
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
