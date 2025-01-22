import { z } from "zod";

// Define your Zod schema
export const businessSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  businessEmail: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Email is required")
    .trim(),
  phoneNumber1: z.string().min(11, "Phone number  is required").trim(),
  phoneNumber2: z.string().optional(), // Optional phone number 2
  bankName: z.string().min(1, "Bank name is required").trim(),
  accountName: z.string().min(1, "Account name is required").trim(),
  accountNumber: z.string().min(1, "Account number is required").trim(),
  termsOfService: z.string().optional(),
});
export type BusinessSchemaType = Zod.infer<typeof businessSchema>;
export interface BusinessSettingFormData extends BusinessSchemaType {
  imageUrl?: string;
  brandColor: string;
}
