import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-white/10 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-48">
                            <div
                                className="w-full h-12 bg-anthracite-gradient animate-shine transition-all duration-300"
                                style={{
                                    maskImage: "url(/logo.png)",
                                    maskSize: "contain",
                                    maskRepeat: "no-repeat",
                                    maskPosition: "left center",
                                    WebkitMaskImage: "url(/logo.png)",
                                    WebkitMaskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    WebkitMaskPosition: "left center"
                                }}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Uw partner voor exclusieve occasions en premium service. Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke aandacht.
                        </p>
                        <div className="flex gap-4">
                            <SilverIcon
                                href="https://www.snapchat.com/add/autoparklelystd"
                                viewBox="0 0 496 512"
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"
                            />
                            <SilverIcon
                                href="https://www.instagram.com/autoparklelystad"
                                viewBox="0 0 24 24"
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            />
                            <SilverIcon
                                href="https://www.tiktok.com/@autoparklelystad"
                                viewBox="0 0 32 32"
                                d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-anthracite-gradient pl-4 border-image-anthracite-gradient text-anthracite-gradient">Snelle Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Voorraad", "Diensten", "Over ons", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-anthracite-gradient rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-anthracite-gradient pl-4 border-image-anthracite-gradient text-anthracite-gradient">Diensten</h3>
                        <ul className="space-y-3">
                            {["Inkoop & Verkoop", "Onderhoud & Reparatie", "APK Keuring", "Airco Service", "Diagnose"].map((item) => (
                                <li key={item}>
                                    <Link href="/diensten" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-anthracite-gradient rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-anthracite-gradient pl-4 border-image-anthracite-gradient text-anthracite-gradient">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="mt-1">
                                    <SilverIcon
                                        href="#"
                                        viewBox="0 0 24 24"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span>
                                    Autopark Lelystad<br />
                                    Straatnaam 123<br />
                                    8200 AB Lelystad
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <SilverIcon
                                    href="tel:+31612345678"
                                    viewBox="0 0 24 24"
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                    className="w-5 h-5"
                                />
                                <a href="tel:+31612345678" className="hover:text-white transition-colors">06 1234 5678</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <SilverIcon
                                    href="mailto:info@autoparklelystad.nl"
                                    viewBox="0 0 24 24"
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                    className="w-5 h-5"
                                />
                                <a href="mailto:info@autoparklelystad.nl" className="hover:text-white transition-colors">info@autoparklelystad.nl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Autopark Lelystad. Alle rechten voorbehouden.</p>
                    <div className="flex gap-6">
                        <Link href="/privacyverklaring" className="hover:text-foreground transition-colors">Privacyverklaring</Link>
                        <Link href="/algemene-voorwaarden" className="hover:text-foreground transition-colors">Algemene voorwaarden</Link>
                        <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SilverIcon({ href, d, viewBox, className = "w-10 h-10" }: { href: string; d: string; viewBox: string; className?: string }) {
    const svgData = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}'><path d='${d}' fill='black'/></svg>`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center hover:scale-110 transition-transform duration-300 ${className}`}
        >
            <div
                className="w-full h-full bg-anthracite-gradient"
                style={{
                    maskImage: `url("${svgData}")`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url("${svgData}")`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                }}
            />
        </a>
    );
}
