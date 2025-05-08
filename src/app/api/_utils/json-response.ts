import { NextResponse } from 'next/server';

export function ok<T>(data: T): NextResponse {
  return NextResponse.json(data, { status: 200 });
}

export function err(message = 'Internal Server Error', status = 500): NextResponse {
  return NextResponse.json({ message }, { status });
}
