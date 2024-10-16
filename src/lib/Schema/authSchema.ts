import zod from 'zod';

export const signUpSchema = zod.object({
  email: zod
    .string()
    .email({
      message: 'Email is invalid, please provide a valid email',
    })
    .toLowerCase()
    .trim(),
  password: zod
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .trim(),
  fullName: zod
    .string()
    .min(1, {
      message: 'Full name is required',
    })
    .trim(),
});

export const signInSchema = zod.object({
  email: zod
    .string()
    .email({
      message: 'Email is invalid, please provide a valid email',
    })
    .toLowerCase()
    .trim(),
  password: zod
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .trim(),
});
export const forgotPasswordSchema = zod.object({
  email: zod
    .string()
    .email({
      message: 'Email is invalid, please provide a valid email',
    })
    .toLowerCase()
    .trim(),
});
export type SignUpSchemaType = zod.infer<typeof signUpSchema>;
export type SignInSchemaType = zod.infer<typeof signInSchema>;
export type ForgotPasswordSchemaType = zod.infer<typeof forgotPasswordSchema>;
