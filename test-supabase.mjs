import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njeunkcnmprvrymcdvil.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZXVua2NubXBydnJ5bWNkdmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2ODk2NTAsImV4cCI6MjEwNDI2NTY1MH0.-AuTqqX7-YzZSbVtZJRlrnPpwtZsN5vc_45UxgEG9tk';

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
