import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://ecmohhcbhpguhjwradah.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbW9oaGNiaHBndWhqd3JhZGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODEzNzYsImV4cCI6MjA0ODk1NzM3Nn0.UBDcZ4xYinjFC2oExbQYS1I5zYKCBUQGw3GyGSxsHfo"
)

