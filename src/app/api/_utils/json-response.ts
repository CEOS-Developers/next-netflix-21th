import { NextResponse } from 'next/server';

export function ok<T>(data: T) {
  return NextResponse.json(data, { status: 200 });
}

export function err(message = 'Internal Server Error', status = 500) {
  return NextResponse.json({ message }, { status });
}
