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

    // Always use the solid background style
    const headerClass = "bg-background/90 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-4";

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
                    <div
                        className="h-12 md:h-16 w-32 md:w-48 bg-anthracite-gradient animate-shine transition-all duration-300"
                        style={{
                            maskImage: "url(/logo.png)",
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskImage: "url(/logo.png)",
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center"
                        }}
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
                                className={cn(
                                    "text-sm font-medium uppercase tracking-wide transition-colors relative group text-foreground hover:text-foreground/80"
                                )}
                            >
                                <span className="group-hover:text-anthracite-gradient transition-all duration-300">{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-anthracite-gradient transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,62,70,0.4)]"
                        >
                            {/* Gradient Border (Masked) */}
                            <div
                                className="absolute inset-0 bg-anthracite-gradient rounded-full"
                                style={{
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "exclude",
                                    WebkitMaskComposite: "xor",
                                    padding: "1px"
                                }}
                            />

                            {/* Hover Fill */}
                            <div className="absolute inset-0 bg-anthracite-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Text */}
                            <span className="relative z-10 font-bold uppercase text-sm tracking-wider text-anthracite-gradient group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white] transition-all duration-300">
                                Contact
                            </span>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden transition-colors",
                            isHome && !isScrolled ? "text-white" : "text-foreground"
                        )}
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
                        className="absolute top-full left-0 right-0 bg-background border-b border-black/10 dark:border-white/10 md:hidden"
                    >
                        <nav className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="py-3 text-center uppercase font-medium text-foreground hover:text-anthracite transition-colors border-b border-black/5 dark:border-white/5 last:border-none"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col items-center gap-4 mt-6 pb-4">
                                <a href="tel:+31612345678" className="flex items-center gap-2 text-sm text-foreground hover:text-anthracite">
                                    <Phone className="w-4 h-4 text-anthracite" />
                                    <span>06 1234 5678</span>
                                </a>
                                <a href="mailto:info@autoparklelystad.nl" className="flex items-center gap-2 text-sm text-foreground hover:text-anthracite">
                                    <Mail className="w-4 h-4 text-anthracite" />
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
