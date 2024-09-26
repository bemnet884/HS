// /src/app/api/purchases/route.ts

import { NextResponse } from 'next/server';
import { trackPurchase } from '@/actions/actions';

export async function POST(req: Request) {
  const formData = await req.formData();
  
  try {
    const purchase = await trackPurchase(formData);
    return NextResponse.json(purchase);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
