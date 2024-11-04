import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Populating roles
  const adminRole = await prisma.role.create({
    data: { name: 'ADMIN' },
  });

  const coachRole = await prisma.role.create({
    data: { name: 'COACH' },
  });

  const userRole = await prisma.role.create({
    data: { name: 'USER' },
  });

  // Populating languages
  const finnish = await prisma.language.create({
    data: { name: 'FI' },
  });

  const english = await prisma.language.create({
    data: { name: 'EN' },
  });

  const swedish = await prisma.language.create({
    data: { name: 'SV' },
  });

  // Populating visibilities
  const publicVisibility = await prisma.visibility.create({
    data: { name: 'PUBLIC' },
  });

  const internalVisibility = await prisma.visibility.create({
    data: { name: 'INTERNAL' },
  });

  // Populating meeting methods
  const onlineMethod = await prisma.meetingMethod.create({
    data: { name: 'ONLINE' },
  });

  const otherMethod = await prisma.meetingMethod.create({
    data: { name: 'OTHER' },
  });

  // Populating booking statuses
  const pendingStatus = await prisma.bookingStatus.create({
    data: { name: 'PENDING' },
  });

  const confirmedStatus = await prisma.bookingStatus.create({
    data: { name: 'CONFIRMED' },
  });

  const cancelledStatus = await prisma.bookingStatus.create({
    data: { name: 'CANCELLED' },
  });

  const rescheduledStatus = await prisma.bookingStatus.create({
    data: { name: 'RESCHEDULED' },
  });

  const noShowStatus = await prisma.bookingStatus.create({
    data: { name: 'NO_SHOW' },
  });

  const completedStatus = await prisma.bookingStatus.create({
    data: { name: 'COMPLETED' },
  });

  // Populating some example users
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: 'securepassword',
      roleId: adminRole.id,
    },
  });

  const coachUser = await prisma.user.create({
    data: {
      email: 'coach@example.com',
      password: 'securepassword',
      roleId: coachRole.id,
    },
  });

  const normalUser = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: 'securepassword',
      roleId: userRole.id,
    },
  });

  // Populating some example services
  const service1 = await prisma.service.create({
    data: {
      name: 'ICT Camp Tampere',
      languageId: finnish.id,
      visibilityId: publicVisibility.id,
      allowBooking: true,
      allowRescheduling: true,
      allowCancellation: true,
      isHidden: false,
      bookingWindowStart: 7,  // 1 week
      bookingWindowEnd: 30,   // 1 month
      meetingMethodId: onlineMethod.id,
      meetingDurationMinutes: 60,  // 1 hour
    },
  });

  // Associating the admin and coach with the service
  await prisma.adminOnService.create({
    data: {
      adminId: adminUser.id,
      serviceId: service1.id,
    },
  });

  await prisma.coachOnService.create({
    data: {
      coachId: coachUser.id,
      serviceId: service1.id,
    },
  });

  console.log('Database has been populated with initial values.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
