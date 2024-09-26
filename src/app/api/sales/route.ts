// /src/app/api/sales/route.ts

import { NextResponse } from 'next/server';
import { trackSale } from '@/actions/actions';

export async function POST(req: Request) {
  const formData = await req.formData();
  
  try {
    const sale = await trackSale(formData);
    return NextResponse.json(sale);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
