import { describe, expect, it } from "vitest";
import { buildContactFormSchema } from "./contactFormSchema";

const t = (key: string) => key;
const schema = buildContactFormSchema(t);

const validValues = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  phone: "",
  company: "Acme",
  jobTitle: "",
  businessType: "oem",
  dealerships: "",
  challenges: "",
  timeline: "",
  message: "",
};

describe("buildContactFormSchema", () => {
  it("passes for valid values", async () => {
    await expect(schema.validate(validValues)).resolves.toBeTruthy();
  });

  it("rejects missing required fields", async () => {
    await expect(schema.validate({ ...validValues, firstName: "" })).rejects.toThrow(
      "validation.required",
    );
  });

  it("rejects an invalid email format", async () => {
    await expect(schema.validate({ ...validValues, email: "not-an-email" })).rejects.toThrow(
      "validation.email",
    );
  });
});
