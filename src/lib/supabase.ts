import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create client if credentials are available
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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
  if (!supabase) {
    console.warn('Supabase is not configured. Demo request was not sent.', data);
    // Mimic API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Mock submission successful (Supabase not configured)' };
  }

  const { error } = await supabase.from('demo_requests').insert([data]);
  if (error) throw error;
  return { success: true };
}
