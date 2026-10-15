"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";

const navigation = [
  { label: "Introduction", id: "introduction" },
  { label: "About", id: "about" },
  { label: "Clinical learning", id: "clinical-learning" },
  { label: "Selected work", id: "selected-work" },
  { label: "Community", id: "community" },
  { label: "My journey", id: "journey" },
  { label: "Notes", id: "notes" },
  { label: "Professional profile", id: "profile" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 900px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    button.current?.focus();
  }

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${name}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            B<span>K</span>
            <i />
          </span>
          <span className="brand-name">
            {name}
            <span>Medicine &amp; Surgery</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation
            .filter(({ id }) =>
              ["about", "clinical-learning", "selected-work", "notes"].includes(
                id,
              ),
            )
            .map(({ label, id }) => (
              <Link
                href={`/#${id}`}
                key={id}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </Link>
            ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/#contact"
            className="button button-outline header-contact"
            onClick={() => setOpen(false)}
          >
            <span className="desktop-contact-label">Get in touch</span>
            <span className="mobile-contact-label">Contact</span>
            <Icon name="arrow-up" />
          </Link>
          <button
            ref={button}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="container">
          {navigation.map(({ label, id }, index) => (
            <Link href={`/#${id}`} key={id} onClick={closeMenu}>
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {label}
              <Icon name="arrow-up" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
