import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Clear existing data
    await prisma.contactMessage.deleteMany();
    await prisma.appointment.deleteMany();
    await prisma.faq.deleteMany();
    await prisma.pricingPlan.deleteMany();
    await prisma.galleryImage.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.doctor.deleteMany();
    await prisma.department.deleteMany();
    await prisma.service.deleteMany();
    await prisma.feature.deleteMany();
    await prisma.stat.deleteMany();
    await prisma.about.deleteMany();
    await prisma.heroSlide.deleteMany();
    await prisma.contactInfo.deleteMany();
    await prisma.siteSetting.deleteMany();

    // Seed Hero Slides
    console.log('📸 Seeding hero slides...');
    await prisma.heroSlide.createMany({
        data: [
            {
                title: 'PHÒNG KHÁM QUANG TÂM',
                description: 'Chuyên điều trị rối loạn giấc ngủ và stress - Bác sĩ CKII Nguyễn Văn Quang',
                image: '/assets/img/hero-carousel/hero-carousel-1.png',
                order: 1,
            },
            {
                title: 'CHUYÊN KHOA RỐI LOẠN GIẤC NGỦ',
                description: 'Điều trị mất ngủ, khó ngủ, ngủ không sâu giấc với phương pháp hiện đại',
                image: '/assets/img/hero-carousel/hero-carousel-2.png',
                order: 2,
            },
            {
                title: 'ĐIỀU TRỊ STRESS HIỆU QUẢ',
                description: 'Giảm căng thẳng, lo âu, nâng cao chất lượng cuộc sống',
                image: '/assets/img/hero-carousel/hero-carousel-3.png',
                order: 3,
            },
        ],
    });

    // Seed About
    console.log('ℹ️ Seeding about section...');
    await prisma.about.create({
        data: {
            title: 'Phòng khám chuyên khoa Rối loạn giấc ngủ và Stress',
            subtitle: 'Với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe tâm thần tốt nhất.',
            description: 'Phòng khám Quang Tâm luôn đặt lợi ích của bệnh nhân lên hàng đầu. Chúng tôi sử dụng các phương pháp điều trị hiện đại, an toàn và hiệu quả, giúp bệnh nhân nhanh chóng khôi phục và cải thiện chất lượng cuộc sống.',
            image: 'assets/img/about.png',
            videoUrl: 'https://www.youtube.com/watch?v=Y7f98aduVJ8',
            highlights: [
                'Đội ngũ bác sĩ chuyên môn cao, tận tâm với nghề',
                'Trang thiết bị hiện đại, phương pháp điều trị tiên tiến',
                'Tư vấn chuyên sâu, theo dõi sát sao quá trình điều trị. Cam kết mang đến hiệu quả điều trị tốt nhất cho bệnh nhân.',
            ],
        },
    });

    // Seed Stats
    console.log('📊 Seeding stats...');
    await prisma.stat.createMany({
        data: [
            {
                icon: 'fas fa-user-md',
                value: 5,
                label: 'Bác sĩ',
                order: 1,
            },
            {
                icon: 'far fa-hospital',
                value: 3,
                label: 'Chuyên khoa',
                order: 2,
            },
            {
                icon: 'fas fa-flask',
                value: 10,
                label: 'Năm kinh nghiệm',
                order: 3,
            },
            {
                icon: 'fas fa-award',
                value: 1000,
                label: 'Bệnh nhân',
                order: 4,
            },
        ],
    });

    // Seed Features
    console.log('✨ Seeding features...');
    await prisma.feature.createMany({
        data: [
            {
                icon: 'fa-solid fa-hand-holding-medical',
                title: 'Điều trị chuyên sâu',
                description: 'Phương pháp điều trị hiện đại, an toàn và hiệu quả cao cho các vấn đề về giấc ngủ',
                order: 1,
            },
            {
                icon: 'fa-solid fa-suitcase-medical',
                title: 'Trang thiết bị hiện đại',
                description: 'Trang bị đầy đủ các thiết bị y tế tiên tiến phục vụ cho việc chẩn đoán và điều trị',
                order: 2,
            },
            {
                icon: 'fa-solid fa-staff-snake',
                title: 'Đội ngũ chuyên nghiệp',
                description: 'Bác sĩ chuyên khoa II cùng đội ngũ y tá giàu kinh nghiệm, tận tâm với nghề',
                order: 3,
            },
            {
                icon: 'fa-solid fa-lungs',
                title: 'Theo dõi sát sao',
                description: 'Hệ thống theo dõi và chăm sóc bệnh nhân sau điều trị chu đáo và kịp thời',
                order: 4,
            },
        ],
    });

    // Seed Services
    console.log('🏥 Seeding services...');
    await prisma.service.createMany({
        data: [
            {
                icon: 'fas fa-heartbeat',
                title: 'Điều trị mất ngủ',
                description: 'Điều trị các trường hợp mất ngủ mãn tính, khó ngủ, thức giấc nhiều lần trong đêm',
                order: 1,
            },
            {
                icon: 'fas fa-pills',
                title: 'Điều trị Stress',
                description: 'Hỗ trợ điều trị stress, lo âu, căng thẳng do áp lực công việc và cuộc sống',
                order: 2,
            },
            {
                icon: 'fas fa-hospital-user',
                title: 'Khám tổng quát',
                description: 'Khám sức khỏe tổng quát, tầm soát các vấn đề về sức khỏe tâm thần',
                order: 3,
            },
            {
                icon: 'fas fa-dna',
                title: 'Rối loạn nhịp sinh học',
                description: 'Điều trị rối loạn nhịp sinh học, ngủ ngày thức đêm, mất cân bằng giấc ngủ',
                order: 4,
            },
            {
                icon: 'fas fa-wheelchair',
                title: 'Điều trị thuốc',
                description: 'Kê đơn và theo dõi điều trị bằng thuốc an toàn, hiệu quả',
                order: 5,
            },
            {
                icon: 'fas fa-notes-medical',
                title: 'Tư vấn tâm lý',
                description: 'Tư vấn tâm lý cá nhân, gia đình về các vấn đề giấc ngủ và stress',
                order: 6,
            },
        ],
    });

    // Seed Departments
    console.log('🏢 Seeding departments...');
    await prisma.department.createMany({
        data: [
            {
                name: 'Rối loạn giấc ngủ',
                description: 'Chuyên khoa điều trị các rối loạn giấc ngủ như mất ngủ, khó ngủ, ngủ không sâu giấc',
                detail: 'Với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại, chúng tôi cam kết mang đến giải pháp điều trị hiệu quả nhất cho bệnh nhân. Phương pháp điều trị kết hợp giữa y học hiện đại và liệu pháp tâm lý.',
                image: 'assets/img/departments-1.png',
                order: 1,
            },
            {
                name: 'Điều trị Stress',
                description: 'Hỗ trợ điều trị stress, căng thẳng do áp lực công việc và cuộc sống',
                detail: 'Chương trình điều trị stress toàn diện bao gồm tư vấn tâm lý, liệu pháp thư giãn và các phương pháp điều trị hiện đại giúp bệnh nhân giảm căng thẳng và cải thiện chất lượng cuộc sống.',
                image: 'assets/img/departments-2.png',
                order: 2,
            },
            {
                name: 'Tâm lý trị liệu',
                description: 'Tư vấn và điều trị các vấn đề tâm lý, hành vi và cảm xúc',
                detail: 'Dịch vụ tư vấn tâm lý chuyên nghiệp cho cá nhân và gia đình. Chúng tôi áp dụng các phương pháp điều trị tâm lý hiện đại, phù hợp với từng đối tượng bệnh nhân.',
                image: 'assets/img/departments-3.png',
                order: 3,
            },
            {
                name: 'Khám tổng quát',
                description: 'Khám và tư vấn sức khỏe tổng quát, tầm soát các vấn đề sức khỏe',
                detail: 'Dịch vụ khám sức khỏe tổng quát với quy trình chuyên nghiệp, đội ngũ y bác sĩ giàu kinh nghiệm. Chúng tôi cung cấp các gói khám sức khỏe phù hợp với từng độ tuổi.',
                image: 'assets/img/departments-4.png',
                order: 4,
            },
            {
                name: 'Tư vấn dinh dưỡng',
                description: 'Tư vấn chế độ dinh dưỡng hợp lý cho sức khỏe tâm thần',
                detail: 'Chế độ dinh dưỡng có vai trò quan trọng trong việc cải thiện giấc ngủ và giảm stress. Chúng tôi tư vấn chế độ ăn uống khoa học, phù hợp với tình trạng sức khỏe của từng bệnh nhân.',
                image: 'assets/img/departments-5.png',
                order: 5,
            },
        ],
    });

    // Seed Doctors
    console.log('👨‍⚕️ Seeding doctors...');
    await prisma.doctor.createMany({
        data: [
            {
                name: 'BS CKII Nguyễn Văn Quang',
                specialization: 'Chuyên khoa II - Rối loạn giấc ngủ và Stress',
                image: '/assets/img/doctors/doctor-1.png',
                bio: 'Bác sĩ Chuyên khoa II với hơn 15 năm kinh nghiệm trong lĩnh vực điều trị rối loạn giấc ngủ và stress. Tốt nghiệp Đại học Y Hà Nội, có nhiều công trình nghiên cứu được công bố trong và ngoài nước.',
                experience: 15,
                education: 'Bác sĩ Chuyên khoa II - Đại học Y Hà Nội',
                order: 1,
            },
            {
                name: 'BS Nguyễn Thị Lan',
                specialization: 'Bác sĩ Tâm lý',
                image: '/assets/img/doctors/doctor-1.png',
                bio: 'Bác sĩ chuyên về tư vấn tâm lý và điều trị các rối loạn tâm lý. Với phong cách tư vấn thấu hiểu và chuyên nghiệp, bác sĩ đã giúp nhiều bệnh nhân vượt qua khó khăn trong cuộc sống.',
                experience: 8,
                education: 'Bác sĩ - Đại học Y Dược TP.HCM',
                order: 2,
            },
            {
                name: 'BS Trần Văn Minh',
                specialization: 'Bác sĩ Đa khoa',
                image: '/assets/img/doctors/doctor-1.png',
                bio: 'Bác sĩ đa khoa với kinh nghiệm trong khám và điều trị các vấn đề sức khỏe tổng quát. Luôn tận tâm với bệnh nhân và cam kết mang đến dịch vụ y tế chất lượng cao.',
                experience: 10,
                education: 'Bác sĩ Đa khoa - Đại học Y Thái Bình',
                order: 3,
            },
        ],
    });

    // Seed Testimonials
    console.log('💬 Seeding testimonials...');
    await prisma.testimonial.createMany({
        data: [
            {
                text: 'Phòng khám Quang Tâm đã giúp tôi vượt qua chứng mất ngủ kéo dài. Bác sĩ rất tận tình và phương pháp điều trị hiệu quả.',
                name: 'Nguyễn Văn A',
                position: 'Bệnh nhân',
                image: '/assets/img/testimonials/testimonials-1.png',
                rating: 5,
                order: 1,
            },
            {
                text: 'Tôi rất hài lòng với dịch vụ tư vấn stress tại đây. Sau 3 tháng điều trị, tôi cảm thấy cuộc sống nhẹ nhàng hơn rất nhiều.',
                name: 'Trần Thị B',
                position: 'Bệnh nhân',
                image: '/assets/img/testimonials/testimonials-2.png',
                rating: 5,
                order: 2,
            },
            {
                text: 'Bác sĩ Quang rất chuyên nghiệp và thấu hiểu. Phòng khám có không gian yên tĩnh, thoải mái. Tôi giới thiệu cho nhiều người.',
                name: 'Lê Văn C',
                position: 'Bệnh nhân',
                image: '/assets/img/testimonials/testimonials-3.png',
                rating: 5,
                order: 3,
            },
            {
                text: 'Điều trị rối loạn giấc ngủ tại đây rất hiệu quả. Giờ tôi đã có thể ngủ ngon giấc mỗi đêm.',
                name: 'Phạm Thị D',
                position: 'Bệnh nhân',
                image: '/assets/img/testimonials/testimonials-4.png',
                rating: 5,
                order: 4,
            },
            {
                text: 'Cảm ơn phòng khám đã giúp tôi vượt qua căng thẳng trong công việc. Tôi rất biết ơn đội ngũ y bác sĩ.',
                name: 'Hoàng Văn E',
                position: 'Bệnh nhân',
                image: '/assets/img/testimonials/testimonials-5.jpg',
                rating: 5,
                order: 5,
            },
        ],
    });

    // Seed Gallery Images
    console.log('🖼️ Seeding gallery images...');
    const galleryImages = Array.from({ length: 8 }, (_, i) => ({
        image: '/assets/img/gallery/gallery.png',
        title: `Hình ảnh phòng khám ${i + 1}`,
        order: i + 1,
    }));
    await prisma.galleryImage.createMany({ data: galleryImages });

    // Seed Pricing Plans
    console.log('💰 Seeding pricing plans...');
    await prisma.pricingPlan.createMany({
        data: [
            {
                name: 'Khám cơ bản',
                price: 200000,
                period: 'lần',
                features: [
                    'Khám và tư vấn',
                    'Đánh giá tình trạng',
                    'Kê đơn thuốc cơ bản',
                ],
                order: 1,
            },
            {
                name: 'Gói điều trị',
                price: 500000,
                period: 'tháng',
                features: [
                    'Khám và tư vấn',
                    'Đánh giá tình trạng',
                    'Kê đơn thuốc',
                    'Theo dõi định kỳ',
                ],
                isFeatured: true,
                order: 2,
            },
            {
                name: 'Gói chăm sóc',
                price: 800000,
                period: 'tháng',
                features: [
                    'Khám và tư vấn',
                    'Đánh giá tình trạng',
                    'Kê đơn thuốc',
                    'Theo dõi định kỳ',
                    'Tư vấn chuyên sâu',
                ],
                order: 3,
            },
            {
                name: 'Gói VIP',
                price: 1500000,
                period: 'tháng',
                features: [
                    'Khám và tư vấn ưu tiên',
                    'Đánh giá chuyên sâu',
                    'Kê đơn thuốc cao cấp',
                    'Theo dõi 24/7',
                    'Tư vấn chuyên sâu',
                ],
                isAdvanced: true,
                order: 4,
            },
        ],
    });

    // Seed FAQs
    console.log('❓ Seeding FAQs...');
    await prisma.faq.createMany({
        data: [
            {
                question: 'Phòng khám có giờ làm việc như thế nào?',
                answer: 'Phòng khám mở cửa từ Thứ 2 đến Thứ 6: 17H - 21H và Thứ 7, Chủ nhật: 8H - 21H. Bạn có thể đặt lịch trước hoặc đến trực tiếp.',
                order: 1,
            },
            {
                question: 'Tôi có cần đặt lịch trước không?',
                answer: 'Để được phục vụ tốt nhất và tránh chờ đợi, chúng tôi khuyến khích bạn đặt lịch trước qua hotline 0913 54 54 57 hoặc form trực tuyến.',
                order: 2,
            },
            {
                question: 'Chi phí điều trị là bao nhiêu?',
                answer: 'Chi phí khám và điều trị phụ thuộc vào tình trạng bệnh và phương pháp điều trị. Chúng tôi có nhiều gói dịch vụ với mức giá phù hợp. Vui lòng liên hệ để được tư vấn chi tiết.',
                order: 3,
            },
            {
                question: 'Có thể thanh toán bằng thẻ không?',
                answer: 'Có, chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ ATM và chuyển khoản. Phòng khám cũng hỗ trợ trả góp với một số gói điều trị dài hạn.',
                order: 4,
            },
            {
                question: 'Thời gian điều trị kéo dài bao lâu?',
                answer: 'Thời gian điều trị phụ thuộc vào tình trạng của từng bệnh nhân. Thông thường, một liệu trình điều trị kéo dài từ 1-3 tháng. Bác sĩ sẽ đánh giá và tư vấn cụ thể cho từng trường hợp.',
                order: 5,
            },
            {
                question: 'Phòng khám có bảo mật thông tin bệnh nhân không?',
                answer: 'Tất nhiên. Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin của bệnh nhân theo quy định của pháp luật về bảo vệ thông tin cá nhân.',
                order: 6,
            },
        ],
    });

    // Seed Contact Info
    console.log('📞 Seeding contact info...');
    await prisma.contactInfo.create({
        data: {
            address: 'SN 100, Thôn Khuê, Song Mai, TP. Bắc Giang',
            phone: '0913 54 54 57',
            email: 'phongkhamquangtam@gmail.com',
            workingHours: 'Thứ 2 - Thứ 6: 17H - 21H\nThứ 7, Chủ nhật: 8H - 21H',
            mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d106.2!3d21.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE4JzAwLjAiTiAxMDbCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890',
        },
    });

    // Seed Site Settings
    console.log('⚙️ Seeding site settings...');
    await prisma.siteSetting.createMany({
        data: [
            {
                key: 'site_name',
                value: 'Phòng khám Quang Tâm',
                description: 'Tên website',
            },
            {
                key: 'site_description',
                value: 'Phòng khám chuyên khoa Rối loạn giấc ngủ và Stress',
                description: 'Mô tả website',
            },
            {
                key: 'site_logo',
                value: '/assets/img/logo.png',
                description: 'Logo website',
            },
            {
                key: 'site_favicon',
                value: '/favicon.ico',
                description: 'Favicon',
            },
        ],
    });

    console.log('✅ Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
