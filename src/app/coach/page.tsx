
import { ReactNode } from 'react';
import WeeklyAvailability from "~/app/_components/WeeklyAvailability";
import Navbar from "~/app/_components/Navbar";


export default function RootLayout() {
  return (
    <html lang="en">
    <body>
    <Navbar />
    <WeeklyAvailability />


    </body>
    </html>
  );
}
