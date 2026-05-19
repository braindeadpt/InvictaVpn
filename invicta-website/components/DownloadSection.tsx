'use client';

import { useTranslations } from 'next-intl';
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadSection() {
  const t = useTranslations('download');

  const apkUrl = 'https://github.com/braindeadpt/InvictaVpn/releases/latest/download/invicta-vpn-mobile.apk';
  const tvApkUrl = 'https://github.com/braindeadpt/InvictaVpn/releases/latest/download/invicta-vpn-tv.apk';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-invicta-navy dark:text-white mb-3">{t('mobile.title')}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('mobile.text')}</p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <a
            href={apkUrl}
            className="inline-flex items-center gap-2 bg-invicta-gold text-invicta-navy font-semibold px-6 py-3 rounded-xl hover:bg-invicta-gold-light transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('mobile.button')}
          </a>
          <div className="bg-white p-2 rounded-lg border border-gray-200">
            <QRCodeSVG value={apkUrl} size={100} level="M" />
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-500">
          <p><span className="font-medium">{t('mobile.version')}:</span> 1.0.0</p>
          <p><span className="font-medium">{t('mobile.hash')}:</span> <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">disponível após build</code></p>
        </div>

        <details className="mt-4">
          <summary className="text-sm text-invicta-gold cursor-pointer hover:underline">{t('mobile.instructions')}</summary>
          <ol className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
            <li>{t('mobile.step1')}</li>
            <li>{t('mobile.step2')}</li>
            <li>{t('mobile.step3')}</li>
            <li>{t('mobile.step4')}</li>
            <li>{t('mobile.step5')}</li>
          </ol>
        </details>
      </div>

      <div className="bg-white dark:bg-invicta-navy/50 border border-gray-200 dark:border-invicta-gold/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-invicta-navy dark:text-white mb-3">{t('tv.title')}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('tv.text')}</p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <a
            href={tvApkUrl}
            className="inline-flex items-center gap-2 bg-invicta-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-invicta-dark transition-all border border-invicta-gold/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('tv.button')}
          </a>
          <div className="bg-white p-2 rounded-lg border border-gray-200">
            <QRCodeSVG value={tvApkUrl} size={100} level="M" />
          </div>
        </div>

        <details>
          <summary className="text-sm text-invicta-gold cursor-pointer hover:underline">{t('tv.instructions')}</summary>
          <ol className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
            <li>{t('tv.step1')}</li>
            <li>{t('tv.step2')}</li>
            <li>{t('tv.step3')}</li>
            <li>{t('tv.step4')}</li>
          </ol>
        </details>
      </div>
    </div>
  );
}
