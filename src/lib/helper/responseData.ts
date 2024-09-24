export const responsedata = ({ status, message, data }: ResponseDataProps) => {
  return {
    status,
    message,
    data: data || null,
  };
};
interface ResponseDataProps {
  status: string | number;
  message: string;
  data?: any | null;
}
