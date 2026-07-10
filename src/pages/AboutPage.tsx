import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <div data-webild-section="AboutTextSplit"><section aria-label="About section" className="py-20"><div className="flex flex-col gap-20 mx-auto w-content-width"><div className="flex flex-col md:flex-row gap-3 md:gap-15"><div className="w-full md:w-1/2"><TextAnimation text="Elevating Costa Rican Hospitality" variant="fade-blur" gradientText={true} tag="h2" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance" /></div><div className="flex flex-col gap-2 w-full md:w-1/2"><TextAnimation key={0} text="At Atlas AI, we understand the unique rhythm of Costa Rica's boutique hotel industry. We know that every missed call is a missed opportunity to welcome a new guest." variant="fade-blur" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" />
<TextAnimation key={1} text="Staffing shortages and time zone differences shouldn't dictate your occupancy rates. Our sophisticated AI receptionist bridges this gap, ensuring your property delivers flawless, 24/7 service." variant="fade-blur" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" />
<TextAnimation key={2} text="By automating inquiries and direct bookings, we empower owners to focus on what truly matters: providing an unforgettable, high-end experience for every guest who walks through your doors." variant="fade-blur" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" /><div className="flex flex-wrap gap-3 mt-2 md:mt-3"><Button text="Book a Demo" href="/demo" variant="primary" /><Button text="Our Services" href="/services" variant="secondary" animationDelay={0.1} /></div></div></div><div className="w-full border-b border-foreground/5" /></div></section></div>
      <div data-webild-section="AboutFeaturesSplit"><AboutFeaturesSplit
        tag="Our Vision"
        title="Solving the Staffing Crisis for Boutique Hotels"
        description="We understand the unique challenges of running a boutique hotel in Costa Rica. Our AI solutions bridge the gap between staffing shortages and flawless guest experiences."
        primaryButton={{"text":"Book a Demo","href":"/demo"}}
        secondaryButton={{"text":"Contact Us","href":"/contact"}}
        items={[{"icon":"PhoneOff","title":"End Missed Reservations","description":"Capture every booking opportunity with 24/7 automated response capabilities."},{"icon":"Users","title":"Overcome Staffing Gaps","description":"Maintain premium service levels even during peak seasons or unexpected shortages."},{"icon":"MapPin","title":"Local Market Expertise","description":"Tailored specifically for the nuances and demands of Costa Rican hospitality."}]}
        imageSrc="https://img.freepik.com/free-photo/beautiful-luxury-hotel-resort-pool-ocean-beach_74190-7437.jpg"
        textAnimation="fade-blur"
      /></div>
      <div data-webild-section="ContactCta"><section aria-label="Contact section" className="py-20"><div className="w-content-width mx-auto"><ScrollReveal variant="fade-blur"><div className="flex flex-col items-center gap-8 md:gap-10 py-20 px-8 rounded card"><div className="flex flex-col items-center gap-2"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Ready to Upgrade?</p></div><TextAnimation text="Stop losing bookings to unanswered calls. Discover how our AI receptionist transforms your boutique hotel's guest experience." variant="fade-blur" gradientText={true} tag="h2" className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Book a Demo" href="/demo" variant="primary" /><Button text="Contact Us" href="/contact" variant="secondary" animationDelay={0.1} /></div></div></div></ScrollReveal></div></section></div>
    </>
  );
}
