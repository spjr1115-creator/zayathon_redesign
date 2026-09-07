import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase configuration in environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInsert() {
  console.log("Testing Supabase INSERT...");
  
  const registrationData = {
    team_name: 'ZAYA TEST TEAM',
    problem_domain: 'Agentic AI',
    leader_name: 'Test User',
    leader_email: 'test@example.com',
    leader_phone: '1234567890',
    leader_college: 'Test College',
    leader_year: '2nd Year',
    member_2_name: 'Member Two',
    member_2_email: 'member2@example.com',
    member_2_phone: '0987654321'
  };

  const { error } = await supabase
    .from('registrations')
    .insert([registrationData]);

  if (error) {
    console.error("INSERT FAILED:", error);
  } else {
    console.log("INSERT SUCCESSFUL! Registration stored in Supabase.");
  }
}

testInsert();
