import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const [
            heroSlides,
            services,
            departments,
            doctors,
            appointments,
            testimonials,
            galleryImages,
            contactMessages,
        ] = await Promise.all([
            prisma.heroSlide.count(),
            prisma.service.count(),
            prisma.department.count(),
            prisma.doctor.count(),
            prisma.appointment.groupBy({
                by: ['status'],
                _count: true,
            }),
            prisma.testimonial.count(),
            prisma.galleryImage.count(),
            prisma.contactMessage.groupBy({
                by: ['isRead'],
                _count: true,
            }),
        ]);

        const appointmentStats = {
            total: appointments.reduce((acc, curr) => acc + curr._count, 0),
            pending: appointments.find((a) => a.status === 'PENDING')?._count || 0,
            confirmed: appointments.find((a) => a.status === 'CONFIRMED')?._count || 0,
            completed: appointments.find((a) => a.status === 'COMPLETED')?._count || 0,
            cancelled: appointments.find((a) => a.status === 'CANCELLED')?._count || 0,
        };

        const messageStats = {
            total: contactMessages.reduce((acc, curr) => acc + curr._count, 0),
            unread: contactMessages.find((m) => !m.isRead)?._count || 0,
        };

        return NextResponse.json({
            heroSlides,
            services,
            departments,
            doctors,
            appointments: appointmentStats,
            testimonials,
            galleryImages,
            contactMessages: messageStats,
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
