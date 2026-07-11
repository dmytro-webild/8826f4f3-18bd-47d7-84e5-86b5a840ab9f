import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import ContactBar from "@/components/sections/contact/ContactBar";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      <div className="flex-grow">
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
          imageSrc="http://img.b2bpic.net/free-photo/close-up-worker-checking-economic-report_1098-3521.jpg"
        />

        <ContactBar
          tag="Direct Lines"
          title="Other ways to reach us"
          options={[
            { icon: Phone, label: "+506 8747 5330", href: "tel:+50687475330" },
            { icon: Mail, label: "nicoe0086@atlasmgroupnet.com", href: "mailto:nicoe0086@atlasmgroupnet.com" },
            { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/50687475330" }
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
      </div>
    </div>
  );
}