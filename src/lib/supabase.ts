import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadFoto(file: File, pasta: string): Promise<string> {
  const ext = file.name.split('.').pop();
  const nomeArquivo = `${pasta}/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;

  const { error } = await supabase.storage
    .from('fotos')
    .upload(nomeArquivo, file, { upsert: false });

  if (error) throw new Error(`Erro ao fazer upload: ${error.message}`);

  const { data } = supabase.storage.from('fotos').getPublicUrl(nomeArquivo);
  return data.publicUrl;
}
