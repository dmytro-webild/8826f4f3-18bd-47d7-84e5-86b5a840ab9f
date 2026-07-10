import React from "react";
import { routes } from "@/routes";
import FaqTabbedAccordion from "@/components/sections/faq/FaqTabbedAccordion";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import GridLinesBackground from "@/components/ui/GridLinesBackground";

export default function FaqPage() {
  const faqCategories = [
    {
      name: "Product Capabilities",
      items: [
        { question: "What core features does the AI receptionist offer?", answer: "Our platform provides 24/7 automated answering, direct booking facilitation, multi-language support, and seamless inquiry resolution tailored for boutique hotels." },
        { question: "Can the AI handle complex guest requests?", answer: "Yes, the AI is trained on your specific property details, amenities, and local recommendations to answer complex, multi-part questions naturally." },
        { question: "Does the system support multiple languages?", answer: "Absolutely. Our AI receptionist can converse fluently in over 30 languages, ensuring international guests receive immediate, accurate assistance." },
        { question: "How does the AI escalate issues it cannot resolve?", answer: "If a request requires human intervention, the AI instantly routes the conversation to your designated staff members via SMS, email, or your PMS dashboard." }
      ]
    },
    {
      name: "Pricing",
      items: [
        { question: "How is the pricing structured?", answer: "We offer tiered subscription plans based on your hotel's room count and expected inquiry volume, ensuring you only pay for the capacity you need." },
        { question: "Are there any hidden setup or onboarding fees?", answer: "No, all standard onboarding, system integration, and initial AI training are fully included in your annual or monthly subscription." },
        { question: "Do you offer custom enterprise pricing for hotel groups?", answer: "Yes, for hospitality groups or properties with over 100 rooms, we provide custom SLA-backed agreements and volume discounts." },
        { question: "Is there a free trial available?", answer: "We offer a comprehensive demo and a 14-day risk-free pilot program so you can see the AI's impact on your direct bookings before committing." }
      ]
    },
    {
      name: "Operations",
      items: [
        { question: "How long does it take to implement the AI receptionist?", answer: "Our standard onboarding process takes 7-10 business days, including PMS integration, custom knowledge base training, and rigorous testing." },
        { question: "Will this replace my front desk staff?", answer: "No, our AI is designed to augment your team, handling routine inquiries and bookings so your staff can focus on delivering high-touch, in-person guest experiences." },
        { question: "How do we update the AI's knowledge base?", answer:"You can easily update property details, seasonal promotions, or policies through our intuitive dashboard, and the AI will instantly adapt its responses." },
        { question: "What kind of reporting and analytics do we receive?", answer: "You get access to a real-time dashboard showing inquiry volume, conversion rates, common guest questions, and overall AI performance metrics." }
      ]
    },
    {
      name: "Market Fit",
      items: [
        { question: "Is this solution specifically for boutique hotels?", answer: "Yes, Atlas AI is purpose-built for the unique needs of boutique hotels, luxury resorts, and independent properties that prioritize exceptional guest service." },
        { question: "How does it fit into my current marketing strategy?", answer: "The AI acts as a conversion engine, turning your website traffic and social media leads into direct bookings, reducing your reliance on OTAs." },
        { question: "Can it handle seasonal spikes in inquiries?", answer: "Perfectly. The AI scales instantly to handle unlimited concurrent conversations, ensuring no guest is left waiting during your busiest booking seasons." },
        { question: "Do you understand the Costa Rican hospitality market?", answer: "Yes, our platform is optimized for the nuances of the Costa Rican market, including local travel logistics, eco-tourism inquiries, and regional hospitality standards." }
      ]
    },
    {
      name: "Technical Details",
      items: [
        { question: "What Property Management Systems (PMS) do you integrate with?", answer: "We support seamless integrations with major PMS platforms including Cloudbeds, Mews, Guesty, and over 50 others via our robust API." },
        { question: "How secure is our guests' data?", answer:"Security is our top priority. We are SOC2 Type II compliant and utilize AES-256 encryption for all data at rest and in transit, ensuring full GDPR compliance." },
        { question: "What is the guaranteed uptime for the service?", answer: "Our enterprise-grade infrastructure provides a 99.99% uptime guarantee, backed by financial credits in our Service Level Agreements." },
        { question: "Can we customize the chat widget's appearance?", answer:"Yes, the chat interface is fully customizable to match your hotel's branding, including colors, typography, and the AI's avatar." }
      ]
    }
  ];

  const contactInfo = {
    email: "support@atlasmgroupnet.com",
    phone: "+1 607 968 7093",
    whatsapp: "+1 607 968 7093"
  };

  return (
    <div className="min-h-svh bg-background text-foreground selection:bg-primary-cta selection:text-primary-cta">
      <GridLinesBackground position="fixed" />

      <main className="relative z-10">
        <div className="">
          <h1 className="text-4xl font-bold text-foreground text-center">Frequently Asked Questions</h1>
        </div>
        
        <FaqTabbedAccordion
          tag="Knowledge Base"
          title="Find your answers"
          description="Explore our comprehensive guide to product capabilities, pricing, operations, and technical specifications."
          textAnimation="fade-blur"
          categories={faqCategories}
        />

        <ContactSplitForm
          tag="Get in Touch"
          title="Still have questions?"description={`Reach out via this form, or contact our support team directly via email (${contactInfo.email}), phone (${contactInfo.phone}), or WhatsApp (${contactInfo.whatsapp}).`}
          textAnimation="slide-up"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Hotel Name", required: false }
          ]}
          textarea={{ name: "message", placeholder: "How can we help you?", rows: 4, required: true }}
          buttonText="Send Message"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-corporate-woman-medium-shot_23-2148336873.jpg"
        />
      </main>

    </div>
  );
}