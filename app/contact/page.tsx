"use client";

import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact"
                subtitle="Neem contact op"
                image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop"
            />

            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6">Bezoek ons</h3>
                                <div className="flex items-start gap-4 text-gray-400">
                                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <p className="text-lg">
                                        Autopark Lelystad<br />
                                        Straatnaam 123<br />
                                        8200 AB Lelystad
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6">Contactgegevens</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Phone className="w-6 h-6 text-gold shrink-0" />
                                        <a href="tel:+31612345678" className="text-lg hover:text-white transition-colors">06 1234 5678</a>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Mail className="w-6 h-6 text-gold shrink-0" />
                                        <a href="mailto:info@autoparklelystad.nl" className="text-lg hover:text-white transition-colors">info@autoparklelystad.nl</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6">Openingstijden</h3>
                                <div className="flex items-start gap-4 text-gray-400">
                                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <ul className="space-y-2 text-lg">
                                        <li className="flex justify-between w-48"><span>Ma - Vr:</span> <span>09:00 - 18:00</span></li>
                                        <li className="flex justify-between w-48"><span>Zaterdag:</span> <span>10:00 - 17:00</span></li>
                                        <li className="flex justify-between w-48"><span>Zondag:</span> <span>Gesloten</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-zinc-900 p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white uppercase mb-6">Stuur een bericht</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase">Naam</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                                            placeholder="Uw naam"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-400 uppercase">Telefoon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                                            placeholder="Uw telefoonnummer"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Uw e-mailadres"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase">Bericht</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Waarmee kunnen we u helpen?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gold text-black font-bold uppercase py-4 hover:bg-gold-light transition-colors"
                                >
                                    Verstuur Bericht
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
