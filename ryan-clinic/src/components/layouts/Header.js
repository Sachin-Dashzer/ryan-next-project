"use client"; // If using App Router, add this on top for client-side interactivity

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button"


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    {
      name: "Hair Transplant",
      href: "/hair-transplant",
      hasDropdown: true,
      key: "hairTransplant",
      dropdownItems: [
        { name: "FUE Hair Transplant", href: "/hair-transplant/fue" },
        { name: "DHI Hair Transplant", href: "/hair-transplant/dhi" },
        { name: "Sapphire Hair Transplant", href: "/hair-transplant/sapphire" },
      ]
    },
    {
      name: "Treatments",
      href: "/treatments",
      hasDropdown: true,
      key: "treatments",
      dropdownItems: [
        { name: "PRP Treatment", href: "/treatments/prp" },
        { name: "Mesotherapy", href: "/treatments/mesotherapy" },
        { name: "Hair Care", href: "/treatments/hair-care" },
      ]
    },
    {
      name: "Gallery",
      href: "/gallery",
      hasDropdown: true,
      key: "gallery",
      dropdownItems: [
        { name: "Before & After", href: "/gallery/before-after" },
        { name: "Videos", href: "/gallery/videos" },
      ]
    },
    {
      name: "Branches",
      href: "/branches",
      hasDropdown: true,
      key: "branches",
      dropdownItems: [
        { name: "London", href: "/branches/london" },
        { name: "Manchester", href: "/branches/manchester" },
        { name: "Birmingham", href: "/branches/birmingham" },
      ]
    },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-primary text-white">
      <div className="mx-auto px-2 xl:px-8 flex items-center justify-between h-16 md:h-22">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-44">
              <Image
                src="https://res.cloudinary.com/dha2ecdnn/image/upload/v1740393300/logo_tl4ww5.png"
                alt="Ryan Clinic"
                width={200}
                height={200}
                className="w-32 h-auto md:w-48 object-contain"
                unoptimized // Optional: removes image optimization warning if not configured
              />
            </div>
          </Link>
        </div>

        <div className="flex xl:gap-12 items-center">
          {/* Navigation Menu */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.key || item.name} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.key)}
                        className="flex items-center px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {openDropdown === item.key && (
                        <div className="absolute z-10 mt-1 left-0 w-48 rounded-md bg-gray-800 shadow-lg">
                          <ul className="py-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.href}>
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button className="bg-white text-black cursor-pointer hover:bg-black hover:text-white">
              <Phone className="h-4 w-4" />
              <span className="text-xs md:text-sm ">Call us</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
            <Button className="bg-white text-black cursor-pointer hover:bg-black hover:text-white">
              <Calendar className="h-4 w-4" />
              <span className="text-xs md:text-sm  hidden xl:block">Book appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
