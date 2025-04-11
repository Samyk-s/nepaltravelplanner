import DayCard from "@/component/daycard/daycard";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarPage() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      <NavbarBrand href="/">
        <img
          src="/logo.jpg"
          className="mr-3 h-8 sm:h-10"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2">
        <DayCard />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active className="text-xl">
          Home
        </NavbarLink>
        <NavbarLink href="/component/Planner" className="text-xl">
          Planner
        </NavbarLink>
        <NavbarLink href="/destination" className="text-xl">
          Destination
        </NavbarLink>
        <NavbarLink href="/traveltoolkit" className="text-xl">
          Travel Toolkit
        </NavbarLink>
        <NavbarLink href="/contact" className="text-xl">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
