import React, { useState } from 'react';
import {
  Check,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';

export const Contact: React.FC = () => {
  const { contact } = siteConfig;
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const contactChannels = [
    {
      key: 'phone',
      label: 'Direct Phone',
      value: contact.displayPhone,
      rawValue: contact.phone,
      href: `tel:${contact.phone}`,
      actionText: t.contact.actions.call,
      icon: Phone,
      color: 'text-sky-500',
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp Chat',
      value: contact.whatsappDisplay,
      rawValue: contact.whatsapp,
      href: contact.whatsappUrl,
      actionText: t.contact.actions.message,
      icon: MessageSquare,
      color: 'text-emerald-500',
    },
    {
      key: 'email',
      label: 'Email Inbox',
      value: contact.email,
      rawValue: contact.email,
      href: `mailto:${contact.email}`,
      actionText: t.contact.actions.sendEmail,
      icon: Mail,
      color: 'text-primary',
    },
    {
      key: 'github',
      label: 'GitHub',
      value: contact.githubUsername,
      rawValue: contact.github,
      href: contact.github,
      actionText: t.contact.actions.viewRepos,
      icon: Github,
      color: 'text-foreground',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: contact.linkedinUsername,
      rawValue: contact.linkedin,
      href: contact.linkedin,
      actionText: t.contact.actions.connect,
      icon: Linkedin,
      color: 'text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t.contact.description}
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{contact.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Options List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.contact.optionsTitle}
            </h3>
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const isCopied = copiedKey === channel.key;

              return (
                <Card
                  key={channel.key}
                  className="hover:border-primary/50 transition-all duration-200"
                >
                  <CardContent className="p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card border border-border">
                        <Icon className={`h-5 w-5 ${channel.color}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground font-medium">
                          {channel.label}
                        </div>
                        <a
                          href={channel.href}
                          target={channel.href.startsWith('http') ? '_blank' : undefined}
                          rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-foreground truncate block hover:text-primary transition-colors"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => handleCopy(channel.rawValue, channel.key)}
                        aria-label={isCopied ? t.common.copied : t.common.copy}
                        title={isCopied ? t.common.copied : t.common.copy}
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>

                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center justify-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground hover:bg-muted border border-border transition-colors"
                      >
                        {channel.actionText}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <Card className="border-border shadow-xs">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.contact.formTitle}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {t.contact.formSubtitle}
                </p>

                {formSubmitted ? (
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-6 text-center">
                    <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">
                      {t.contact.messagePrepared}
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      {t.contact.messagePreparedDesc}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setFormSubmitted(false)}
                    >
                      {t.contact.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider"
                      >
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.placeholderName}
                        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider"
                      >
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.placeholderEmail}
                        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider"
                      >
                        {t.contact.formMessage}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.placeholderMessage}
                        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      <span>{t.contact.sendButton}</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
