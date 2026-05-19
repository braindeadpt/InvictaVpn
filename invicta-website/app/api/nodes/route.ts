import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { getActiveNodes } = await import('@/lib/sentinel');
    const data = await getActiveNodes();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ count: 0, nodes: [] });
  }
}
