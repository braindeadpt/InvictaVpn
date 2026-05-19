'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LocaleNotFound() {
  const t = useTranslations('notfound');

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-invicta-gold mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{t('text')}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-invicta-gold text-invicta-navy font-semibold px-6 py-3 rounded-xl hover:bg-invicta-gold-light transition-all"
        >
          {t('button')}
        </Link>
      </div>
    </div>
  );
}
