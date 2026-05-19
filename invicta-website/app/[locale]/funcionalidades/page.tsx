import { useTranslations } from 'next-intl';
import FeatureCard from '@/components/FeatureCard';

export default function FeaturesPage() {
  const t = useTranslations('features');

  const list = t.raw('list') as { title: string; text: string }[];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((item, i) => (
          <FeatureCard key={i} title={item.title} text={item.text} index={i} />
        ))}
      </div>
    </div>
  );
}
