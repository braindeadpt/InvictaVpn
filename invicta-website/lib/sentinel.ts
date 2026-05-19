import 'server-only';

import { SentinelClient } from '@sentinel-official/sentinel-js-sdk';

const RPC_ENDPOINT = 'https://rpc.sentinel.co:443';

let client: SentinelClient | null = null;

async function getClient(): Promise<SentinelClient> {
  if (!client) {
    client = await SentinelClient.connect(RPC_ENDPOINT);
  }
  return client;
}

function parsePrice(prices: any[]): { hourlyUdpn: number; gbUdpn: number } {
  let h = 0, g = 0;
  for (const p of prices || []) {
    if (p.denom === 'udvpn') {
      if (p.hourlyPrices) h = Number(p.baseValue);
      if (p.gigabytePrices) g = Number(p.baseValue);
    }
  }
  return { hourlyUdpn: h, gbUdpn: g };
}

export interface NodeInfo {
  address: string;
  status: string;
  ip?: string;
  country?: string;
  city?: string;
  hourlyUdpn: number;
  gbUdpn: number;
}

const GEO_NAMES: Record<string, { country: string; city: string }> = {};

function guessLocation(ip: string): { country: string; city: string } {
  if (GEO_NAMES[ip]) return GEO_NAMES[ip];
  const parts = ip.split('.');
  const first = parseInt(parts[0]);
  const second = parseInt(parts[1]);
  let country = 'Unknown', city = '';
  if (first >= 1 && first <= 50) { country = 'United States'; city = 'New York'; }
  else if (first >= 51 && first <= 90) { country = 'Germany'; city = 'Frankfurt'; }
  else if (first >= 91 && first <= 110) { country = 'Netherlands'; city = 'Amsterdam'; }
  else if (first >= 111 && first <= 130) { country = 'United Kingdom'; city = 'London'; }
  else if (first >= 131 && first <= 150) { country = 'France'; city = 'Paris'; }
  else if (first >= 151 && first <= 180) { country = 'Japan'; city = 'Tokyo'; }
  else if (first >= 181 && first <= 200) { country = 'Brazil'; city = 'São Paulo'; }
  else if (first >= 201 && first <= 220) { country = 'Singapore'; city = 'Singapore'; }
  else { country = 'Other'; city = ''; }
  GEO_NAMES[ip] = { country, city };
  return { country, city };
}

export async function getActiveNodes(): Promise<{ count: number; nodes: NodeInfo[] }> {
  try {
    const c = await getClient();
    const { Status, PageRequest } = await import('@sentinel-official/sentinel-js-sdk');

    const result = await c.sentinelQuery!.node.nodes(
      Status.STATUS_ACTIVE,
      PageRequest.fromPartial({ limit: 50, countTotal: true })
    );

    const nodesArr = result.nodes || [];
    const pageRes = result.pagination;

    const mappedNodes: NodeInfo[] = (nodesArr || []).map((n: any) => {
      const ip = (n.remoteAddrs || [])[0]?.split(':')[0] || '';
      const loc = guessLocation(ip);
      let h = 0, g = 0;
      for (const p of n.hourlyPrices || []) {
        if (p.denom === 'udvpn') h = Math.round(Number(p.baseValue) / 1_000_000 * 100) / 100;
      }
      for (const p of n.gigabytePrices || []) {
        if (p.denom === 'udvpn') g = Math.round(Number(p.baseValue) / 1_000_000 * 100) / 100;
      }
      return {
        address: n.address || '',
        status: n.status?.toString() || '',
        ip,
        country: loc.country,
        city: loc.city,
        hourlyUdpn: h,
        gbUdpn: g,
      };
    });

    return {
      count: Number(pageRes?.total || 0),
      nodes: mappedNodes,
    };
  } catch (e) {
    console.error('Failed to fetch nodes:', e);
    return { count: 0, nodes: [] };
  }
}
