import { getMessages, getLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';
import ComparisonTable from '@/components/ComparisonTable';

export default async function HomePage() {
  const messages = await getMessages();
  const locale = await getLocale();
  const features = (messages as any).features?.list || [];

  return (
    <>
      <Hero />

      <section className="py-24 bg-white dark:bg-invicta-dark relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-gray-50/50 via-transparent to-transparent dark:from-invicta-navy/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <p className="text-invicta-gold font-medium text-sm tracking-widest uppercase mb-4">
              Invicta VPN
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-invicta-navy dark:text-white mb-4">
              {(messages as any).features?.title || 'Funcionalidades'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {(messages as any).features?.subtitle || ''}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.slice(0, 8).map((f: any, i: number) => (
              <FeatureCard key={i} title={f.title} text={f.text} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/funcionalidades`}
              className="inline-flex items-center gap-2 text-invicta-gold font-medium hover:text-invicta-gold-light transition-colors group"
            >
              {(messages as any).features?.viewAll || 'Ver todas'}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50 dark:bg-invicta-navy/20 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-invicta-navy dark:text-white mb-4">
              {(messages as any).compare?.title || 'Comparativo'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {(messages as any).compare?.subtitle || ''}
            </p>
          </div>
          <div className="bg-white dark:bg-invicta-navy/40 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-invicta-dark dark:to-invicta-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-invicta-navy dark:text-white mb-6">
            {(messages as any).hero?.subtitle}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {(messages as any).hero?.description}
          </p>
          <Link
            href={`/${locale}/descarregar`}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-invicta-gold to-invicta-gold-dark text-invicta-navy font-semibold px-10 py-4 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-invicta-gold/20"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10">{(messages as any).hero?.cta || 'Descarregar APK'}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
