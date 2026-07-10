import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import FaqTabbedAccordion from "@/components/sections/faq/FaqTabbedAccordion";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import GridLinesBackground from "@/components/ui/GridLinesBackground";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary-cta selection:text-primary-cta">
      <GridLinesBackground position="fixed" />
      
      <NavbarCentered 
        logo="Atlas" 
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))} 
        ctaButton={{ text: "Contact Sales", href: "/contact" }} 
      />

      <main className="relative z-10 pt-24 pb-16">
        <FaqTabbedAccordion
          tag="Knowledge Base"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our product capabilities, pricing, and technical details."
          textAnimation="fade-blur"
          categories={[
            {
              name: "Product & Capabilities",
              items: [
                { question: "What core features does the platform offer?", answer: "Our platform provides end-to-end marketing automation, real-time analytics, and multi-channel campaign management designed for scale." },
                { question: "Is it suitable for enterprise operations?", answer: "Yes, we offer enterprise-grade role-based access control, custom workflows, and dedicated account management." },
                { question: "How does it fit into my current market strategy?", answer: "It integrates seamlessly with existing CRM and ad platforms to unify your data and optimize conversion rates." },
                { question: "Can I automate multi-step campaigns?", answer: "Absolutely. Our visual workflow builder allows you to create complex, conditional logic for email, SMS, and ad retargeting." }
              ]
            },
            {
              name: "Pricing & Plans",
              items: [
                { question: "How is the pricing structured?", answer: "We offer tiered pricing based on active contacts and feature requirements, ensuring you only pay for what you use." },
                { question: "Are there any hidden setup fees?", answer: "No, all standard onboarding and setup costs are included in your annual subscription." },
                { question: "Do you offer custom enterprise pricing?", answer: "Yes, for volumes exceeding 100k contacts, we provide custom SLA-backed agreements." }
              ]
            },
            {
              name: "Technical Details",
              items: [
                { question: "What integrations are supported?", answer: "We support over 50 native integrations including Salesforce, HubSpot, and major social platforms, plus a robust REST API." },
                { question: "How secure is my data?", answer: "We are SOC2 Type II compliant and utilize AES-256 encryption for all data at rest and in transit." },
                { question: "What is the guaranteed uptime?", answer: "Our enterprise plans include a 99.99% uptime guarantee backed by financial credits." }
              ]
            }
          ]}
        />

        <ContactSplitForm
          tag="Get in Touch"
          title="Still have questions?"
          description="Reach out via this form, or contact our support team directly via email (support@atlas.com), phone (+1-800-555-0199), or WhatsApp (+1-555-0198)."
          textAnimation="slide-up"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false }
          ]}
          textarea={{ name: "message", placeholder: "How can we help you?", rows: 4, required: true }}
          buttonText="Send Message"
          imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80"
        />
      </main>

      <FooterSimple
        brand="Atlas Marketing"
        copyright="© 2024 Atlas Marketing Group. All rights reserved."
        columns={[
          { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Careers", href: "/careers" }] },
          { title: "Support", items: [{ label: "Help Center", href: "/faq" }, { label: "Contact", href: "/contact" }] }
        ]}
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}