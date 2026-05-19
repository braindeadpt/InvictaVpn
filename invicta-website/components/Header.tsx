'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/porque-invicta', labelKey: 'why' },
  { href: '/funcionalidades', labelKey: 'features' },
  { href: '/comparativo', labelKey: 'compare' },
  { href: '/descarregar', labelKey: 'download' },
  { href: '/faq', labelKey: 'faq' },
];

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    const p = pathname.replace(`/${locale}`, '') || '/';
    if (href === '/') return p === '/';
    return p.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1B3F]/90 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-invicta-gold to-invicta-gold-dark p-[2px] transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-invicta-navy flex items-center justify-center">
                <span className="text-invicta-gold font-bold text-lg">I</span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-wide">Invicta</span>
              <span className="text-lg font-bold text-invicta-gold ml-0.5">VPN</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'text-invicta-gold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t(link.labelKey)}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-invicta-gold to-invicta-gold-light rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
              <Link
                href="/pt"
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  locale === 'pt'
                    ? 'bg-invicta-gold text-invicta-navy shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                PT
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  locale === 'en'
                    ? 'bg-invicta-gold text-invicta-navy shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white rounded-full transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white rounded-full transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-6 border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-invicta-gold bg-invicta-gold/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 px-4">
              <Link
                href="/pt"
                onClick={() => setMenuOpen(false)}
                className={`flex-1 text-center px-3 py-2 rounded-lg text-xs font-medium border ${
                  locale === 'pt'
                    ? 'bg-invicta-gold text-invicta-navy border-invicta-gold'
                    : 'border-white/10 text-gray-400'
                }`}
              >
                PT
              </Link>
              <Link
                href="/en"
                onClick={() => setMenuOpen(false)}
                className={`flex-1 text-center px-3 py-2 rounded-lg text-xs font-medium border ${
                  locale === 'en'
                    ? 'bg-invicta-gold text-invicta-navy border-invicta-gold'
                    : 'border-white/10 text-gray-400'
                }`}
              >
                EN
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
