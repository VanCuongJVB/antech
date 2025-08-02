import { NextRequest, NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: Record<string, HeaderItem[]> = {
  en: [
    { label: 'About Us', href: '#About' },
    { label: 'Team', href: '#Team' },
    { label: 'FAQ', href: '#FAQ' },
    { label: 'Blog', href: '#Blog' },
    { label: 'Docs', href: '/documentation' },
  ],
  vi: [
    { label: 'Về chúng tôi', href: '#About' },
    { label: 'Đội ngũ', href: '#Team' },
    { label: 'Câu hỏi', href: '#FAQ' },
    { label: 'Blog', href: '#Blog' },
    { label: 'Tài liệu', href: '/documentation' },
  ],
}

// about data
const Aboutdata: Record<string, aboutdata[]> = {
  en: [
    {
      heading: 'About us.',
      imgSrc: '/images/aboutus/imgOne.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more',
    },
    {
      heading: 'Services.',
      imgSrc: '/images/aboutus/imgTwo.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more',
    },
    {
      heading: 'Our Works.',
      imgSrc: '/images/aboutus/imgThree.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more',
    },
  ],
  vi: [
    {
      heading: 'Về chúng tôi.',
      imgSrc: '/images/aboutus/imgOne.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Tìm hiểu thêm',
    },
    {
      heading: 'Dịch vụ.',
      imgSrc: '/images/aboutus/imgTwo.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Tìm hiểu thêm',
    },
    {
      heading: 'Dự án của chúng tôi.',
      imgSrc: '/images/aboutus/imgThree.svg',
      paragraph:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Tìm hiểu thêm',
    },
  ],
}

// work data
const WorkData: Record<string, workdata[]> = {
  en: [
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar.svg' },
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar3.svg' },
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar4.svg' },
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar.svg' },
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar3.svg' },
    { profession: 'Co-founder', name: 'John Doe', imgSrc: '/images/wework/avatar4.svg' },
  ],
  vi: [
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar.svg' },
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar3.svg' },
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar4.svg' },
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar.svg' },
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar3.svg' },
    { profession: 'Đồng sáng lập', name: 'John Doe', imgSrc: '/images/wework/avatar4.svg' },
  ],
}

// featured data
const FeaturedData: Record<string, featureddata[]> = {
  en: [
    { heading: 'Brand design for a computer brand.', imgSrc: '/images/featured/feat1.jpg' },
    { heading: 'Mobile app 3d wallpaper.', imgSrc: '/images/featured/feat2.jpg' },
    { heading: 'Brand design for a computer brand.', imgSrc: '/images/featured/feat1.jpg' },
    { heading: 'Mobile app 3d wallpaper.', imgSrc: '/images/featured/feat2.jpg' },
  ],
  vi: [
    {
      heading: 'Thiết kế thương hiệu cho một thương hiệu máy tính.',
      imgSrc: '/images/featured/feat1.jpg',
    },
    { heading: 'Hình nền 3D cho ứng dụng di động.', imgSrc: '/images/featured/feat2.jpg' },
    {
      heading: 'Thiết kế thương hiệu cho một thương hiệu máy tính.',
      imgSrc: '/images/featured/feat1.jpg',
    },
    { heading: 'Hình nền 3D cho ứng dụng di động.', imgSrc: '/images/featured/feat2.jpg' },
  ],
}

// plans data
const PlansData: Record<string, any[]> = {
  en: [
    {
      heading: 'Startup',
      price: {
        monthly: 19,
        yearly: 190,
      },
      user: 'per user',
      features: {
        profiles: '5 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: '400+ Templated',
        view: 'Calendar View',
        support: '24/7 Support',
      },
    },
    {
      heading: 'Business',
      price: {
        monthly: 29,
        yearly: 290,
      },
      user: 'per user',
      features: {
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: '600+ Templated',
        view: 'Calendar View',
        support: '24/7 VIP Support',
      },
    },
    {
      heading: 'Agency',
      price: {
        monthly: 59,
        yearly: 590,
      },
      user: 'per user',
      features: {
        profiles: '100 Social Profiles',
        posts: '100 Scheduled Posts Per Profile',
        templates: '800+ Templated',
        view: 'Calendar View',
        support: '24/7 VIP Support',
      },
    },
  ],
  vi: [
    {
      heading: 'Khởi nghiệp',
      price: {
        monthly: 19,
        yearly: 190,
      },
      user: 'mỗi người dùng',
      features: {
        profiles: '5 hồ sơ mạng xã hội',
        posts: '5 bài đăng đã lên lịch mỗi hồ sơ',
        templates: '400+ mẫu',
        view: 'Xem theo lịch',
        support: 'Hỗ trợ 24/7',
      },
    },
    {
      heading: 'Doanh nghiệp',
      price: {
        monthly: 29,
        yearly: 290,
      },
      user: 'mỗi người dùng',
      features: {
        profiles: '10 hồ sơ mạng xã hội',
        posts: '5 bài đăng đã lên lịch mỗi hồ sơ',
        templates: '600+ mẫu',
        view: 'Xem theo lịch',
        support: 'Hỗ trợ VIP 24/7',
      },
    },
    {
      heading: 'Công ty',
      price: {
        monthly: 59,
        yearly: 590,
      },
      user: 'mỗi người dùng',
      features: {
        profiles: '100 hồ sơ mạng xã hội',
        posts: '100 bài đăng đã lên lịch mỗi hồ sơ',
        templates: '800+ mẫu',
        view: 'Xem theo lịch',
        support: 'Hỗ trợ VIP 24/7',
      },
    },
  ],
}

// testimonials data
const TestimonialsData: Record<string, testimonials[]> = {
  en: [
    {
      name: 'Robert Fox',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user1.svg',
      rating: 5,
    },
    {
      name: 'Leslie Alexander',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user2.svg',
      rating: 4,
    },
    {
      name: 'Cody Fisher',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user3.svg',
      rating: 4,
    },
    {
      name: 'Robert Fox',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user1.svg',
      rating: 4,
    },
    {
      name: 'Leslie Alexander',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user2.svg',
      rating: 4,
    },
    {
      name: 'Cody Fisher',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      imgSrc: '/images/testimonial/user3.svg',
      rating: 4,
    },
  ],
  vi: [
    {
      name: 'Robert Fox',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user1.svg',
      rating: 5,
    },
    {
      name: 'Leslie Alexander',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user2.svg',
      rating: 4,
    },
    {
      name: 'Cody Fisher',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user3.svg',
      rating: 4,
    },
    {
      name: 'Robert Fox',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user1.svg',
      rating: 4,
    },
    {
      name: 'Leslie Alexander',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user2.svg',
      rating: 4,
    },
    {
      name: 'Cody Fisher',
      profession: 'CEO, Parkview Int.Ltd',
      comment:
        'Có nhiều biến thể của Lorem Ipsum, nhưng phần lớn đã bị thay đổi theo một cách nào đó do chèn thêm yếu tố hài hước',
      imgSrc: '/images/testimonial/user3.svg',
      rating: 4,
    },
  ],
}

// articles data
const ArticlesData: Record<string, articles[]> = {
  en: [
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article.png',
    },
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article2.png',
    },
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article3.png',
    },
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article.png',
    },
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article2.png',
    },
    {
      time: '5 min',
      heading: 'We Launch Delia',
      heading2: 'Webflow this Week!',
      name: 'Published on Startupon',
      date: 'february 19, 2025',
      imgSrc: '/images/articles/article3.png',
    },
  ],
  vi: [
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article.png',
    },
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article2.png',
    },
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article3.png',
    },
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article.png',
    },
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article2.png',
    },
    {
      time: '5 phút',
      heading: 'Chúng tôi ra mắt Delia',
      heading2: 'Webflow tuần này!',
      name: 'Xuất bản trên Startupon',
      date: '19 tháng 2, 2025',
      imgSrc: '/images/articles/article3.png',
    },
  ],
}

