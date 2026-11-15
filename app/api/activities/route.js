import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const res = await query(
      'SELECT id, name, logged_at FROM activities ORDER BY logged_at DESC LIMIT 50'
    );
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name } = await request.json();
    if (!name) return NextResponse.json({ error: 'Name required' }, { status: 400 });

    const res = await query(
      'INSERT INTO activities (name) VALUES ($1) RETURNING id, name, logged_at',
      [name]
    );
    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to log' }, { status: 500 });
  }
}
