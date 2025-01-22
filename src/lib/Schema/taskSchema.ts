import { z } from "zod";

// Define your Zod schema
export const taskSchema = z.object({
  taskDate: z.date(),
  title: z.string().min(3, "Title must be at least 3 characters").trim(),
});
export type TaskSchemaType = Zod.infer<typeof taskSchema>;