// footer links data
const FooterLinksData: Record<string, footerlinks[]> = {
  en: [
    {
      section: 'Menu',
      links: [
        { label: 'About Us', href: '#About' },
        { label: 'Team', href: '#Team' },
        { label: 'FAQ', href: '#FAQ' },
        { label: 'Blog', href: '#Blog' },
      ],
    },
    {
      section: 'Category',
      links: [
        { label: 'Design', href: '/' },
        { label: 'Mockup', href: '/' },
        { label: 'View all', href: '/' },
        { label: 'Log In', href: '/' },
      ],
    },
    {
      section: 'Pages',
      links: [
        { label: '404', href: '/' },
        { label: 'Instructions', href: '/' },
        { label: 'License', href: '/' },
      ],
    },
    {
      section: 'Others',
      links: [
        { label: 'Styleguide', href: '/' },
        { label: 'Changelog', href: '/' },
      ],
    },
  ],
  vi: [
    {
      section: 'Menu',
      links: [
        { label: 'Về chúng tôi', href: '#About' },
        { label: 'Đội ngũ', href: '#Team' },
        { label: 'Câu hỏi', href: '#FAQ' },
        { label: 'Blog', href: '#Blog' },
      ],
    },
    {
      section: 'Danh mục',
      links: [
        { label: 'Thiết kế', href: '/' },
        { label: 'Mockup', href: '/' },
        { label: 'Xem tất cả', href: '/' },
        { label: 'Đăng nhập', href: '/' },
      ],
    },
    {
      section: 'Trang',
      links: [
        { label: '404', href: '/' },
        { label: 'Hướng dẫn', href: '/' },
        { label: 'Giấy phép', href: '/' },
      ],
    },
    {
      section: 'Khác',
      links: [
        { label: 'Hướng dẫn phong cách', href: '/' },
        { label: 'Changelog', href: '/' },
      ],
    },
  ],
}

export const GET = (req: NextRequest) => {
  const lang = req.nextUrl.searchParams.get('lang') === 'vi' ? 'vi' : 'en'

  return NextResponse.json({
    headerData: headerData[lang],
    Aboutdata: Aboutdata[lang],
    WorkData: WorkData[lang],
    FeaturedData: FeaturedData[lang],
    PlansData: PlansData[lang],
    TestimonialsData: TestimonialsData[lang],
    ArticlesData: ArticlesData[lang],
    FooterLinksData: FooterLinksData[lang],
  })
}

