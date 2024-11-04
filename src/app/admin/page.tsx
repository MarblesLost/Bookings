import { ReactNode, useState } from 'react';

import Navbar from "~/app/_components/Navbar";
import CoachList from "~/app/_components/CoachList";
import ServiceList from "~/app/_components/ServiceList";


export default function RootLayout() {
  return (
    <html lang="en">
    <body>
    <Navbar />
    <div className='flex justify-around'>
      <CoachList />
      <ServiceList /> 
    </div>
    </body>
    </html>
  );
}