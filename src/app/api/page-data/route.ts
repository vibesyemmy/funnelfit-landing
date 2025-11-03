import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/fintech-icon.svg',
    darkImg: '/images/home/brand/fintech-icon-dark.svg',
    title: 'Fintech',
  },
  {
    image: '/images/home/brand/ecommerce-icon.svg',
    darkImg: '/images/home/brand/ecommerce-icon-dark.svg',
    title: 'E-commerce',
  },
  {
    image: '/images/home/brand/tech-startups-icon.svg',
    darkImg: '/images/home/brand/tech-startups-icon-dark.svg',
    title: 'Tech Startups',
  },
  {
    image: '/images/home/brand/professional-services-icon.svg',
    darkImg: '/images/home/brand/professional-services-icon-dark.svg',
    title: 'Professional Services',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/services/calculation.svg',
    title: 'Automated Bookkeeping',
    description: 'Streamline your financial records with our cloud-based automated bookkeeping system that ensures accuracy and compliance.',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/services/working-time.svg',
    title: 'CFO Services',
    description: 'Get strategic financial leadership and expert guidance to drive your business growth and profitability.',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/services/book.svg',
    title: 'Tax Compliance',
    description: 'Stay compliant with Nigerian tax regulations through our expert tax preparation and filing services.',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/services/health-report.svg',
    title: 'Financial Reporting',
    description: 'Access real-time financial insights and comprehensive reports to make informed business decisions.',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/services/settings.svg',
    title: 'Business Intelligence',
    description: 'Transform your financial data into actionable insights with advanced analytics and business intelligence tools.',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'Lagos Tech Startup',
    tag: ['Automated Bookkeeping', 'Financial Reporting'],
    link: 'https://www.funnelfit.co.uk/',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Abuja E-commerce',
    tag: ['CFO Services', 'Tax Compliance'],
    link: 'https://www.funnelfit.co.uk/',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Port Harcourt Manufacturing',
    tag: ['Business Intelligence', 'Financial Analytics'],
    link: 'https://www.funnelfit.co.uk/',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Kano Trading Company',
    tag: ['Cloud Accounting', 'Regulatory Compliance'],
    link: 'https://www.funnelfit.co.uk/',
  },
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/expert-accountants.svg',
    name: 'Expert Nigerian Accountants',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/result/technology-driven.svg',
    name: 'Technology-Driven',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/scalable-solutions.svg',
    name: 'Scalable Solutions',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: '2x the speed. Great for an MVP, Web App or complex problem',
    plan_price: '$3800',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What financial services does FunnelFit offer?',
    faq_ans:
      'FunnelFit provides comprehensive financial solutions including automated bookkeeping, fractional CFO services, tax compliance, financial reporting, and business intelligence analytics specifically designed for Nigerian businesses.',
  },
  {
    faq_que: 'How does your automated bookkeeping work?',
    faq_ans:
      'Our cloud-based automated bookkeeping system integrates with your existing business tools to track income, expenses, and transactions in real-time. We ensure compliance with Nigerian accounting standards and provide monthly financial reports.',
  },
  {
    faq_que: 'What is a fractional CFO and do I need one?',
    faq_ans:
      'A fractional CFO provides part-time strategic financial leadership without the full-time cost. If your business needs financial planning, investor relations, or growth strategy but cannot justify a full-time CFO, our fractional CFO service is perfect for you.',
  },
  {
    faq_que: 'How do you ensure Nigerian tax compliance?',
    faq_ans:
      'Our team of certified Nigerian accountants stays updated with FIRS regulations, VAT requirements, and local tax laws. We handle tax preparation, filing, and ensure your business meets all regulatory compliance requirements.',
  },
  {
    faq_que: 'How quickly can you set up our financial systems?',
    faq_ans:
      'Most businesses are fully onboarded within 2-3 weeks. This includes system integration, historical data migration, team training, and establishing automated reporting workflows tailored to your business needs.',
  },
  {
    faq_que: 'What makes FunnelFit different from traditional accounting firms?',
    faq_ans:
      'We combine traditional accounting expertise with modern technology and deep understanding of Nigerian business environment. Our cloud-based solutions provide real-time insights, automated processes, and strategic financial guidance that traditional firms often lack.',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
