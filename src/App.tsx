import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { LanguageProvider } from '@/context/LanguageContext';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
