export const metadata = {
  title: "Dashboard",
  description: "Eddie Villanueva Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="prjmgt">{children}</body>
    </html>
  );
}
