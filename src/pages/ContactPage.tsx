import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Atlas Marketing Group"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <ContactSplitForm
          tag="Contact Us"
          title="Let's grow your hotel's bookings."
          description="Fill out the form below or reach out directly. We aim to respond to all inquiries within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "hotel", type: "text", placeholder: "Hotel Name", required: true }
          ]}
          textarea={{ name: "message", placeholder: "How can we help you?", rows: 4, required: true }}
          buttonText="Send Message"
          textAnimation="fade-blur"
          imageSrc="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop"
        />

        <FeaturesIconCards
          tag="Direct Lines"
          title="Other ways to reach us"
          description="Prefer to talk or message directly? Here is our contact information and availability."
          features={[
            { icon: "📞", title: "Call Us", description: "+1 607 968 7093" },
            { icon: "✉️", title: "Email", description: "nicoe0086@atlasmgroupnet.com" },
            { icon: "💬", title: "WhatsApp", description: "Message us for instant support" },
            { icon: "🕒", title: "Best Call Times", description: "9 AM - 5 PM (Costa Rica Time, CST)" }
          ]}
          textAnimation="slide-up"
        />

        <FaqSimple
          tag="Support"
          title="Frequently Asked Questions"
          description="Quick answers to common inquiries about working with us."
          items={[
            { question: "Do you offer support in Spanish?", answer: "Yes, absolutely! Hablamos español. Our team is fully bilingual and can assist you in either English or Spanish." },
            { question: "What is your typical response time?", answer: "We strive to reply to all emails and form submissions within 24 hours on business days." },
            { question: "When is the best time to call?", answer: "Our office hours are 9:00 AM to 5:00 PM, Costa Rica Time (CST). Calling during these hours ensures the fastest response." }
          ]}
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