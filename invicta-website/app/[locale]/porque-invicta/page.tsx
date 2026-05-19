import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WhyPage() {
  const t = useTranslations('why');

  const points = t.raw('points') as { title: string; text: string }[];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {points.map((point, i) => (
          <div
            key={i}
            className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8 hover:border-invicta-gold/30 transition-all"
          >
            <div className="w-10 h-10 bg-invicta-gold/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-invicta-gold font-bold">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-xl font-semibold text-invicta-navy dark:text-white mb-3">{point.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/descarregar"
          className="inline-flex items-center gap-2 bg-invicta-gold text-invicta-navy font-semibold px-8 py-4 rounded-xl hover:bg-invicta-gold-light transition-all text-lg"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}
