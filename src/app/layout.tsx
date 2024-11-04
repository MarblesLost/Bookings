import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from './_components/Navbar';
import Home from "~/app/page";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
