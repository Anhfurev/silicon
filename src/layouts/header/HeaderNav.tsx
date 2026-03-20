import PillNav from "@/components/PillNav";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Нүүр", href: "/" },
  { label: "Тухай", href: "/about" },
  { label: "Үйлчилгээ", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <PillNav
      logo="/BDON.png"
      logoAlt="Company Logo"
      items={[
        { label: "Нүүр", href: "/" },
        { label: "Тухай", href: "/about" },
        { label: "Үйлчилгээ", href: "/products" },
        { label: "AI туслах", href: "/ai-agent" },
        { label: "Холбогдох", href: "/contact" },
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
