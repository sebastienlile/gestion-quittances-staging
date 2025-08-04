// supabaseClient.staging.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://omdxgzzemypqglgqifmp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tZHhnenplbXlwcWdsZ3FpZm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMzYwMjQsImV4cCI6MjA2OTkxMjAyNH0.LMPzjHqkWrq7lmnq-53SED4Rv3UojuvY6vtndmKe-MQ';

export const supabase = createClient(supabaseUrl, supabaseKey);