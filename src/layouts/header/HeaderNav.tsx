import PillNav from "@/components/PillNav";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <PillNav
      logo="/BDON.png"
      logoAlt="Company Logo"
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "AI Agent", href: "/ai-agent" },
        { label: "Contact", href: "/contact" },
      ]}
      activeHref={pathname}
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#0A0779"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#0A0779"
      initialLoadAnimation={false}
      onMobileMenuClick={() => {}}
    />
  );
}
