
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iapgznglogzbdobqrfkr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcGd6bmdsb2d6YmRvYnFyZmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMzQ3ODgsImV4cCI6MjA2MjYxMDc4OH0.Is-T_fI8cghElekAJu9yJ6qXdnghA5dhPYmtwkx6dqM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
