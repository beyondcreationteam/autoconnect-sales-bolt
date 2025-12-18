/*
  # Add New Demo Request Fields

  1. Modified Tables
    - `demo_requests`
      - `first_name` (text) - Contact person's first name
      - `last_name` (text) - Contact person's last name
      - `business_type` (text) - Type of business (OEM, Dealership Group, etc.)
      - `dealerships` (text) - Number of dealerships range
      - `challenges` (text) - Primary CX challenges
      - `timeline` (text) - Implementation timeline

  2. Notes
    - Existing `name` column retained for backward compatibility
    - New columns have default empty string values
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'first_name'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN first_name text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'last_name'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN last_name text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'business_type'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN business_type text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'dealerships'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN dealerships text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'challenges'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN challenges text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'demo_requests' AND column_name = 'timeline'
  ) THEN
    ALTER TABLE demo_requests ADD COLUMN timeline text DEFAULT '';
  END IF;
END $$;