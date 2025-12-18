import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DemoRequest {
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  phone?: string;
  job_title?: string;
  business_type?: string;
  dealerships?: string;
  challenges?: string;
  timeline?: string;
  message?: string;
  source?: string;
}

export async function submitDemoRequest(data: DemoRequest) {
  const { error } = await supabase.from('demo_requests').insert([data]);
  if (error) throw error;
  return { success: true };
}
