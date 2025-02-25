import zod from "zod";

export const incomeSchema = zod.object({
  amount: zod.string().min(1, {
    message: "Amount is required",
  }),
  type: zod.string().min(1, {
    message: "Type is required",
  }),
  note: zod.string().nullable(),
});

export const debtorSchema = zod.object({
  amount: zod.string().min(1, {
    message: "Amount is required",
  }),
  name: zod.string().min(1, {
    message: "Name is required",
  }),
  note: zod.string().nullable(),
});
export const addRecordsSchema = zod.object({
  amount: zod.string().min(1, {
    message: "Amount is required ",
  }),
  name: zod.string().min(1, {
    message: "Name is required",
  }),
  note: zod.string().nullable(),
});

export type IncomeSchemaType = zod.infer<typeof incomeSchema>;
export type DebtorSchemaType = zod.infer<typeof debtorSchema>;
export type AddRecordsSchemaType = zod.infer<typeof addRecordsSchema>;
