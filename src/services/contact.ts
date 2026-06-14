import { axiosInstance } from "@/config/axios";
import { generalPostRequest } from "@/config/clientAPI";
import { isSendEmailResponse } from "@/types/contact";
import type { ContactFormValues, SendEmailResponse } from "@/types/contact";

export async function submitContact(values: ContactFormValues): Promise<SendEmailResponse> {
  return generalPostRequest(() =>
    axiosInstance.post<unknown>("/api/send-email", values).then((res) => {
      if (!isSendEmailResponse(res.data)) {
        throw new Error("Invalid send-email response");
      }
      return res.data;
    }),
  );
}
