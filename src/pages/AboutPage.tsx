import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FeaturesMediaSimple from "@/components/sections/features/FeaturesMediaSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Atlas Marketing"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Book Demo", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroBrand
          brand="Atlas Marketing Group"
          description="Elevating Costa Rican hospitality through intelligent automation and strategic marketing."
          primaryButton={{ text: "Our Vision", href: "#vision" }}
          secondaryButton={{ text: "Get in Touch", href: "/contact" }}
          textAnimation="fade-blur"
        />

        <div id="vision">
          <AboutTextSplit
            title="Solving the Hospitality Gap"
            descriptions={[
              "In the bustling Costa Rican hotel market, every missed call is a missed opportunity. We recognized that staffing gaps and overwhelming inquiry volumes were costing properties valuable bookings and damaging guest experiences.",
              "Atlas Marketing Group was founded to bridge this gap. We deploy intelligent AI voice agents and automated systems that ensure your guests always receive immediate, professional assistance, 24/7, regardless of staff availability."
            ]}
            textAnimation="slide-up"
          />
        </div>

        <FeaturesMediaSimple
          tag="Expertise"
          title="Tailored for Costa Rica"
          description="We understand the unique dynamics of the local tourism industry and build solutions that fit."
          items={[
            {
              title: "Bilingual AI Agents",
              description: "Seamlessly handle inquiries in both English and Spanish, catering to international and local guests alike.",
              imageSrc: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80"
            },
            {
              title: "Peak Season Ready",
              description: "Scale your communication capacity instantly during high season without the stress of emergency hiring.",
              imageSrc: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
            }
          ]}
          textAnimation="fade-blur"
        />

        <ContactCta
          tag="Get Started"
          text="Stop missing calls and start maximizing your bookings today."
          primaryButton={{ text: "Book a Demo", href: "/contact" }}
          secondaryButton={{ text: "Learn More", href: "/services" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Atlas Marketing Group"
        columns={[
          {
            title: "Company",
            items: [
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" }
            ]
          },
          {
            title: "Connect",
            items: [
              { label: "Contact", href: "/contact" },
              { label: "Book Demo", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2024 Atlas Marketing Group. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}