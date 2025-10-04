"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "My Projects", to: "/myProjects" },
    { name: "My Experience", to: "/myExperience" },
    { name: "About Me", to: "/aboutMe" }, // lowercase (Next.js is case-sensitive)
    { name: "Contact Me", to: "/contactMe" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center fixed top-6 w-full z-50 px-4">
      <div
        className="bg-white/10 backdrop-blur-md border border-white/20 
        rounded-full px-3 py-2 shadow-lg 
        w-full max-w-2xl
        overflow-x-auto scrollbar-hide"
      >
        <ul className="flex gap-4 md:gap-6 justify-start md:justify-center items-center min-w-max">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300
                ${
                  pathname === item.to
                    ? "bg-violet-600 text-white shadow-md"
                    : "text-gray-300 hover:text-white"
                }`}
            >
              <Link href={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
