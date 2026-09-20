import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Recherche du projet par UUID ou par api_key
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .or(`id.eq.${id},api_key.eq.${id}`)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Projet introuvable' }, { 
      status: 404,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}