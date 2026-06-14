export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  businessType: string;
  dealerships: string;
  challenges: string;
  timeline: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
}

export function isSendEmailResponse(value: unknown): value is SendEmailResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    typeof (value as { success: unknown }).success === "boolean"
  );
}
