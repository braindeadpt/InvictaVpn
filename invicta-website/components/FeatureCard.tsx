'use client';

import { motion } from 'framer-motion';

const iconPaths: Record<string, React.ReactNode> = {
  shield: <path key="shield" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  zap: <path key="zap" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  globe: <path key="globe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 21H9m1-19h.5" />,
  lock: <path key="lock" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
  device: <path key="device" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  code: <path key="code" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  user: <path key="user" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  wallet: <path key="wallet" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
};

const icons = ['shield', 'zap', 'wallet', 'globe', 'lock', 'device', 'code', 'user'];

export default function FeatureCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white dark:bg-invicta-navy/30 border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:border-invicta-gold/30 transition-all hover:shadow-xl hover:shadow-invicta-gold/5"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-invicta-gold/20 to-invicta-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <svg className="w-6 h-6 text-invicta-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {iconPaths[icons[index % icons.length]]}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-invicta-navy dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}
