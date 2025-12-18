/*
  # Create Demo Requests Table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact person's full name
      - `email` (text, required) - Contact email address
      - `company` (text, optional) - Company/dealership name
      - `phone` (text, optional) - Contact phone number
      - `job_title` (text, optional) - Job title/role
      - `message` (text, optional) - Additional message or requirements
      - `source` (text, optional) - Where the request came from (e.g., 'homepage', 'demo-page')
      - `created_at` (timestamptz) - When the request was submitted

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for anonymous users to insert demo requests (public form)
    - No select/update/delete policies for public (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  job_title text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous demo request submissions"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);