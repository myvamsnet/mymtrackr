export const profileInputlists: InputProps[] = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "phoneNumber",
    type: "number",
    label: "Phone Number",
    placeholder: "Enter your phone number",
  },
];

export const inputFields: BusinessFormField[] = [
  {
    name: "businessName",
    label: "Business Name",
    type: "text",
    placeholder: "Enter your business name",
  },
  {
    name: "businessEmail",
    label: "Business Email",
    type: "email",
    placeholder: "Enter your business email",
  },
  {
    name: "phoneNumber1",
    label: "Phone Number 1",
    type: "text",
    placeholder: "Enter your primary phone number",
  },
  {
    name: "phoneNumber2",
    label: "Phone Number 2",
    type: "text",
    placeholder: "Enter your secondary phone number",
  },
];
export const accountDetailsFields: BusinessFormField[] = [
  {
    name: "bankName",
    label: "Bank Name",
    type: "text",
    placeholder: "Enter your bank name",
  },
  {
    name: "accountName",
    label: "Account Name",
    type: "text",
    placeholder: "Enter your account name",
  },
  {
    name: "accountNumber",
    label: "Account Number",
    type: "text",
    placeholder: "Enter your account number",
  },
  {
    name: "termsOfService",
    label: "Accept Terms of Service",
    type: "textarea",
    placeholder: "Enter terms of service details here",
  },
];

interface InputProps {
  name: string;
  type: "text" | "email" | "number";
  label: string;
  placeholder: string;
}
interface BusinessFormData {
  businessName: string;
  businessEmail: string;
  phoneNumber1: string;
  phoneNumber2?: string; // Optional
  brandColor: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  termsOfService: boolean; // Checkbox field
}

type InputType = "text" | "email" | "textarea";

interface BusinessFormField {
  name: string; // Matches keys in form data
  label: string; // Display label for the input
  type: InputType; // Input type (e.g., text, email, color, textarea)
  placeholder: string;
}
