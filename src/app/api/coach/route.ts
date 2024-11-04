import { NextResponse } from 'next/server';
import prisma from '../../../utils/prisma';

export async function GET() {
  const services = await prisma.user.findMany({
    where: {
      role: {
        name:{
          contains: 'COACH',  
        }
      },
    },
    select: {
      email: true,
      id: true
    }
    
  }); 

  return NextResponse.json(services);
}

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    id,
    //languageId,
    //visibilityId,
    //allowBooking,
    //allowRescheduling,
    //allowCancellation,
    //isHidden,
    //bookingWindowStart,
    //bookingWindowEnd,
    //meetingMethodId,
    //meetingDurationMinutes,
  } = await req.json();

  const service = await prisma.user.create({
    data: {
      id: id as string,
     //allowBooking: false,
     //allowRescheduling: false,
     //allowCancellation: false,
     //isHidden: false,
     //bookingWindowStart: 1,
     //bookingWindowEnd: 3,
     //meetingDurationMinutes: 45,
     //language: {
     //  connect: { id: 'bdd6a224-a341-435c-81a9-34503ec42671' },
     //},
     //visibility: {
     //  connect: { id: 'ac339d4b-8600-42be-9b68-3087cbe9bfc2' },
     //},
     //meetingMethod: {
     // connect: { id: 'd6bdd27a-5905-43ec-a0bd-b34e6c6f8bb9' },
     //}
      //languageId,
      //visibilityId,
      //allowBooking,
      //allowRescheduling,
      //allowCancellation,
      //isHidden,
      //bookingWindowStart,
      //bookingWindowEnd,
      //meetingMethodId,
      //meetingDurationMinutes,
    },
  });

  return NextResponse.json(service);
}

export async function PUT(req: Request): Promise<any> {
  const { id, name, allowBooking, allowRescheduling, allowCancellation, isHidden, bookingWindowStart, bookingWindowEnd, meetingDurationMinutes } = await req.json();

// Ensure `id` is provided to identify the service to update
  if (!id) {
  return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
  }

// Update the service with new values
  const updatedService = await prisma.service.update({
    where: { id: id as string },
    data: {
      name,
      allowBooking,
      allowRescheduling,
      allowCancellation,
      isHidden,
      bookingWindowStart,
      bookingWindowEnd,
      meetingDurationMinutes,
      // Assuming language, visibility, and meetingMethod are optional in the update
      language: {
        connect: { id: 'bdd6a224-a341-435c-81a9-34503ec42671' },
      },
      visibility: {
        connect: { id: 'ac339d4b-8600-42be-9b68-3087cbe9bfc2' },
      },
      meetingMethod: {
        connect: { id: 'd6bdd27a-5905-43ec-a0bd-b34e6c6f8bb9' },
      }
    },
  });

return NextResponse.json(updatedService);
}