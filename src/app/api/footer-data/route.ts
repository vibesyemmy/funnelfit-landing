import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "FunnelFit",
        tagline: "Transforming Nigerian businesses with innovative digital financial solutions. Your growth is our mission.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com/funnelfit"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/company/funnelfit"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com/funnelfit"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com/funnelfit"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact", url: "/contact" },
            { name: "About", url: "/#about" },
            { name: "Services", url: "/#services" },
            { name: "Solutions", url: "/#solutions" },
            { name: "Results", url: "/#results" }
        ]
    },
    otherPages: {
        name: "Legal",
        links: [
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" },
            { name: "Cookie Policy", url: "/cookie-policy" },
            { name: "Compliance", url: "/compliance" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "Victoria Island, Lagos, Nigeria",
        email: "hello@funnelfit.ng",
        phone: "+234 (0) 901 234 5678"
    },
    copyright: "©2025 FunnelFit. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};