export default function ProutectRouteRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-screen bg-[#F1F5FD]">{children}</main>;
}
