import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

// GET : Recherche par ID (UUID) ou par API Key (pour le CDN)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

    const { data: project, error } = isUuid
      ? await supabase.from('projects').select('*').eq('id', id).single()
      : await supabase.from('projects').select('*').eq('api_key', id).single();

    if (error || !project) {
      return NextResponse.json(
        { error: 'Projet introuvable' },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(project, { status: 200, headers: corsHeaders });
  } catch (err) {
    return NextResponse.json(
      { error: 'Erreur serveur Supabase' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PUT : Mise à jour de la config depuis le Dashboard
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from('projects')
      .update({
        name: body.name,
        domain: body.domain,
        spatial_enabled: body.spatial_enabled ?? true,
        theme_tokens: body.theme_tokens || {
          primaryColor: body.primaryColor || '#6366f1',
          accentColor: body.accentColor || '#ec4899',
          depthFactor: body.depthFactor ?? 0.08,
        },
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400, headers: corsHeaders });
    }

    return NextResponse.json({ success: true, project: data }, { status: 200, headers: corsHeaders });
  } catch (err) {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500, headers: corsHeaders });
  }
}