import React, { useState } from 'react';
import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-mono font-bold text-sm shadow-sm">
            AB
          </span>
          <span>{t.common.name}</span>
          <span className="text-primary text-xl leading-none">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t.common.theme.toggle}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 transition-all text-foreground" />
            ) : (
              <Sun className="h-4 w-4 transition-all text-foreground" />
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label={t.common.switchLanguage}
            className="rounded-full flex items-center justify-center"
          >
            <Languages className="h-4 w-4 transition-all text-foreground" />
            <span className="sr-only">{language === 'ar' ? 'English' : 'العربية'}</span>
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => {
              window.location.href = '#contact';
            }}
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t.common.theme.toggle}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 text-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-foreground" />
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label={t.common.switchLanguage}
            className="rounded-full"
          >
            <Languages className="h-4 w-4 text-foreground" />
            <span className="sr-only">{language === 'ar' ? 'English' : 'العربية'}</span>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={t.nav.toggleMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card/95 backdrop-blur-md px-4 py-5 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <Button
                variant="default"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '#contact';
                }}
              >
                {t.nav.cta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
