"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../NavLink";
import type { NavItem } from "@/types/sanity";
import HamburgerToggle from "./HamburgerToggle";

export default function MobileNav({ navigation }: { navigation: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
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
  const toggleSubmenu = (href: string) => {
    setOpenSubmenu((prev) => (prev === href ? null : href));
  };

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
                <li key={index}>
                  {item.children ? (
                    <div>
                      <div className="flex justify-between items-center gap-2">
                        <NavLink item={item} onClick={() => setOpen(false)} />
                        <button
                          type="button"
                          aria-label="Toggle submenu"
                          onClick={() => toggleSubmenu(item.href)}
                          className="flex justify-between w-full"
                        >
                          <span className="p-2">▾</span>
                        </button>
                      </div>

                      <AnimatePresence>
                        {openSubmenu === item.href && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 pt-2 flex flex-col gap-3"
                          >
                            {item.children.map((child, idx) => (
                              <NavLink
                                key={idx}
                                item={child}
                                onClick={() => setOpen(false)}
                              />
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink item={item} onClick={() => setOpen(false)} />
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
