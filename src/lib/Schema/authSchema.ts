import zod from "zod";

export const signUpSchema = zod.object({
  email: zod
    .string()
    .email({
      message: "Email is invalid, please provide a valid email",
    })
    .toLowerCase()
    .trim(),
  password: zod
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter",
    })
    .regex(/\d/, {
      message: "Password must contain at least one digit",
    })
    .trim(),
  fullName: zod
    .string()
    .min(1, {
      message: "Full name is required",
    })
    .trim(),
  referralCode: zod.string().optional(),
});

export const signInSchema = zod.object({
  email: zod
    .string()
    .email({
      message: "Email is invalid, please provide a valid email",
    })
    .toLowerCase()
    .trim(),
  password: zod
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter",
    })
    .regex(/\d/, {
      message: "Password must contain at least one digit",
    })
    .trim(),
});
export const forgotPasswordSchema = zod.object({
  email: zod
    .string()
    .email({
      message: "Email is invalid, please provide a valid email",
    })
    .toLowerCase()
    .trim(),
});
export const acountDetailSchema = zod.object({
  accountNumber: zod
    .string()
    .max(10, {
      message: "Account Number must be at least 10 characters",
    })
    .toLowerCase()
    .trim(),
  bankName: zod
    .string()
    .min(1, {
      message: "Bank Name must be at least 1 characters",
    })
    .toLowerCase()
    .trim(),
});
export type SignUpSchemaType = zod.infer<typeof signUpSchema>;
export type SignInSchemaType = zod.infer<typeof signInSchema>;
export type ForgotPasswordSchemaType = zod.infer<typeof forgotPasswordSchema>;
export type AcountDetailSchemaType = zod.infer<typeof acountDetailSchema>;
