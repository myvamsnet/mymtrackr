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

interface InputProps {
  name: string;
  type: "text" | "email" | "number";
  label: string;
  placeholder: string;
}
