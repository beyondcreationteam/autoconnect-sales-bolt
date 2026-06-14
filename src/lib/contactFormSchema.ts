import * as Yup from "yup";

export function buildContactFormSchema(t: (key: string) => string) {
  return Yup.object({
    firstName: Yup.string().required(t("validation.required")),
    lastName: Yup.string().required(t("validation.required")),
    email: Yup.string().email(t("validation.email")).required(t("validation.required")),
    phone: Yup.string().default(""),
    company: Yup.string().required(t("validation.required")),
    jobTitle: Yup.string().default(""),
    businessType: Yup.string().required(t("validation.required")),
    dealerships: Yup.string().default(""),
    challenges: Yup.string().default(""),
    timeline: Yup.string().default(""),
    message: Yup.string().default(""),
  });
}

export type ContactFormSchema = ReturnType<typeof buildContactFormSchema>;
