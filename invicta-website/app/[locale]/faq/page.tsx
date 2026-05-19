import { useTranslations } from 'next-intl';
import FaqAccordion from '@/components/FaqAccordion';

export default function FaqPage() {
  const t = useTranslations('faq');

  const items = t.raw('items') as { q: string; a: string }[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      <FaqAccordion items={items} />
    </div>
  );
}
