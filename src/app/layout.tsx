"use client";

import { Inter, Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable, "font-sans")}>
        <nav className={cn("nav", scrolled && "nav-scrolled")}>
          <div className="nav-inner">
            <div className="nav-logo">
              Test Barbershop
            </div>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.text}
                </a>
              ))}
            </div>
            <button
              className={cn("hamburger", menuOpen && "active")}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={cn("mobile-nav-overlay", menuOpen && "open")}>
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <h3>Test Barbershop</h3>
                <p>Premium cuts for the modern gentleman. 5 years of expertise, over 2000 satisfied clients, and a 5-star Google rating in the heart of Scottsdale.</p>
              </div>
              <div className="footer-col">
                <h4>Contact Info</h4>
                <p>123 Main St, Scottsdale AZ 85260</p>
                <p>Monday - Saturday: 10am-7pm</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <p>Classic Cuts - $30</p>
                <p>Fades - $35</p>
                <p>Hot Towel Shave - $25</p>
                <p>Beard Trim - $15</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Test Barbershop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}