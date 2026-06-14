"use client";

import { Formik, Form } from "formik";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle2 } from "lucide-react";
import { InputField } from "@/components/common/form/InputField";
import { SelectField } from "@/components/common/form/SelectField";
import { TextareaField } from "@/components/common/form/TextareaField";
import { buildContactFormSchema } from "@/lib/contactFormSchema";
import { queryKeys } from "@/lib/queryKeys";
import { submitContact } from "@/services/contact";
import type { ContactFormValues } from "@/types/contact";

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  businessType: "",
  dealerships: "",
  challenges: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const t = useTranslations("contactUs");
  const validationSchema = buildContactFormSchema(t);

  const mutation = useMutation({
    mutationFn: submitContact,
    mutationKey: queryKeys.contact.submit(),
  });

  const businessTypeOptions = [
    { value: "oem", label: t("form.businessTypeOptions.oem") },
    { value: "dealership", label: t("form.businessTypeOptions.dealership") },
    { value: "service-center", label: t("form.businessTypeOptions.serviceCenter") },
    { value: "independent", label: t("form.businessTypeOptions.independent") },
  ];

  const dealershipsOptions = [
    { value: "1-5", label: t("form.dealershipsOptions.range1to5") },
    { value: "6-25", label: t("form.dealershipsOptions.range6to25") },
    { value: "26-100", label: t("form.dealershipsOptions.range26to100") },
    { value: "100+", label: t("form.dealershipsOptions.range100plus") },
  ];

  const challengesOptions = [
    { value: "lead-conversion", label: t("form.challengesOptions.leadConversion") },
    { value: "service-communication", label: t("form.challengesOptions.serviceCommunication") },
    { value: "customer-retention", label: t("form.challengesOptions.customerRetention") },
    { value: "arabic-support", label: t("form.challengesOptions.arabicSupport") },
    { value: "system-integration", label: t("form.challengesOptions.systemIntegration") },
  ];

  const timelineOptions = [
    { value: "immediate", label: t("form.timelineOptions.immediate") },
    { value: "short-term", label: t("form.timelineOptions.shortTerm") },
    { value: "medium-term", label: t("form.timelineOptions.mediumTerm") },
    { value: "long-term", label: t("form.timelineOptions.longTerm") },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {mutation.isError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {t("errorMessage")}
        </div>
      )}

      {mutation.isSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-normal text-brand-black mb-2">{t("success.title")}</h3>
          <p className="text-gray-600">{t("success.description")}</p>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            mutation.mutate(values, {
              onSuccess: () => resetForm(),
              onSettled: () => setSubmitting(false),
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <InputField name="firstName" label={t("form.firstName")} required />
                <InputField name="lastName" label={t("form.lastName")} required />
              </div>

              <div className="mb-6">
                <InputField name="email" type="email" label={t("form.email")} required />
              </div>

              <div className="mb-6">
                <InputField name="phone" type="tel" label={t("form.phone")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <InputField name="company" label={t("form.company")} required />
                <InputField name="jobTitle" label={t("form.jobTitle")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <SelectField
                  name="businessType"
                  label={t("form.businessType")}
                  required
                  placeholder={t("form.businessTypeOptions.placeholder")}
                  options={businessTypeOptions}
                />
                <SelectField
                  name="dealerships"
                  label={t("form.dealerships")}
                  placeholder={t("form.dealershipsOptions.placeholder")}
                  options={dealershipsOptions}
                />
              </div>

              <div className="mb-6">
                <SelectField
                  name="challenges"
                  label={t("form.challenges")}
                  placeholder={t("form.challengesOptions.placeholder")}
                  options={challengesOptions}
                />
              </div>

              <div className="mb-6">
                <SelectField
                  name="timeline"
                  label={t("form.timeline")}
                  placeholder={t("form.timelineOptions.placeholder")}
                  options={timelineOptions}
                />
              </div>

              <div className="mb-6">
                <TextareaField
                  name="message"
                  label={t("form.message")}
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || mutation.isPending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-normal rounded-lg hover:bg-orange-600 transition-all disabled:opacity-70"
              >
                {isSubmitting || mutation.isPending ? (
                  t("form.submitting")
                ) : (
                  <>
                    {t("form.submit")} <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
