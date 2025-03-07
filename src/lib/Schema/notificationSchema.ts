import { z } from "zod";

// Define your Zod schema
export const notificationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").trim(),
  body: z.string().min(10, "Body must be at least 10 characters").trim(),
});
export type NotificationSchemaType = Zod.infer<typeof notificationSchema>;
