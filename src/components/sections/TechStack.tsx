import React from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import { skillCategories } from '@/config/skills';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/hooks/useLanguage';

const categoryIconMap = {
  layout: Layout,
  server: Server,
  wrench: Wrench,
};

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            {t.skills.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t.skills.description}
          </p>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = categoryIconMap[category.icon];
            const categoryTranslation = t.skills.categories[category.icon as keyof typeof t.skills.categories];
            const name = categoryTranslation?.name ?? category.name;
            const description = categoryTranslation?.description ?? category.description;

            return (
              <Card
                key={category.name}
                className="flex flex-col h-full hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-2 flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                      >
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{category.skills.length} {t.skills.coreToolsSuffix}</span>
                    <Badge variant="secondary" className="text-[10px]">
                      {t.skills.productionReady}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
