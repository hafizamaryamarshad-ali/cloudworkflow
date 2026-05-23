'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { scrollToSection as sharedScrollToSection } from '@/lib/scrollToSection';
import { applyTheme, DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeMode, resolveStoredTheme } from '@/lib/theme';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const sectionIds = navItems.map((item) => item.id);

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(10px)',
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME);
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    sharedScrollToSection(sectionId, shouldReduceMotion ? 'auto' : 'smooth');
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  useEffect(() => {
    const attributeTheme = document.documentElement.dataset.theme;

    if (attributeTheme === 'dark' || attributeTheme === 'light') {
      setTheme(attributeTheme);
      return;
    }

    setTheme(resolveStoredTheme(window.localStorage.getItem(THEME_STORAGE_KEY)));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const syncActiveSection = () => {
      const hash = window.location.hash.replace('#', '');

      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        return;
      }

      setActiveSection('home');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        const topEntry = visibleEntries[0];

        if (topEntry?.target instanceof HTMLElement) {
          setActiveSection(topEntry.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    syncActiveSection();
    window.addEventListener('hashchange', syncActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', syncActiveSection);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      data-easeworkflow-navbar
      className="sticky top-0 z-50 w-full"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={[
            'EaseWorkflow-brand-shell relative flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors duration-300',
            isScrolled
              ? theme === 'dark'
                ? 'border-white/12 bg-zinc-950/85 text-white'
                : 'border-sky-200/70 bg-white/82 text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
              : theme === 'dark'
                ? 'border-white/10 bg-zinc-950/55 text-white'
                : 'border-sky-200/60 bg-white/72 text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.06)]',
          ].join(' ')}
        >
          <Link
            href="/#home"
            className={[
              'group flex items-center gap-3 text-sm font-semibold tracking-[0.22em] uppercase transition-colors duration-300',
              theme === 'dark' ? 'text-white' : 'text-slate-900',
            ].join(' ')}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('home');
            }}
          >
            <span
              className={[
                'EaseWorkflow-brand-mark relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border text-sm font-bold shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-colors duration-300',
                theme === 'dark'
                  ? 'border-cyan-400/30 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.35),rgba(15,23,42,0.95))] text-cyan-100'
                  : 'border-sky-200/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(224,242,254,0.88))] text-slate-900 shadow-[0_0_24px_rgba(59,130,246,0.12)]',
              ].join(' ')}
            >
              E
              <span className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400/25 via-transparent to-fuchsia-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
            <span
              className={[
                'EaseWorkflow-brand-wordmark bg-clip-text text-base font-semibold tracking-[0.18em] transition-colors duration-300',
                theme === 'dark'
                  ? 'bg-linear-to-r from-white via-cyan-100 to-sky-300 text-transparent'
                  : 'bg-linear-to-r from-slate-950 via-sky-700 to-cyan-700 text-transparent',
              ].join(' ')}
            >
              EaseWorkflow
            </span>
          </Link>
        </motion.div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-zinc-950/35 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28, delay: index * 0.04 }}
              whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.02 }}
              className="group relative"
            >
              <Link
                href={`/#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
                className={[
                  'relative flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                  activeSection === item.id ? 'text-white' : 'text-white/70 hover:text-white',
                ].join(' ')}
              >
                <span>{item.label}</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute inset-x-4 bottom-1 h-px origin-left bg-linear-to-r from-cyan-400 via-sky-300 to-white transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            </motion.div>
          ))}

          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
              className="ml-1 inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(59,130,246,0.9),rgba(15,23,42,0.95))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.42)]"
            >
              Start Project
            </Link>
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
            whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={[
              'group relative inline-flex h-12 w-20 items-center rounded-full border px-1.5 backdrop-blur-xl transition-colors duration-300',
              theme === 'dark'
                ? 'border-cyan-300/15 bg-zinc-950/65 text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)]'
                : 'border-sky-200/70 bg-white/80 text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.14)]',
            ].join(' ')}
          >
            <span className="sr-only">Toggle theme</span>
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={[
                'absolute top-1.5 flex h-9 w-9 items-center justify-center rounded-full border shadow-lg',
                theme === 'dark'
                  ? 'translate-x-0 border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.95),rgba(15,23,42,0.95))] text-cyan-50'
                  : 'translate-x-8 border-sky-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(224,242,254,0.95))] text-sky-700',
              ].join(' ')}
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </motion.span>
            <span className="flex w-full items-center justify-between px-2 text-[10px] font-semibold uppercase tracking-[0.28em]">
              <span className={theme === 'dark' ? 'text-white/35' : 'text-slate-400'}>D</span>
              <span className={theme === 'dark' ? 'text-white/35' : 'text-slate-400'}>L</span>
            </span>
          </motion.button>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300/25 lg:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <motion.span
              animate={isMenuOpen ? 'open' : 'closed'}
              className="relative block h-4 w-5"
            >
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white"
                variants={{ closed: { y: 0, rotate: 0 }, open: { y: 6, rotate: 45 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white"
                variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white"
                variants={{ closed: { y: 0, rotate: 0 }, open: { y: -6, rotate: -45 } }}
                transition={{ duration: 0.2 }}
              />
            </motion.span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
            className="mx-4 mb-3 rounded-3xl border border-white/10 bg-zinc-950/90 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: index * 0.03 }}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                >
                  <Link
                    href={`/#${item.id}`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={[
                      'flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium transition-colors duration-300',
                      activeSection === item.id
                        ? 'border-cyan-300/20 bg-white/8 text-white'
                        : 'border-white/5 bg-white/3 text-white/80 hover:border-cyan-300/20 hover:bg-white/6 hover:text-white',
                    ].join(' ')}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: 0.1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                className="pt-2"
              >
                <Link
                  href="/#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="flex items-center justify-center rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(59,130,246,0.92),rgba(15,23,42,0.95))] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.32)]"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}