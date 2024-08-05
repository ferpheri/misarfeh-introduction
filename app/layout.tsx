import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "می صرفه",
  description: "اینجا همه چیز می صرفه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
