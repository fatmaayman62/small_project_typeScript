import { useState } from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Menu, X, ChevronDown } from "lucide-react";

/* ================= Logo ================= */
export const ShopOnlineLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md">
        <span className="font-bold text-white text-xl">S</span>
      </div>
      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
    </div>

    <span className="font-bold text-2xl">
      <span className="text-gray-900">SHOP</span>
      <span className="text-orange-500">ONLINE</span>
    </span>
  </div>
);

/* ================= Types ================= */
type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

/* ================= Navbar ================= */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Products", href: "#", hasDropdown: true },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <Nav
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
      classNames={{ wrapper: "px-0" }}
    >
      {/* Mobile Toggle */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label="Toggle navigation"
          icon={isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        />
      </NavbarContent>

      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <ShopOnlineLogo />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden lg:flex gap-10" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              href={item.href}
              onPress={() => setActive(item.label)}
              className={`relative font-medium transition-colors
                ${
                  active === item.label
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }
              `}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} className="ml-1" />}

              {/* underline animation */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300
                ${active === item.label ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Auth Buttons */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <div className="flex items-center gap-4">
            <Button
              as={Link}
              href="#"
              variant="light"
              className="font-medium"
            >
              Register
            </Button>
            <Button
              as={Link}
              href="#"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Login
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              href={item.href}
              onPress={() => {
                setActive(item.label);
                setIsMenuOpen(false);
              }}
              className={`block w-full px-4 py-4 text-lg rounded-lg
                ${
                  active === item.label
                    ? "bg-orange-50 text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }
              `}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <div className="border-t my-4" />

        <div className="flex flex-col gap-3 px-4 mt-4">
          <Button variant="bordered" fullWidth size="lg">
            Register
          </Button>
          <Button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold"
            fullWidth
            size="lg"
          >
            Login
          </Button>
        </div>
      </NavbarMenu>
    </Nav>
  );
}
