import { z } from "zod";

// Define your Zod schema
export const contentSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  link: z.string().min(11, "Video Link is required").url().trim(),
});
export type ContentSchemaType = Zod.infer<typeof contentSchema>;
