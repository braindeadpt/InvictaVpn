import { useTranslations } from 'next-intl';
import ComparisonTable from '@/components/ComparisonTable';

export default function ComparePage() {
  const t = useTranslations('compare');

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl overflow-hidden">
        <ComparisonTable />
      </div>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 text-center max-w-3xl mx-auto">
        {t('note')}
      </p>
    </div>
  );
}
