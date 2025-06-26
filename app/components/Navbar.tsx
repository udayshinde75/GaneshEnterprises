"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white dark:bg-neutral-900 shadow-sm sticky top-0 z-50 sm:pt-5 p-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ganesha.png" alt="Ganesh Enterprises Logo" width={40} height={40} className="rounded-full  hidden sm:block" />
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Ganesh Enterprises</span>
        </Link>
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.1, color: "#d97706" }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link href={link.href} className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors px-2 py-2 rounded">
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-white dark:bg-neutral-900 shadow">
          {navLinks.map(link => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.05, color: "#d97706" }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link href={link.href} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors px-2 py-2 rounded" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 