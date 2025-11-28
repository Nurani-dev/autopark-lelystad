import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
                            Autopark <span className="text-gold">Lelystad</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Uw partner voor exclusieve occasions en premium service. Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke aandacht.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold pl-4">Snelle Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Voorraad", "Diensten", "Over ons", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold pl-4">Diensten</h3>
                        <ul className="space-y-3">
                            {["Inkoop & Verkoop", "Onderhoud & Reparatie", "APK Keuring", "Airco Service", "Diagnose"].map((item) => (
                                <li key={item}>
                                    <Link href="/diensten" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-l-4 border-gold pl-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                <span>
                                    Autopark Lelystad<br />
                                    Straatnaam 123<br />
                                    8200 AB Lelystad
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <a href="tel:+31612345678" className="hover:text-white transition-colors">06 1234 5678</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-gold shrink-0" />
                                <a href="mailto:info@autoparklelystad.nl" className="hover:text-white transition-colors">info@autoparklelystad.nl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Autopark Lelystad. Alle rechten voorbehouden.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
