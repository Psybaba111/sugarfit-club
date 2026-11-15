import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const res = await query(
      'SELECT id, value, logged_at FROM glucose_logs ORDER BY logged_at DESC LIMIT 50'
    );
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch logs' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { value } = await request.json();
    if (!value) return NextResponse.json({ error: 'Value required' }, { status: 400 });

    const res = await query(
      'INSERT INTO glucose_logs (value) VALUES ($1) RETURNING id, value, logged_at',
      [value]
    );
    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to log' }, { status: 500 });
  }
}
