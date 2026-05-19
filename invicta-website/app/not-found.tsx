import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-invicta-light dark:bg-invicta-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-invicta-gold mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-invicta-gold text-invicta-navy font-semibold px-6 py-3 rounded-xl hover:bg-invicta-gold-light transition-all"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
