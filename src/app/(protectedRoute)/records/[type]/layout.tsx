export default function RecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto md:max-w-[700px]  overflow-y-auto overflow-x-hidden mainh-screen relative">
      {children}
    </main>
  );
}
