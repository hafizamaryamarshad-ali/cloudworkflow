'use client';

import { motion, easeInOut } from 'framer-motion';

export interface HeroSectionProps {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  onPrimaryAction: () => void;
  shouldReduceMotion: boolean | null;
}

export function HeroSection({
  badge,
  title,
  description,
  primaryCta,
  onPrimaryAction,
  shouldReduceMotion,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="EaseWorkflow-hero relative isolate overflow-hidden transition-colors duration-500 scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="EaseWorkflow-hero-surface absolute inset-0 transition-opacity duration-500" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl dark:bg-cyan-500/15" />
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-indigo-300/8 blur-3xl dark:bg-sky-400/15" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-slate-200/28 blur-3xl dark:bg-indigo-500/10" />
      <div className="EaseWorkflow-hero-grid absolute inset-0 bg-size-[34px_34px] opacity-30 dark:opacity-35" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: easeInOut }}
        className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24"
      >
        <div className="max-w-2xl lg:pt-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.06 }}
            className="EaseWorkflow-hero-pill inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] backdrop-blur-xl transition-colors duration-500"
          >
            {badge}
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.12 }}
            className="EaseWorkflow-hero-title mt-6 text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[0.96] lg:text-7xl lg:leading-[0.92]"
          >
            <span className="EaseWorkflow-hero-title-accent block max-w-[12ch] bg-clip-text text-transparent">{title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.18 }}
            className="EaseWorkflow-hero-copy mt-6 max-w-136 text-base leading-7 sm:text-lg sm:leading-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.button
              type="button"
              onClick={onPrimaryAction}
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="EaseWorkflow-hero-primary-cta inline-flex min-w-44 items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              {primaryCta}
            </motion.button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
            className="EaseWorkflow-hero-copy mt-8 flex flex-wrap gap-3 text-sm"
          >
            {['Enterprise ready', 'System-aware theming', 'Real-time workflow visibility'].map((item) => (
              <li
                key={item}
                className="EaseWorkflow-hero-trust-chip rounded-full border px-4 py-2 shadow-[0_1px_8px_rgba(15,23,42,0.03)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.18, ease: easeInOut }}
          className="relative mx-auto w-full max-w-xl lg:justify-self-end"
          aria-hidden="true"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 0.35, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: easeInOut }}
            className="EaseWorkflow-hero-network-shell relative aspect-473/352 overflow-hidden rounded-[2.25rem] border transition-transform duration-500 hover:-translate-y-0.5"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] shadow-[0_10px_28px_rgba(0,0,0,0.14)] backdrop-blur-xl EaseWorkflow-hero-live-chip">
              Intelligent Core
            </div>

            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl EaseWorkflow-hero-live-card">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/10 bg-current/5">
                <span className="absolute h-6 w-6 rounded-full border border-current/15" />
                <span className="absolute h-3 w-3 rounded-full bg-current/80" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] opacity-70">Live systems</p>
                <p className="text-sm font-semibold">AI + Automation + Web</p>
              </div>
            </div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: [0, 8, 0], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 14, repeat: Infinity, ease: easeInOut }}
              className="absolute inset-x-10 top-12 h-px origin-center bg-linear-to-r from-transparent via-cyan-400/35 to-transparent"
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.75, 0.35], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.68) 0%, transparent 28%, transparent 68%, rgba(255,255,255,0.18) 100%)' }}
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 20% 22%, rgba(59,130,246,0.12), transparent 3%), radial-gradient(circle at 86% 14%, rgba(14,165,233,0.1), transparent 2.2%), radial-gradient(circle at 10% 74%, rgba(99,102,241,0.07), transparent 2.4%)' }}
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.7, 0.35], y: [0, -3, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: easeInOut }}
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 50% 52%, transparent 0 35%, rgba(255,255,255,0.04) 35% 36%, transparent 36% 100%)' }}
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: [45, 49, 45], opacity: [0.5, 0.78, 0.5] }}
              transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
              className="absolute right-[-7%] top-[16%] h-[62%] w-[62%] rounded-[2.3rem] border opacity-70 transform-[rotate(45deg)] dark:opacity-45"
              style={{ borderColor: 'var(--hero-border)' }}
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: easeInOut }}
              className="absolute left-[12%] top-[14%] h-16 w-16 rounded-full blur-2xl"
              style={{ background: 'rgba(56, 189, 248, 0.12)' }}
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 5, 0], opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: easeInOut, delay: 0.6 }}
              className="absolute right-[12%] top-[10%] h-14 w-14 rounded-full blur-2xl"
              style={{ background: 'rgba(34, 211, 238, 0.12)' }}
            />

            <motion.svg
              viewBox="0 0 473 352"
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: easeInOut }}
            >
              <defs>
                <linearGradient id="heroPlatformTop" x1="121" y1="170" x2="326" y2="258" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--hero-surface-strong)" />
                  <stop offset="0.55" stopColor="var(--hero-surface)" />
                  <stop offset="1" stopColor="var(--hero-card-bg)" />
                </linearGradient>
                <linearGradient id="heroPlatformSide" x1="114" y1="232" x2="114" y2="302" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--hero-card-bg)" />
                  <stop offset="1" stopColor="var(--hero-border)" />
                </linearGradient>
                <linearGradient id="heroCubeGlass" x1="155" y1="56" x2="303" y2="208" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--hero-node-glow)" />
                  <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <filter id="heroGlow" x="0" y="0" width="473" height="352" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="12" />
                </filter>
              </defs>

              <motion.path
                d="M205 68 C254 42, 315 42, 364 68"
                stroke="var(--hero-network-line-strong)"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={shouldReduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: easeInOut }}
              />
              <motion.path
                d="M198 88 C250 63, 314 63, 366 88"
                stroke="var(--hero-network-line)"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.85, 0.45] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: easeInOut, delay: 0.3 }}
              />
              <ellipse cx="236.5" cy="95" rx="108" ry="37" stroke="var(--hero-border)" strokeWidth="1.5" opacity="0.9" />
              <ellipse cx="236.5" cy="105" rx="117" ry="39" stroke="var(--hero-pill-border)" strokeWidth="1.25" opacity="0.85" />

              <path d="M108 258 H344 L316 282 H80 Z" fill="var(--hero-card-bg)" opacity="0.22" />

              <motion.g
                filter="url(#heroGlow)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scaleX: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: easeInOut }}
              >
                <ellipse cx="236" cy="242" rx="58" ry="18" fill="var(--hero-node-glow)" />
              </motion.g>

              <path d="M86 198 L236 146 L386 198 L236 250 Z" fill="url(#heroPlatformTop)" />
              <path d="M86 198 L86 273 L236 325 L236 250 Z" fill="url(#heroPlatformSide)" />
              <path d="M236 250 L386 198 L386 273 L236 325 Z" fill="var(--hero-surface-strong)" />
              <path d="M86 198 L236 146 L386 198" stroke="var(--hero-surface-strong)" strokeWidth="1" opacity="0.92" />
              <path d="M86 198 L86 273 L236 325 L386 273 L386 198" stroke="var(--hero-border)" strokeWidth="1" opacity="0.7" />
              <path d="M86 198 L86 273" stroke="var(--hero-network-line)" strokeWidth="1" />
              <path d="M386 198 L386 273" stroke="var(--hero-surface-strong)" strokeWidth="1" />

              <path d="M236 76 L193 102 V169 L236 196 L279 169 V102 Z" fill="url(#heroCubeGlass)" stroke="var(--hero-network-line-strong)" strokeWidth="1.1" />
              <path d="M193 102 L236 76 L279 102" fill="var(--hero-surface-strong)" stroke="var(--hero-network-line)" strokeWidth="1.1" />
              <path d="M193 102 L193 169 L236 196" stroke="var(--hero-network-line)" strokeWidth="1" />
              <path d="M279 102 L279 169 L236 196" stroke="var(--hero-network-line)" strokeWidth="1" />
              <path d="M193 102 L236 126 L279 102" fill="none" stroke="var(--hero-surface-strong)" strokeWidth="1" />

              <text x="236" y="172" textAnchor="middle" fontSize="63" fontWeight="700" fill="var(--hero-pill-text)" letterSpacing="0.02em" style={{ paintOrder: 'stroke fill' }}>
                AI
              </text>

              <motion.circle
                cx="86"
                cy="175"
                r="5.8"
                fill="var(--hero-node)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.65, 1, 0.65], scale: [1, 1.18, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: easeInOut }}
              />
              <motion.circle
                cx="402"
                cy="86"
                r="4.2"
                fill="var(--hero-network-line-strong)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: easeInOut, delay: 0.4 }}
              />

              <motion.circle
                cx="116"
                cy="64"
                r="3.6"
                fill="var(--hero-node)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.9, 0.35], scale: [1, 1.3, 1] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: easeInOut, delay: 0.2 }}
              />

              <motion.circle
                cx="236"
                cy="224"
                r="18"
                fill="var(--hero-node-glow)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.9, 0.45], scale: [1, 1.08, 1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: easeInOut }}
              />
              <motion.circle
                cx="236"
                cy="224"
                r="9"
                fill="var(--hero-surface-strong)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: easeInOut }}
              />
              <motion.circle
                cx="236"
                cy="224"
                r="4"
                fill="var(--hero-node)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.35, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: easeInOut }}
              />

              <motion.path
                d="M206 248 C206 248, 225 235, 236 235 C247 235, 266 248, 266 248"
                stroke="var(--hero-node-glow)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#heroGlow)"
                animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.8, 0.35], scaleX: [0.96, 1.06, 0.96] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: easeInOut }}
              />
              <motion.path
                d="M100 54 C122 33, 150 22, 186 22"
                stroke="var(--hero-surface)"
                strokeWidth="1"
                animate={shouldReduceMotion ? undefined : { opacity: [0.1, 0.45, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
              />
              <motion.path
                d="M390 214 C412 230, 428 246, 440 266"
                stroke="var(--hero-surface)"
                strokeWidth="1"
                animate={shouldReduceMotion ? undefined : { opacity: [0.08, 0.35, 0.08] }}
                transition={{ duration: 9, repeat: Infinity, ease: easeInOut, delay: 0.7 }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
