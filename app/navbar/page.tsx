import DayCard from "@/component/daycard/daycard";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image"; // Import the Image component

export default function NavbarPage() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      <NavbarBrand href="/">
        {/* Replace <img> with <Image> from next/image */}
        <Image
          src="/logo.jpg" // Path to your image
          alt="Flowbite React Logo"
          width={40} // Provide width
          height={40} // Provide height
          className="mr-3" // Maintain your classes
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
