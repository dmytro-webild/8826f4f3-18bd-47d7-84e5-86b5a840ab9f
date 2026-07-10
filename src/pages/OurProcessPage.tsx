import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function OurProcessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary-cta selection:text-primary-cta">
      <NavbarCentered
        logo="Atlas Marketing"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Start Project", href: "/contact" }}
      />

      <main>
        <HeroBillboard
          tag="Our Methodology"
          title="Data-Driven Marketing, Proven Results"
          description="We don't just guess. Our systematic approach ensures every campaign is optimized for maximum ROI and sustainable growth."
          primaryButton={{ text: "Explore Process", href: "#process" }}
          secondaryButton={{ text: "Get in Touch", href: "/contact" }}
          textAnimation="fade-blur"
        />

        <div id="process">
          <FeaturesDetailedSteps
            tag="The Atlas Way"
            title="How We Build Your Success"
            description="A transparent, collaborative, and results-oriented journey from discovery to scale."
            textAnimation="slide-up"
            steps={[
              {
                tag: "Phase 01",
                title: "Discovery & Audit",
                subtitle: "Understanding your brand's DNA",
                description: "We dive deep into your business, analyzing current performance, market positioning, and competitor landscapes to identify untapped opportunities.",
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              },
              {
                tag: "Phase 02",
                title: "Strategy Development",
                subtitle: "Crafting the blueprint",
                description: "Based on our findings, we build a custom, multi-channel roadmap designed to hit your specific KPIs and drive measurable business outcomes.",
                imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              },
              {
                tag: "Phase 03",
                title: "Execution & Launch",
                subtitle: "Bringing the vision to life",
                description: "Our specialists deploy targeted campaigns, create compelling assets, and implement tracking systems to ensure flawless execution across all platforms.",
                imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              },
              {
                tag: "Phase 04",
                title: "Optimization & Scaling",
                subtitle: "Maximizing your ROI",
                description: "We continuously monitor data, run A/B tests, and refine tactics to improve performance, scaling what works to accelerate your growth.",
                imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              }
            ]}
          />
        </div>

        <ContactCta
          tag="Ready to Grow?"
          text="Let's discuss how our proven process can transform your business trajectory."
          primaryButton={{ text: "Contact Us Today", href: "/contact" }}
          secondaryButton={{ text: "View Our Services", href: "/services" }}
          textAnimation="fade-blur"
        />
      </main>

      <FooterMinimal
        brand="Atlas Marketing Group"
        copyright="© 2024 Atlas Marketing Group. All rights reserved."
      />
    </div>
  );
}