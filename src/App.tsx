  import { useState, useEffect } from 'react';
  import { Header } from './components/Header';
  import { Hero } from './components/Hero';
  import { Features } from './components/Features';
  import { Platforms } from './components/Platforms';
  import { Stats } from './components/Stats';
  import { Testimonials } from './components/Testimonials';
  import { Onboarding } from './components/Onboarding';
  import { CTA } from './components/CTA';
  import { Footer } from './components/Footer';
  
  export default function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
    useEffect(() => {
      // Check for saved theme preference or default to light
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }, []);
  
    useEffect(() => {
      // Update document class and save preference
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
  
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Features />
          <Platforms />
          <Stats />
          <Testimonials />
          <Onboarding />
          <CTA />
        </main>
        <Footer />
      </div>
    );
  }
