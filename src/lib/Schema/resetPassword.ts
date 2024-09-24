import zod from "zod";

export const resetPassword = zod
  .object({
    newPassword: zod.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    confirmPassword: zod.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type ResetPasswordType = zod.infer<typeof resetPassword>;
