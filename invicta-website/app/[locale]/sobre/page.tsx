import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = t.raw('values.list') as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-invicta-gold font-medium text-sm tracking-widest uppercase mb-3">
          {t('hero')}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
          {t('title')}
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-invicta-navy dark:text-white mb-4">{t('mission.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('mission.text')}</p>
          </div>
          <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-invicta-navy dark:text-white mb-4">{t('vision.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('vision.text')}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-invicta-navy dark:text-white mb-6">{t('values.title')}</h2>
          <ul className="space-y-4">
            {values.map((v: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-invicta-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-invicta-gold/5 border border-invicta-gold/20 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-invicta-navy dark:text-white mb-4">{t('tech.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('tech.text')}</p>
        </div>
      </div>
    </div>
  );
}
