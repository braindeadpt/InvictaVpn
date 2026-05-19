'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

function StatsBadge({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl px-6 py-4 text-center"
    >
      <p className="text-2xl sm:text-3xl font-bold gradient-text">{value}</p>
      <p className="text-xs sm:text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [nodeCount, setNodeCount] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNodes() {
      try {
        const res = await fetch('/api/nodes');
        const data = await res.json();
        setNodeCount(data.count ? data.count.toLocaleString() : '2000+');
      } catch {
        setNodeCount('2000+');
      }
    }
    fetchNodes();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-invicta-navy">
      <div className="absolute inset-0 gradient-mesh" />

      <FloatingShape className="w-64 h-64 bg-invicta-gold -top-20 -right-20" delay={0} />
      <FloatingShape className="w-48 h-48 bg-blue-400 bottom-40 -left-20" delay={2} />
      <FloatingShape className="w-32 h-32 bg-blue-400/30 top-1/3 left-1/4" delay={4} />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-blue-400/20 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-blue-400/10 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/30 animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-400/20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 bg-invicta-gold/10 border border-invicta-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-invicta-gold animate-pulse" />
            <span className="text-invicta-gold text-xs sm:text-sm font-medium tracking-wide">
              {t('subtitle')}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          {t('headline1')}
          <br />
          <span className="gradient-text">{t('headline2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href={`/${locale}/descarregar`}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-invicta-gold to-invicta-gold-dark text-invicta-navy font-semibold px-8 py-4 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-invicta-gold/20"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10">{t('cta')}</span>
          </Link>

          <Link
            href={`/${locale}/porque-invicta`}
            className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-invicta-gold/50 transition-all"
          >
            {t('why_cta')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 w-full"
        >
          <StatsBadge value={nodeCount || '...'} label={t('stats')} />
          <StatsBadge value="100+" label="Países" />
          <StatsBadge value="100%" label="Open Source" />
          <StatsBadge value="Zero" label="Logs" />
        </motion.div>
      </div>

    </section>
  );
}
