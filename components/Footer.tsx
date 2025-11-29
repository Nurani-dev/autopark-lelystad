import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-48">
                            <img
                                src="/logo.png"
                                alt="Autopark Lelystad"
                                className="w-full h-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Uw partner voor exclusieve occasions en premium service. Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke aandacht.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.snapchat.com/add/autoparklelystd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-gradient hover:text-black transition-all group">
                                <svg viewBox="0 0 496 512" className="w-5 h-5 fill-current group-hover:fill-black text-white">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/autoparklelystad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-gradient hover:text-black transition-all group">
                                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
                            </a>
                            <a href="https://www.tiktok.com/@autoparklelystad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-gradient hover:text-black transition-all group">
                                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current group-hover:fill-black text-white">
                                    <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold-gradient pl-4 border-image-gold-gradient">Snelle Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Voorraad", "Diensten", "Over ons", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-gold-gradient transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-gold group-hover:bg-gold-gradient rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold-gradient pl-4 border-image-gold-gradient">Diensten</h3>
                        <ul className="space-y-3">
                            {["Inkoop & Verkoop", "Onderhoud & Reparatie", "APK Keuring", "Airco Service", "Diagnose"].map((item) => (
                                <li key={item}>
                                    <Link href="/diensten" className="text-gray-400 hover:text-gold-gradient transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-gold group-hover:bg-gold-gradient rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold-gradient pl-4 border-image-gold-gradient">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-gold-gradient shrink-0 mt-1" />
                                <span>
                                    Autopark Lelystad<br />
                                    Straatnaam 123<br />
                                    8200 AB Lelystad
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-gold-gradient shrink-0" />
                                <a href="tel:+31612345678" className="hover:text-white transition-colors">06 1234 5678</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-gold-gradient shrink-0" />
                                <a href="mailto:info@autoparklelystad.nl" className="hover:text-white transition-colors">info@autoparklelystad.nl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Autopark Lelystad. Alle rechten voorbehouden.</p>
                    <div className="flex gap-6">
                        <Link href="/privacyverklaring" className="hover:text-white transition-colors">Privacyverklaring</Link>
                        <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
                        <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
