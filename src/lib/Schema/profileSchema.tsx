import zod from 'zod';

export const profileSchema = zod.object({
  email: zod.string().email({
    message: 'Invalid email',
  }),
  fullName: zod.string().min(1, {
    message: 'Full name is required',
  }),
  phoneNumber: zod.string().nullable(),
});

export type ProfileSchemaType = zod.infer<typeof profileSchema>;
