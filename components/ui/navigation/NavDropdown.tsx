"use client";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import type { NavItem } from "@/types/sanity";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { useHasHover } from "@/lib/useHasHover";

const NavDropdown = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const linkStyles = clsx(
    "flex items-center gap-1",
    "transition-colors",
    "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]",
    isActive && "text-[color:var(--nav-text-hover)]"
  );
  const hasHover = useHasHover();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (!hasHover) setOpen((prev) => !prev);
  };

  const isOpen = hasHover ? undefined : open;

  return (
    <div
      className="relative group"
      onMouseLeave={() => !hasHover && setOpen(false)}
    >
      <button className={linkStyles} onClick={toggle} type="button">
        <NavLink item={item} />
        <span className="text-xs ml-1 inline-block transition-transform group-hover:rotate-180 transition-delay-75">
          {"▾"}
        </span>
      </button>

      {(hasHover || open) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={hasHover || isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className={`
          absolute top-full left-0 mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-200
          transition-all duration-200 ease-out
          ${hasHover ? "invisible group-hover:visible opacity-0 group-hover:opacity-100" : ""}`}
        >
          <ul className="flex flex-col p-4 gap-2">
            {item.children?.map((child) => (
              <NavLink key={child.href} item={child} />
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavDropdown;
