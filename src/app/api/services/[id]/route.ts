import { NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const service = await prisma.service.findUnique({
    where: { id },
    include: {
      language: true,
      visibility: true,
      meetingMethod: true,
    },
  });

  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  return NextResponse.json(service);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await req.json();

  const service = await prisma.service.update({
    where: { id },
    data,
  });

  return NextResponse.json(service);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  await prisma.service.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'Service deleted successfully' });
}
