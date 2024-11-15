import type { Metadata } from "next";
const APP_DEFAULT_TITLE = `Simplify Your Financial Management with Mtrackr | Auth Page`;
const APP_DESCRIPTION =
  "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.";
export const metadata: Metadata = {
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
};

export default function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="">{children}</main>;
}
