'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, easeOut, easeInOut, useMotionValue, useTransform } from 'framer-motion';
import { Zap, Code, Package, Users, Workflow, BarChart3, Search, Lightbulb, Palette, Rocket, CheckCircle, Headphones } from 'lucide-react';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, shouldReduceMotion ? 0 : 2500);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: shouldReduceMotion ? 0 : 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: shouldReduceMotion ? 0 : 8,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const driftVariants = {
    animate: {
      x: [0, 30, -30, 0],
      y: [0, -40, 20, 0],
      transition: {
        duration: shouldReduceMotion ? 0 : 12,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const slowDriftVariants = {
    animate: {
      x: [0, -40, 40, 0],
      y: [0, 30, -30, 0],
      transition: {
        duration: shouldReduceMotion ? 0 : 16,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
    {showLoader && <Loader />}
    <section className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* Base gradient backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(30,27,75,0.4),rgba(15,23,42,0.8))] pointer-events-none" />

      {/* Large primary glow orb - floating */}
      <motion.div
        variants={driftVariants}
        animate="animate"
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"
      />

      {/* Secondary glow orb - drifting */}
      <motion.div
        variants={slowDriftVariants}
        animate="animate"
        className="absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-blue-600/12 blur-3xl pointer-events-none"
      />

      {/* Tertiary accent orb - floating */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none"
      />

      {/* Accent light ray - top right */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 6, repeat: Infinity, ease: easeInOut }}
        className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"
      />

      {/* Ambient glow - center */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      {/* Grid background with gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-50" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)] pointer-events-none" />

      {/* Subtle animated light streaks */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: shouldReduceMotion ? 0 : 7, repeat: Infinity, ease: easeInOut }}
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(34,211,238,0.03)_50%,transparent_100%)] pointer-events-none"
      />

      {/* Floating particles effect - top layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Particle 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            opacity: [0, 0.4, 0.2, 0],
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 15, repeat: Infinity, ease: easeInOut }}
          className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-cyan-300/60"
        />
        {/* Particle 2 */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -50, 0],
            opacity: [0, 0.3, 0.15, 0],
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 18, repeat: Infinity, delay: 2, ease: easeInOut }}
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-300/50"
        />
        {/* Particle 3 */}
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -120, 80, 0],
            opacity: [0, 0.25, 0.1, 0],
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 20, repeat: Infinity, delay: 4, ease: easeInOut }}
          className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-fuchsia-300/40"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-sm px-4 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-sm font-medium text-cyan-200">Now Available</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Build Smarter{' '}
          <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Digital Systems
          </span>{' '}
          for Modern Businesses
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We create automation systems, AI solutions, and premium web platforms that help businesses scale faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary CTA Button */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
            className="w-full sm:w-auto"
          >
            <div className="relative group">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <Link
                href="/#contact"
                className="relative inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-linear-to-r from-cyan-600/95 via-blue-600/95 to-cyan-700/95 px-8 sm:px-10 py-3.5 sm:py-4 text-base font-semibold text-white shadow-[0_8px_32px_rgba(34,211,238,0.3)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.5)] transition-all duration-300 hover:border-cyan-400/50 backdrop-blur-sm"
              >
                <span className="relative">Start Project</span>
              </Link>
            </div>
          </motion.div>

          {/* Secondary CTA Button */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
            className="w-full sm:w-auto"
          >
            <div className="relative group">
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-sky-400/30 via-cyan-400/30 to-blue-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <Link
                href="/#projects"
                className="relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 sm:px-10 py-3.5 sm:py-4 text-base font-semibold text-white/95 backdrop-blur-md transition-all duration-300 hover:bg-white/12 hover:border-white/35 hover:text-white shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)]"
              >
                <span className="relative">View Work</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Features brief */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-zinc-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-sm text-zinc-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-zinc-400">Support Available</div>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* Stats Section */}
    <StatsSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Services Section */}
    <ServicesSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Projects Section */}
    <ProjectsSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Process Section */}
    <ProcessSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Testimonials Section */}
    <TestimonialsSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Contact Section */}
    <ContactSection shouldReduceMotion={shouldReduceMotion} />
    
    {/* Footer */}
    <Footer />
    </>
  );
}

function StatsSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const stats = [
    { number: 50, suffix: '+', label: 'Projects', description: 'Delivered Successfully' },
    { number: 20, suffix: '+', label: 'Clients', description: 'Trusted Partners' },
    { number: 99, suffix: '%', label: 'Satisfaction', description: 'Client Rating' },
    { number: 24, suffix: '/7', label: 'Support', description: 'Always Available' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 8, repeat: Infinity, ease: easeInOut }}
        className="absolute -top-40 right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 10, repeat: Infinity, delay: 1, ease: easeInOut }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Trusted by{' '}
            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Proven results and performance metrics that demonstrate our commitment to excellence
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} itemVariants={itemVariants} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, itemVariants, shouldReduceMotion }: any) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (shouldReduceMotion) return;

    const animation = {
      duration: 2.5,
      delay: index * 0.1,
    };

    count.set(0);
    const target = stat.number;
    const startTime = Date.now();
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (animation.duration * 1000), 1);
      count.set(progress * target);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, animation.delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [stat.number, index, count, shouldReduceMotion]);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />

      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-white/8">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Icon background */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-blue-500/30 transition-all duration-300">
          <div className="h-6 w-6 rounded-full bg-linear-to-br from-cyan-400 to-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Number and suffix */}
        <div className="flex items-baseline gap-2 mb-2">
          <motion.span className="text-5xl sm:text-6xl font-bold bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            {shouldReduceMotion ? stat.number : <motion.span>{rounded}</motion.span>}
          </motion.span>
          <span className="text-2xl font-semibold text-cyan-300">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-xl font-semibold text-white mb-1">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{stat.description}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

function ServicesSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const services = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline workflows and boost productivity with machine learning.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern tech stack for optimal performance and user experience.',
    },
    {
      icon: Package,
      title: 'SaaS Platforms',
      description: 'Scalable, cloud-native SaaS solutions designed to grow with your business needs.',
    },
    {
      icon: Users,
      title: 'CRM Systems',
      description: 'Enterprise-grade CRM platforms to manage customer relationships and boost sales efficiency.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automated business processes that eliminate manual tasks and increase operational efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Systems',
      description: 'Real-time analytics dashboards providing actionable insights and data visualization.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 8, repeat: Infinity, ease: easeInOut }}
        className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 10, repeat: Infinity, delay: 1.5, ease: easeInOut }}
        className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Section label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-sm px-4 py-2 mb-8 sm:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-sm font-semibold text-cyan-200 tracking-widest uppercase">Services & Solutions</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Comprehensive{' '}
              <span className="block bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            From AI automation to custom SaaS platforms, we deliver comprehensive digital solutions that transform businesses and drive sustainable growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} itemVariants={itemVariants} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, itemVariants, shouldReduceMotion }: any) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.03 }}
      transition={{ duration: 0.35, type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative h-full"
    >
      {/* Animated glow background - enhanced */}
      <motion.div
        animate={{
          opacity: 0,
          scale: 1,
        }}
        whileHover={{
          opacity: shouldReduceMotion ? 0 : 1,
          scale: shouldReduceMotion ? 1 : 1.05,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/30 via-blue-500/20 to-cyan-500/10 blur-xl -z-10"
      />

      {/* Secondary glow layer */}
      <motion.div
        animate={{ opacity: 0 }}
        whileHover={{ opacity: shouldReduceMotion ? 0 : 0.5 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-cyan-400/0 via-sky-300/20 to-blue-400/0 blur-2xl -z-20"
      />

      {/* Card with enhanced shadow */}
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
        {/* Animated top gradient line */}
        <motion.div
          animate={{ opacity: 0.3 }}
          whileHover={{ opacity: shouldReduceMotion ? 0.3 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"
        />

        {/* Icon container with animation */}
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-blue-500/35 transition-all duration-300 shadow-[0_8px_24px_rgba(34,211,238,0.15)] group-hover:shadow-[0_12px_32px_rgba(34,211,238,0.25)]"
        >
          <motion.div
            animate={{ y: 0 }}
            whileHover={{ y: shouldReduceMotion ? 0 : -2 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-7 w-7 text-cyan-400 group-hover:text-sky-300 transition-colors duration-300" />
          </motion.div>
        </motion.div>

        {/* Title with animation */}
        <motion.h3
          animate={{ color: 'rgb(255, 255, 255)' }}
          whileHover={{ color: shouldReduceMotion ? 'rgb(255, 255, 255)' : 'rgb(165, 230, 255)' }}
          className="text-xl font-semibold mb-3 transition-colors duration-300"
        >
          {service.title}
        </motion.h3>

        {/* Description with subtle animation */}
        <motion.p
          animate={{ opacity: 0.65 }}
          whileHover={{ opacity: shouldReduceMotion ? 0.65 : 0.85 }}
          className="text-zinc-400 leading-relaxed transition-all duration-300"
        >
          {service.description}
        </motion.p>

        {/* Animated bottom accent line */}
        <motion.div
          animate={{ opacity: 0, scaleX: 0 }}
          whileHover={{
            opacity: shouldReduceMotion ? 0 : 1,
            scaleX: shouldReduceMotion ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent origin-left"
        />

        {/* Corner accent - top right */}
        <motion.div
          animate={{ opacity: 0 }}
          whileHover={{ opacity: shouldReduceMotion ? 0 : 0.5 }}
          transition={{ duration: 0.4 }}
          className="absolute top-4 right-4 w-8 h-8 border border-cyan-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </motion.div>
  );
}

function ProjectsSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const projects = [
    {
      id: 1,
      title: 'Healthcare Platform',
      description: 'HIPAA-compliant patient management system with real-time telemedicine capabilities',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🏥',
    },
    {
      id: 2,
      title: 'Restaurant Website',
      description: 'Full-stack restaurant platform with online ordering, menu management, and delivery tracking',
      tech: ['Next.js', 'Stripe', 'Google Maps', 'Tailwind'],
      color: 'from-orange-500 to-red-500',
      icon: '🍕',
    },
    {
      id: 3,
      title: 'AI Automation Dashboard',
      description: 'Intelligent workflow automation platform with machine learning and custom integrations',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      color: 'from-purple-500 to-pink-500',
      icon: '🤖',
    },
    {
      id: 4,
      title: 'CRM System',
      description: 'Enterprise-grade CRM with pipeline management, forecasting, and sales analytics',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      color: 'from-green-500 to-emerald-500',
      icon: '📊',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property marketplace with virtual tours, mortgage calculator, and agent management',
      tech: ['Next.js', 'Firebase', '3D.js', 'Mapbox'],
      color: 'from-amber-500 to-yellow-500',
      icon: '🏠',
    },
    {
      id: 6,
      title: 'SaaS Admin Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization and reporting',
      tech: ['React', 'GraphQL', 'D3.js', 'TypeScript'],
      color: 'from-cyan-500 to-blue-500',
      icon: '📈',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 9, repeat: Infinity, ease: easeInOut }}
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 11, repeat: Infinity, delay: 2, ease: easeInOut }}
        className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-15" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Section label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-sm px-4 py-2 mb-8 sm:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-sm font-semibold text-cyan-200 tracking-widest uppercase">Featured Work</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Our Latest{' '}
              <span className="block bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Projects & Case Studies
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Showcase of innovative projects we've built for clients across various industries
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} itemVariants={itemVariants} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, itemVariants, shouldReduceMotion }: any) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -12 }}
      transition={{ duration: 0.35, type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative h-full"
    >
      {/* Animated glow background */}
      <motion.div
        animate={{ opacity: 0, scale: 1 }}
        whileHover={{
          opacity: shouldReduceMotion ? 0 : 1,
          scale: shouldReduceMotion ? 1 : 1.08,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.color}/25 opacity-30 blur-xl -z-10`}
      />

      {/* Card container */}
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
        {/* Image preview area */}
        <motion.div
          animate={{ scale: 1 }}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          transition={{ duration: 0.4 }}
          className={`relative h-48 sm:h-56 bg-linear-to-br ${project.color} overflow-hidden`}
        >
          {/* Animated gradient overlay */}
          <motion.div
            animate={{ opacity: 0.4 }}
            whileHover={{ opacity: shouldReduceMotion ? 0.4 : 0.6 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent"
          />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:opacity-60 transition-opacity duration-300">
            {project.icon}
          </div>
        </motion.div>

        {/* Content area */}
        <div className="p-6 sm:p-8">
          {/* Top accent line */}
          <motion.div
            animate={{ opacity: 0.3 }}
            whileHover={{ opacity: shouldReduceMotion ? 0.3 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"
          />

          {/* Title */}
          <motion.h3
            animate={{ color: 'rgb(255, 255, 255)' }}
            whileHover={{ color: shouldReduceMotion ? 'rgb(255, 255, 255)' : 'rgb(165, 230, 255)' }}
            className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            animate={{ opacity: 0.65 }}
            whileHover={{ opacity: shouldReduceMotion ? 0.65 : 0.85 }}
            className="text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed transition-opacity duration-300"
          >
            {project.description}
          </motion.p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, idx: number) => (
              <motion.span
                key={idx}
                animate={{ scale: 1, opacity: 0.7 }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* View Project button */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group/btn hover:text-cyan-300 transition-colors duration-300">
              View Project
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ opacity: 0, scaleX: 0 }}
          whileHover={{
            opacity: shouldReduceMotion ? 0 : 1,
            scaleX: shouldReduceMotion ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent origin-left"
        />
      </div>
    </motion.div>
  );
}

function ProcessSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business goals, target audience, and current challenges to create a comprehensive roadmap.',
      icon: Search,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a tailored strategy aligned with your objectives and market opportunities.',
      icon: Lightbulb,
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 3,
      number: '03',
      title: 'Design',
      description: 'We create beautiful, intuitive designs that prioritize user experience and brand consistency.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      number: '04',
      title: 'Development',
      description: 'Our developers build scalable, high-performance solutions using cutting-edge technologies.',
      icon: Code,
      color: 'from-pink-500 to-orange-500',
    },
    {
      id: 5,
      number: '05',
      title: 'Launch',
      description: 'We deploy your project with thorough testing and optimization for maximum performance.',
      icon: Rocket,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 6,
      number: '06',
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure your solution continues to perform optimally.',
      icon: Headphones,
      color: 'from-yellow-500 to-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      {/* Primary cyan orb - top left */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.12, 1],
          y: [0, 20, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 10, repeat: Infinity, ease: easeInOut }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />

      {/* Secondary blue orb - bottom right */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
          y: [0, -25, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 12, repeat: Infinity, delay: 2, ease: easeInOut }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
      />

      {/* Tertiary purple orb - middle left for depth */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 14, repeat: Infinity, delay: 4, ease: easeInOut }}
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-500/6 blur-3xl pointer-events-none"
      />

      {/* Accent cyan orb - far top right */}
      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
          scale: [1, 1.08, 1],
          x: [0, -20, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 11, repeat: Infinity, delay: 3, ease: easeInOut }}
        className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none"
      />

      {/* Grid background with enhanced glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20" />

      {/* Soft radial gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0) 70%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-24"
        >
          {/* Section label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-sm px-4 py-2 mb-8 sm:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-sm font-semibold text-cyan-200 tracking-widest uppercase">Our Methodology</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              How We{' '}
              <span className="block bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Deliver Excellence
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Our proven 6-step process ensures quality, transparency, and results at every stage of your project
          </motion.p>
        </motion.div>

        {/* Process Steps with Connectors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Animated connector SVG - Desktop only */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                <stop offset="50%" stopColor="rgba(34,211,238,0.6)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0)" />
              </linearGradient>
            </defs>

            {/* Connection lines for 3-column layout */}
            <motion.line
              x1="200"
              y1="60"
              x2="400"
              y2="60"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="600"
              y1="60"
              x2="800"
              y2="60"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="200"
              y1="200"
              x2="400"
              y2="200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />

            {/* Vertical connecting lines */}
            <motion.line
              x1="1000"
              y1="60"
              x2="1000"
              y2="140"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />

            {/* Animated connection point indicators */}
            <motion.circle
              cx="200"
              cy="60"
              r="3"
              fill="rgba(34,211,238,0.8)"
              filter="url(#glow)"
              animate={{ r: [3, 6, 3], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.circle
              cx="400"
              cy="60"
              r="3"
              fill="rgba(34,211,238,0.8)"
              filter="url(#glow)"
              animate={{ r: [3, 6, 3], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="600"
              cy="60"
              r="3"
              fill="rgba(34,211,238,0.8)"
              filter="url(#glow)"
              animate={{ r: [3, 6, 3], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle
              cx="800"
              cy="60"
              r="3"
              fill="rgba(34,211,238,0.8)"
              filter="url(#glow)"
              animate={{ r: [3, 6, 3], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }}
            />
            <motion.circle
              cx="1000"
              cy="60"
              r="3"
              fill="rgba(34,211,238,0.8)"
              filter="url(#glow)"
              animate={{ r: [3, 6, 3], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
            />
          </motion.svg>

          {/* Grid of process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <ProcessStep key={step.id} step={step} itemVariants={itemVariants} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({ step, itemVariants, shouldReduceMotion }: any) {
  const Icon = step.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative"
    >
      {/* Animated glow background */}
      <motion.div
        animate={{ opacity: 0, scale: 1 }}
        whileHover={{
          opacity: shouldReduceMotion ? 0 : 1,
          scale: shouldReduceMotion ? 1 : 1.05,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.color}/25 opacity-30 blur-xl -z-10`}
      />

      {/* Animated border pulse on scroll */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-px rounded-2xl bg-linear-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 opacity-0 group-hover:opacity-0 pointer-events-none"
      />

      {/* Card */}
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
        {/* Top accent line */}
        <motion.div
          animate={{ opacity: 0.3 }}
          whileHover={{ opacity: shouldReduceMotion ? 0.3 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"
        />

        {/* Step number and icon container */}
        <div className="flex items-start justify-between mb-6">
          {/* Step number */}
          <motion.div
            animate={{ scale: 1 }}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity"
          >
            {step.number}
          </motion.div>

          {/* Icon container */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-blue-500/35 transition-all duration-300 shadow-[0_8px_24px_rgba(34,211,238,0.15)] group-hover:shadow-[0_12px_32px_rgba(34,211,238,0.25)]"
          >
            <Icon className="h-6 w-6 text-cyan-400 group-hover:text-sky-300 transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: 'rgb(255, 255, 255)' }}
          whileHover={{ color: shouldReduceMotion ? 'rgb(255, 255, 255)' : 'rgb(165, 230, 255)' }}
          className="text-xl font-semibold mb-3 transition-colors duration-300"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          animate={{ opacity: 0.65 }}
          whileHover={{ opacity: shouldReduceMotion ? 0.65 : 0.85 }}
          className="text-zinc-400 leading-relaxed transition-opacity duration-300"
        >
          {step.description}
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          animate={{ opacity: 0, scaleX: 0 }}
          whileHover={{
            opacity: shouldReduceMotion ? 0 : 1,
            scaleX: shouldReduceMotion ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent origin-left"
        />
      </div>
    </motion.div>
  );
}

function TestimonialsSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechVenture Labs',
      review: 'CloudFlow transformed our development process. The team was incredibly professional and delivered beyond expectations. Highly recommend for any ambitious startup.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Product Lead',
      company: 'Digital Innovations',
      review: 'Outstanding quality of work and communication throughout the project. CloudFlow understood our vision and executed it flawlessly. A true partner in growth.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Founder',
      company: 'Future Solutions Inc',
      review: 'Working with CloudFlow was a game-changer for our company. Their expertise and attention to detail resulted in a product we\'re incredibly proud of.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'CloudNext Systems',
      review: 'Exceptional technical expertise combined with genuine care for our success. CloudFlow consistently goes above and beyond. Worth every investment.',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Set items per slide on mount and resize
  useEffect(() => {
    const calculateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth >= 1024 ? 2 : 1);
    };

    calculateItemsPerSlide();
    window.addEventListener('resize', calculateItemsPerSlide);
    return () => window.removeEventListener('resize', calculateItemsPerSlide);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, totalSlides, shouldReduceMotion]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Get visible testimonials for current slide
  const visibleTestimonials = testimonials.slice(currentIndex * itemsPerSlide, (currentIndex + 1) * itemsPerSlide);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      {/* Primary glow orb - top right */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.12, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 10, repeat: Infinity, ease: easeInOut }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />

      {/* Secondary glow orb - bottom left */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 12, repeat: Infinity, delay: 2, ease: easeInOut }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-24"
        >
          {/* Premium label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Client Success Stories</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by Leading{' '}
            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Companies
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            See what our clients have to say about their experience working with CloudFlow and the impact we've made on their business.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeOut }}
              >
                <TestimonialCard testimonial={testimonial} shouldReduceMotion={shouldReduceMotion} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-2 mt-12 sm:mt-16"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
              }}
              animate={{
                width: index === currentIndex ? 32 : 8,
                backgroundColor: index === currentIndex ? 'rgba(34, 211, 238, 0.8)' : 'rgba(34, 211, 238, 0.2)',
              }}
              whileHover={{
                backgroundColor: index === currentIndex ? 'rgba(34, 211, 238, 1)' : 'rgba(34, 211, 238, 0.4)',
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full transition-all"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </motion.div>

        {/* Pause indicator */}
        {isPaused && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-zinc-400 mt-4"
          >
            Paused — move to resume
          </motion.p>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, shouldReduceMotion }: any) {
  return (
    <motion.div 
      whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.02 }} 
      transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 25 }} 
      className="group relative h-full"
    >
      {/* Outer glow layer - enhances on hover */}
      <motion.div
        animate={{ opacity: 0, scale: 1 }}
        whileHover={{
          opacity: shouldReduceMotion ? 0 : 0.8,
          scale: shouldReduceMotion ? 1 : 1.08,
        }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="absolute -inset-1 rounded-2xl bg-linear-to-br from-cyan-500/30 to-blue-500/20 blur-xl -z-10"
      />

      {/* Animated inner glow background */}
      <motion.div
        animate={{ opacity: 0.3, scale: 1 }}
        whileHover={{
          opacity: shouldReduceMotion ? 0.3 : 0.5,
          scale: shouldReduceMotion ? 1 : 1.05,
        }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/15 blur-xl -z-10"
      />

      {/* Card container with smooth transitions */}
      <motion.div
        animate={{ 
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(34,211,238,0.1)'
        }}
        whileHover={{
          boxShadow: shouldReduceMotion 
            ? '0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(34,211,238,0.1)' 
            : '0 24px 48px rgba(34,211,238,0.2), inset 0 0 32px rgba(34,211,238,0.05), 0 0 20px rgba(34,211,238,0.1)'
        }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="relative h-full rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/3 backdrop-blur-xl p-8 sm:p-10 overflow-hidden group-hover:border-cyan-400/60 transition-colors duration-300"
      >
        {/* Subtle animated gradient overlay on hover */}
        <motion.div
          animate={{ opacity: 0 }}
          whileHover={{ opacity: shouldReduceMotion ? 0 : 0.03 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-linear-to-br from-cyan-400 via-transparent to-blue-400 pointer-events-none"
        />

        {/* Top accent line - enhanced glow */}
        <motion.div
          animate={{ opacity: 0.3, width: '60%' }}
          whileHover={{ opacity: shouldReduceMotion ? 0.3 : 1, width: shouldReduceMotion ? '60%' : '100%' }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        />

        {/* Star rating - enhanced hover */}
        <motion.div animate={{ opacity: 0.85 }} whileHover={{ opacity: shouldReduceMotion ? 0.85 : 1 }} className="flex gap-1.5 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ scale: 1, rotate: 0 }} 
              whileHover={{ 
                scale: shouldReduceMotion ? 1 : 1.15,
                rotate: shouldReduceMotion ? 0 : 5
              }} 
              transition={{ type: 'spring', stiffness: 400, delay: i * 0.05 }} 
              className="text-yellow-400 drop-shadow-[0_2px_4px_rgba(250,204,21,0.3)]"
            >
              ★
            </motion.div>
          ))}
        </motion.div>

        {/* Review text - enhanced readability on hover */}
        <motion.p 
          animate={{ opacity: 0.9, letterSpacing: '0px' }} 
          whileHover={{ opacity: shouldReduceMotion ? 0.9 : 1 }} 
          className="text-base text-zinc-300 leading-relaxed mb-8 transition-opacity duration-300"
        >
          "{testimonial.review}"
        </motion.p>

        {/* Client info section with enhanced interactivity */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/10 group-hover:border-cyan-400/30 transition-colors duration-300">
          {/* Avatar - enhanced glow on hover */}
          <motion.div
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.15, rotate: shouldReduceMotion ? 0 : -5 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/25 text-2xl shadow-[0_8px_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_12px_32px_rgba(34,211,238,0.4)] transition-all duration-300 shrink-0"
          >
            {testimonial.avatar}
          </motion.div>

          {/* Name and role - enhanced highlight */}
          <div className="flex-1 min-w-0">
            <motion.h4 
              animate={{ color: 'rgb(255, 255, 255)', textShadow: '0 0 0px rgba(34,211,238,0)' }} 
              whileHover={{ 
                color: shouldReduceMotion ? 'rgb(255, 255, 255)' : 'rgb(165, 230, 255)',
                textShadow: shouldReduceMotion ? '0 0 0px rgba(34,211,238,0)' : '0 0 12px rgba(34,211,238,0.3)'
              }} 
              transition={{ duration: 0.3 }}
              className="font-semibold transition-all duration-300 truncate"
            >
              {testimonial.name}
            </motion.h4>
            <motion.p 
              animate={{ opacity: 0.65 }} 
              whileHover={{ opacity: shouldReduceMotion ? 0.65 : 0.9 }} 
              className="text-sm text-zinc-400 transition-opacity duration-300 truncate"
            >
              {testimonial.role} at <span className="text-cyan-400/70 group-hover:text-cyan-300 transition-colors duration-300">{testimonial.company}</span>
            </motion.p>
          </div>
        </div>

        {/* Bottom accent line - enhanced animation */}
        <motion.div
          animate={{ opacity: 0, scaleX: 0, width: '60%' }}
          whileHover={{
            opacity: shouldReduceMotion ? 0 : 1,
            scaleX: shouldReduceMotion ? 0 : 1,
            width: shouldReduceMotion ? '60%' : '100%'
          }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.4)] origin-center"
        />
      </motion.div>
    </motion.div>
  );
}

function ContactSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      {/* Primary glow orb - top left */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.12, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 10, repeat: Infinity, ease: easeInOut }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />

      {/* Secondary glow orb - bottom right */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 12, repeat: Infinity, delay: 2, ease: easeInOut }}
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main container with split layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left side - Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Premium label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Get in Touch</span>
            </div>

            {/* Main heading */}
            <motion.h2 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Let's Build{' '}
              <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-xl">
              Have a project in mind? Let's discuss how CloudFlow can help bring your vision to life. Reach out and let's create something amazing together.
            </motion.p>

            {/* Contact details */}
            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/30 to-blue-500/20 text-xl">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Email</p>
                  <motion.a
                    href="mailto:hello@cloudflow.dev"
                    whileHover={{ x: 4 }}
                    className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    hello@cloudflow.dev
                  </motion.a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500/30 to-purple-500/20 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Phone</p>
                  <motion.a
                    href="tel:+1234567890"
                    whileHover={{ x: 4 }}
                    className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </motion.a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-purple-500/30 to-pink-500/20 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Location</p>
                  <p className="text-lg font-semibold text-white">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Response time info */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/10">
              <p className="text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Typically respond within 24 hours
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div variants={itemVariants}>
            <ContactForm shouldReduceMotion={shouldReduceMotion} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetOptions = [
    { value: '$5k-$10k', label: '$5k - $10k' },
    { value: '$10k-$25k', label: '$10k - $25k' },
    { value: '$25k-$50k', label: '$25k - $50k' },
    { value: '$50k+', label: '$50k+' },
  ];

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'saas-platform', label: 'SaaS Platform' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (formData.name && formData.email && formData.message) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', budget: '', service: '', message: '' });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Name input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl"
        />
      </motion.div>

      {/* Email input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl"
        />
      </motion.div>

      {/* Budget and Service dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Budget dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-medium text-zinc-300 mb-2">Project Budget</label>
          <motion.select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2322d3ee' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: '36px',
            }}
          >
            <option value="" disabled className="bg-zinc-900 text-white">
              Select budget
            </option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-900 text-white">
                {option.label}
              </option>
            ))}
          </motion.select>
        </motion.div>

        {/* Service type dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-medium text-zinc-300 mb-2">Service Type</label>
          <motion.select
            name="service"
            value={formData.service}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2322d3ee' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: '36px',
            }}
          >
            <option value="" disabled className="bg-zinc-900 text-white">
              Select service
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-900 text-white">
                {option.label}
              </option>
            ))}
          </motion.select>
        </motion.div>
      </div>

      {/* Message textarea */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={5}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl resize-none"
        />
      </motion.div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || submitStatus === 'success'}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isSubmitting ? (
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
            Sending...
          </motion.span>
        ) : submitStatus === 'success' ? (
          'Message Sent! 🎉'
        ) : (
          'Send Message'
        )}
      </motion.button>

      {/* Status messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: submitStatus !== 'idle' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`p-4 rounded-lg text-center text-sm font-medium ${
          submitStatus === 'success'
            ? 'bg-green-500/10 text-green-300 border border-green-500/30'
            : submitStatus === 'error'
              ? 'bg-red-500/10 text-red-300 border border-red-500/30'
              : 'hidden'
        }`}
      >
        {submitStatus === 'success' && "We've received your message! We'll get back to you soon."}
        {submitStatus === 'error' && 'Please fill in all required fields.'}
      </motion.div>
    </motion.form>
  );
}

function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: any) => {
    e.preventDefault();
    if (!emailInput) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
      return;
    }

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setNewsletterStatus('success');
    setEmailInput('');
    setTimeout(() => setNewsletterStatus('idle'), 3000);
  };

  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'SaaS Solutions', href: '#' },
      { name: 'Consulting', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Community', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'Twitter', href: '#', label: 'Follow on Twitter' },
    { icon: 'LinkedIn', href: '#', label: 'Connect on LinkedIn' },
    { icon: 'GitHub', href: '#', label: 'Star on GitHub' },
    { icon: 'Instagram', href: '#', label: 'Follow on Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <footer className="relative w-full bg-zinc-950 border-t border-white/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
          className="absolute -top-1/2 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 2, ease: easeInOut }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl"
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                CloudFlow
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Building premium digital solutions for ambitious companies. Innovation, quality, and excellence in every project.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.name}
                    <motion.span whileHover={{ x: 2 }} className="text-xs">
                      →
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.name}
                    <motion.span whileHover={{ x: 2 }} className="text-xs">
                      →
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.name}
                    <motion.span whileHover={{ x: 2 }} className="text-xs">
                      →
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-sm text-zinc-400 mb-4">Stay updated with the latest from CloudFlow.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative group">
                <motion.input
                  type="email"
                  value={emailInput}
                  onChange={(e: any) => setEmailInput(e.target.value)}
                  placeholder="Enter email"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-[0_0_16px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
            {newsletterStatus === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-green-400 mt-2">
                ✓ Subscribed!
              </motion.p>
            )}
            {newsletterStatus === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-400 mt-2">
                Please enter a valid email
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8 origin-left"
        />

        {/* Bottom section - Social links and Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              title="Twitter"
            >
              <span className="text-lg">𝕏</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              title="LinkedIn"
            >
              <span className="text-lg">💼</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              title="GitHub"
            >
              <span className="text-lg">⚙️</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              title="Instagram"
            >
              <span className="text-lg">📸</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center sm:text-right">
            <p className="text-xs text-zinc-500">
              © 2024 CloudFlow. All rights reserved.{' '}
              <motion.a
                href="#"
                whileHover={{ textDecoration: 'underline' }}
                className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
              >
                Privacy
              </motion.a>
              {' '} • {' '}
              <motion.a
                href="#"
                whileHover={{ textDecoration: 'underline' }}
                className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
              >
                Terms
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
}

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1, ease: easeInOut }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-linear-to-br from-blue-500 to-purple-500 blur-3xl opacity-15"
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-40" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Animated logo/rings */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
            className="absolute inset-0 rounded-full border-2 border-cyan-400/40 blur-sm"
          />

          {/* Middle rotating ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-cyan-400/30 border-t-cyan-400 border-r-cyan-400/50 border-b-transparent border-l-transparent"
          />

          {/* Inner pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: easeInOut }}
            className="absolute inset-16 rounded-full border-2 border-blue-400/30"
          />

          {/* Center logo with shimmer */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
            className="relative flex items-center justify-center w-20 h-20"
          >
            <div className="text-4xl font-bold bg-linear-to-br from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              ⚡
            </div>

            {/* Shimmer effect overlay */}
            <motion.div
              animate={{
                x: [-100, 100],
                opacity: [0, 0.5, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent blur-sm rounded-full"
            />
          </motion.div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
            className="text-2xl font-bold text-white text-center"
          >
            CloudFlow
          </motion.h2>

          {/* Animated dots */}
          <div className="flex gap-2 h-2">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-linear-to-b from-cyan-400 to-blue-400"
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-linear-to-b from-cyan-400 to-blue-400"
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-linear-to-b from-cyan-400 to-blue-400"
            />
          </div>

          {/* Loading message */}
          <motion.p
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
            className="text-xs uppercase tracking-widest text-zinc-400 mt-4"
          >
            Loading premium experience...
          </motion.p>
        </div>
      </div>

      {/* Fade out background */}
      <motion.div
        animate={{ opacity: [0, 0, 0] }}
        transition={{ duration: 2.5, times: [0, 0.9, 1] }}
        className="absolute inset-0 bg-zinc-950 pointer-events-none"
      />
    </motion.div>
  );
}
