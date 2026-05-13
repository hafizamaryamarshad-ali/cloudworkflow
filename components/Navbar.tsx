'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

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
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <motion.header
      initial={false}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
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
            'relative flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl',
            isScrolled
              ? 'border-white/12 bg-zinc-950/85 text-white'
              : 'border-white/10 bg-zinc-950/55 text-white',
          ].join(' ')}
        >
          <Link
            href="/#home"
            className="group flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.35),rgba(15,23,42,0.95))] text-sm font-bold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              C
              <span className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400/25 via-transparent to-fuchsia-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
            <span className="bg-linear-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-base font-semibold tracking-[0.18em] text-transparent">
              CloudFlow
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
                href={item.href}
                className="relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                <span>{item.label}</span>
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-400 via-sky-300 to-white transition-transform duration-300 group-hover:scale-x-100"
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
              className="ml-1 inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(59,130,246,0.9),rgba(15,23,42,0.95))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.42)]"
            >
              Start Project
            </Link>
          </motion.div>
        </div>

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
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/3 px-4 py-3 text-base font-medium text-white/80 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-white/6 hover:text-white"
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
                  onClick={() => setIsMenuOpen(false)}
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