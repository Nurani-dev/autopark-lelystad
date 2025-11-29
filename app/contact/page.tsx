"use client";

import { motion } from "framer-motion";
import { ContactAnimation } from "@/components/ContactAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen transition-colors duration-300">
            <section className="pt-32 pb-4 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-anthracite-gradient text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                        Neem contact op
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">
                        Contact
                    </h1>
                </motion.div>
            </section>

            <section className="py-24 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="neon-glow top-0 right-0 opacity-20" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Info & Animation */}
                        <div className="space-y-12">
                            <ContactAnimation />

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-anthracite/30 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-anthracite/20 group-hover:border-anthracite/50 transition-colors">
                                            <MapPin className="w-6 h-6 text-anthracite" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground uppercase mb-2">Bezoek ons</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Autopark Lelystad<br />
                                                Vaartweg 45E<br />
                                                8243 PD Lelystad
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-anthracite/30 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-anthracite/20 group-hover:border-anthracite/50 transition-colors">
                                            <Phone className="w-6 h-6 text-anthracite" />
                                        </div>
                                        <div className="space-y-4 w-full">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground uppercase mb-2">Contactgegevens</h3>
                                                <div className="space-y-2">
                                                    <a href="tel:+31618881108" className="block text-gray-600 dark:text-gray-400 hover:text-anthracite transition-colors">
                                                        +316 18 88 1108
                                                    </a>
                                                    <a href="mailto:info@autoparklelystad.nl" className="block text-gray-600 dark:text-gray-400 hover:text-anthracite transition-colors">
                                                        info@autoparklelystad.nl
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-anthracite/30 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-anthracite/20 group-hover:border-anthracite/50 transition-colors">
                                            <Clock className="w-6 h-6 text-anthracite" />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-xl font-bold text-foreground uppercase mb-2">Openingstijden</h3>
                                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                                <li className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                                                    <span>Maandag t/m vrijdag</span>
                                                    <span className="text-foreground">09:00 – 18:00</span>
                                                </li>
                                                <li className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                                                    <span>Zaterdag</span>
                                                    <span className="text-foreground">10:00 – 17:00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Google Maps */}
                        <div className="h-full min-h-[500px] bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 relative group">
                            <div className="absolute inset-0 border-2 border-anthracite/0 group-hover:border-anthracite/20 transition-all duration-500 rounded-2xl z-20 pointer-events-none" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.789123456789!2d5.495!3d52.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64f0000000000%3A0x0000000000000000!2sVaartweg%2045E%2C%208243%20PD%20Lelystad!5e0!3m2!1sen!2snl!4v1600000000000!5m2!1sen!2snl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full dark:invert-[0.9] dark:grayscale transition-all duration-300"
                                title="Autopark Lelystad Locatie"
                            />

                            {/* Map Overlay for Style */}
                            <div className="absolute inset-0 bg-anthracite/5 pointer-events-none z-10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
