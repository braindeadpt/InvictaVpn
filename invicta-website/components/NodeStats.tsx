'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NodeStats() {
  const t = useTranslations('hero');
  const [stats, setStats] = useState<{ count: number } | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/nodes');
        const data = await res.json();
        setStats({ count: data.count || 0 });
      } catch {
        setStats({ count: 0 });
      }
    }
    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 flex flex-wrap gap-8">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
        <p className="text-3xl font-bold text-invicta-gold">
          {stats !== null ? stats.count.toLocaleString() : '...'}
        </p>
        <p className="text-sm text-gray-400">{t('stats')}</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
        <p className="text-3xl font-bold text-invicta-gold">100+</p>
        <p className="text-sm text-gray-400">Países</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
        <p className="text-3xl font-bold text-invicta-gold">100%</p>
        <p className="text-sm text-gray-400">Open Source</p>
      </div>
    </div>
  );
}
