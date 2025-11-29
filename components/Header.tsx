"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Voorraad", href: "/voorraad" },
    { name: "Diensten", href: "/diensten" },
    { name: "Auto inruilen", href: "/auto-inruilen" },
    { name: "Over ons", href: "/over-ons" },
];

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHome) {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const threshold = heroHeight - 80; // Approximate header height
            setIsScrolled(window.scrollY > threshold);
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const headerClass = isHome
        ? (isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent border-transparent py-6")
        : "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                headerClass
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <img
                        src="/logo.png"
                        alt="Autopark Lelystad"
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </Link>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-wide hover:text-white transition-colors relative group"
                            >
                                <span className="group-hover:text-gold-gradient transition-all duration-300">{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contact"
                            className="px-6 py-2 rounded-full border border-gold/50 text-gold hover:bg-gold hover:text-white hover:border-transparent transition-all duration-300 uppercase font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden"
                    >
                        <nav className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="py-3 text-center uppercase font-medium hover:text-gold transition-colors border-b border-white/5 last:border-none"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col items-center gap-4 mt-6 pb-4">
                                <a href="tel:+31612345678" className="flex items-center gap-2 text-sm hover:text-gold">
                                    <Phone className="w-4 h-4 text-gold" />
                                    <span>06 1234 5678</span>
                                </a>
                                <a href="mailto:info@autoparklelystad.nl" className="flex items-center gap-2 text-sm hover:text-gold">
                                    <Mail className="w-4 h-4 text-gold" />
                                    <span>info@autoparklelystad.nl</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
