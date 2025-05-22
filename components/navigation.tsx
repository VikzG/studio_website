"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/clips", label: "Clips Musicaux" },
    { href: "/promotions", label: "Vidéos Promo" },
    { href: "/pubs", label: "pubs" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 text-white text-2xl font-bold hover:opacity-80 transition-opacity"
      >
        STUDIO
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-10 h-10 flex flex-col justify-center items-center"
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-8 h-0.5 bg-white block mb-2"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-8 h-0.5 bg-white block"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full bg-black text-white z-40 w-full md:w-[400px] flex flex-col items-center justify-around"
          >
            <motion.div
              className="w-full px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mb-6"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold hover:text-gray-400 transition-colors block py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <Link
              href="/"
              className="text-white text-4xl font-bold hover:opacity-80 transition-opacity"
            >
              STUDIO
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
