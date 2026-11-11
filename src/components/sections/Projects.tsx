import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Github } from '@/components/ui/icons';
import { featuredProjects } from '@/config/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/hooks/useLanguage';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              {t.projects.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {t.projects.description}
            </p>
          </div>

          <a
            href="https://github.com/Abdullah-Bafarag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            <span>{t.projects.exploreGithub}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const projectItem = t.projects.items[project.id as keyof typeof t.projects.items];
            const title = projectItem?.title ?? project.title;
            const description = projectItem?.description ?? project.description;

            return (
              <Card
                key={project.id}
                className="flex flex-col h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  {/* Metric pill */}
                  {project.metrics && (
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-2">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                  <CardDescription className="pt-2 text-sm line-clamp-4">
                    {description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-6">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>{t.projects.sourceCode}</span>
                    </a>
                  ) : (
                    <span />
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <span>{t.projects.liveDemo}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
