"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../NavLink";
import type { NavItem } from "../types";
import HamburgerToggle from "./HamburgerToggle";

export default function MobileNav({ navigation }: { navigation: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="md:hidden">
      <HamburgerToggle isOpen={open} toggle={toggleMenu} ref={buttonRef} />

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full w-full bg-white shadow-md z-50"
          >
            <ul className="flex flex-col gap-6 p-6">
              {navigation.map((item, index) => (
                <NavLink
                  key={index}
                  item={item}
                  onClick={() => setOpen(false)}
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
