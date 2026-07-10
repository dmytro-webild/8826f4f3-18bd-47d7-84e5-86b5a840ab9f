import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Boutique AI Receptionist"
      title="Never Miss Another Reservation Again"
      description="Our AI receptionist handles 24/7 guest inquiries, scheduling, and direct bookings for your Costa Rican boutique hotel. Professional, sophisticated, and seamless."
      primaryButton={{
        text: "Call for Demo: +1 607 968 7093",
        href: "tel:+16079687093",
      }}
      secondaryButton={{
        text: "Email Inquiry",
        href: "mailto:nicoe0086@atlasmgroupnet.com",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/attractive-woman-reception-desk-looking-camera_23-2148033349.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Sophisticated AI, Human Touch. Your guests expect immediate responses. Our AI fills the gap between your busy staff and your next guest, ensuring no lead goes cold."
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Our Solution"
      title="Always Ready for Your Guests"
      description="Focus on crafting the perfect guest experience while we handle the inbound communications."
      items={[
        {
          tag: "Core",
          title: "24/7 AI Availability",
          description: "Always-on service responding to booking inquiries and guest FAQs instantaneously.",
          imageSrc: "http://img.b2bpic.net/free-photo/suitcase-icon-front-side_187299-39582.jpg",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
        },
        {
          tag: "Sales",
          title: "Direct Booking Drive",
          description: "Seamlessly guide guests to book directly through your site, cutting OTAs fees.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345423.jpg",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
        },
        {
          tag: "Impact",
          title: "Maximized Revenue",
          description: "Capture every lead in real-time, ensuring zero lost revenue from missed calls.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-light-bokeh-depicting-upward-trending-graph-showing-growth-progress_191095-99604.jpg",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Performance"
      title="Revenue Impact"
      description="See how much more revenue you could capture."
      metrics={[
        {
          value: "30%",
          title: "Increased Direct Bookings",
          features: [
            "Reduction in OTA dependency",
            "Enhanced guest experience",
          ],
        },
        {
          value: "100%",
          title: "Response Rate",
          features: [
            "Zero missed inquiries",
            "24/7 operational capability",
          ],
        },
        {
          value: "24/7",
          title: "Support Availability",
          features: [
            "Global time-zone handling",
            "Multilingual reception",
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Premium Hospitality Partners"
      description="We partner with boutique hotels that prioritize excellence."
      names={[
        "Boutique Costa Rica",
        "Pacific View Resorts",
        "Jungle Luxury Suites",
        "Coastal Comfort Stays",
        "Mountain Heights Lodge",
        "Tico Hospitality Group",
        "Elite Stay Collective",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Information"
      title="Frequently Asked Questions"
      description="Everything you need to know about our AI reception service."
      items={[
        {
          question: "Does it sound like a robot?",
          answer: "No, our system uses advanced LLMs to provide natural, professional, and brand-aligned responses.",
        },
        {
          question: "Can it sync with our PMS?",
          answer: "Yes, we integrate with major property management systems to ensure data synchronization.",
        },
        {
          question: "Is it suitable for small hotels?",
          answer: "Perfectly suited for boutique hotels needing an efficient concierge-like experience.",
        },
        {
          question: "How quickly can we start?",
          answer: "Onboarding is fast and typically completed within 7-10 business days.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to streamline your reception and maximize revenue?"
      primaryButton={{
        text: "Call for Demo: +1 607 968 7093",
        href: "tel:+16079687093",
      }}
      secondaryButton={{
        text: "Email Contact",
        href: "mailto:nicoe0086@atlasmgroupnet.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
