export const metadata = {
  title: "Open Tech Innovations | Web Design, SEO, AI, and Digital Solutions",
  description: "Open Tech Innovations offers custom web design, SEO optimization, AI services, and progressive web app development using Next.js and React. Enhance your online presence with our expert team and innovative strategies.",
  keywords: "Web Design, SEO Services, AI Solutions, E-commerce Solutions, Digital Marketing, UX/UI Design, CMS, Website Maintenance, Analytics, Custom Development, Progressive Web Apps, Next.js, React",
};


import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
