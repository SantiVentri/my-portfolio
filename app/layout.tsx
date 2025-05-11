import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/nav";

export const metadata: Metadata = {
  title: "Santino Ventrice, Developer",
  description: "This is my personal portfolio where i showcase some of my skills and write about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
