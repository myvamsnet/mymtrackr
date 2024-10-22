import { Html, Section, Text } from "@react-email/components";
interface EmailTemplateProps {
  otp: number;
}
export const ResetPasswordEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  otp,
}: Readonly<EmailTemplateProps>) => {
  return (
    <Html lang="en" dir="ltr">
      <Section>
        <Text>
          Your reset password OTP is <strong>{otp}</strong>
        </Text>
      </Section>
    </Html>
  );
};
