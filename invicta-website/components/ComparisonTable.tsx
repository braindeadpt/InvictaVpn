'use client';

import { useTranslations } from 'next-intl';

export default function ComparisonTable() {
  const t = useTranslations('compare.table');

  const headers = t.raw('header') as string[];
  const rows = t.raw('rows') as { feature: string; values: string[] }[];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-invicta-gold/20">
            {headers.map((h: string, i: number) => (
              <th
                key={i}
                className={`py-4 px-4 text-left font-semibold ${
                  i === 0
                    ? 'text-invicta-navy dark:text-white'
                    : i === 1
                    ? 'text-invicta-gold'
                    : 'text-gray-500'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, i: number) => (
            <tr
              key={i}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-invicta-gold/5 transition-colors"
            >
              <td className="py-4 px-4 font-medium text-invicta-navy dark:text-white">{row.feature}</td>
              {row.values.map((val: string, j: number) => (
                <td
                  key={j}
                  className={`py-4 px-4 ${
                    j === 0
                      ? 'text-invicta-gold font-medium'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
