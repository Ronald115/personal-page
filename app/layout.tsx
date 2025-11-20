import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronald Arce Resume",
  description: "Full Stack Developer & Junior DevOps Engineer",
  themeColor: "#0a0f1f",
  openGraph: {
    title: "Ronald Arce Resume",
    description:
      "Full Stack Developer & Junior DevOps Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-starlight antialiased">
        <div className="fixed inset-0 bg-starfield opacity-60 pointer-events-none" aria-hidden />
        <div className="fixed top-10 right-10 w-52 h-52 rounded-full blur-3xl bg-plasma opacity-30" aria-hidden />
        <div className="fixed bottom-10 left-5 w-72 h-72 rounded-full blur-3xl bg-aurora opacity-25" aria-hidden />
        {children}
      </body>
    </html>
  );
}
