import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Benefits",
    "href": "#benefits"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Social Proof",
    "href": "#social-proof"
  },
  { name: "About", href: "/about" },
  { name: "Our Process", href: "/our-process" },


];

  return (
    <StyleProvider buttonVariant="default" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Atlas AI"
      ctaButton={{
        text: "Contact Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Atlas Marketing Group"
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Services",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Contact",
              href: "mailto:nicoe0086@atlasmgroupnet.com",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
