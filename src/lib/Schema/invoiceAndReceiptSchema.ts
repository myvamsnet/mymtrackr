import { z } from "zod";

export const itemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quantity: z.string().min(1, "Quantity is required"),
  price: z.string().min(1, "Price is required"),
});

export const invoiceAndReceiptSchema = z.object({
  issueDate: z.date(),
  dueDate: z.date(),
  customerName: z.string().min(1, "Customer name is required"),
  items: z.array(itemSchema),
});

export const discountSchema = z.object({
  discount: z.string().default("0"),
  discountType: z.string().default("percent"),
});

export const deliveryFeeSchema = z.object({
  deliveryFee: z.string().default("0"),
});

export type InvoiceAndReceiptSchemaSchemaType = Zod.infer<
  typeof invoiceAndReceiptSchema
>;
export type DiscountSchemaType = Zod.infer<typeof discountSchema>;
export type DeliveryFeeSchemaType = Zod.infer<typeof deliveryFeeSchema>;
