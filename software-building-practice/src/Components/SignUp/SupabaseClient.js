// Import the createClient function from the supabase-js library
import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and anonymous key
const supabaseUrl = 'https://gkqzypwjoeuksyuintpp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrcXp5cHdqb2V1a3N5dWludHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjMyMzIsImV4cCI6MjAzMjU5OTIzMn0.q5KdLQ9wk4KTh7yxsrK2uK8yml5fJTdHLFAn2lsC3jU';

// Create a Supabase client using the provided URL and key
const supabase = createClient(supabaseUrl, supabaseKey);

// Export the Supabase client for use in other parts of your application
export default supabase;