"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section className="py-24 bg-white transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/3] bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden relative z-10 shadow-xl">
                            <div
                                className="w-full h-full bg-[url('https://images.unsplash.com/photo-1562141961-b5d1855d7f30?q=80&w=2568&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border-8 border-gray-100 dark:border-zinc-900 z-20 hidden md:block shadow-xl">
                            <div
                                className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486262715619-01b8c22976f5?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-anthracite-gradient/50 z-0" />
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b-2 border-r-2 border-anthracite-gradient/50 z-0" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-anthracite-gradient text-sm font-bold uppercase tracking-widest mb-2">Over Autopark Lelystad</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-6">
                            Passie voor <span className="text-anthracite-gradient">Exclusiviteit</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Autopark Lelystad is al jarenlang een vertrouwd adres voor alles wat met auto’s te maken heeft. Wij zijn een moderne autogarage met een passie voor techniek, kwaliteit en service.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Ervaren team van specialisten",
                                "Persoonlijke aanpak en advies",
                                "Transparantie en eerlijkheid",
                                "Focus op kwaliteit en service"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-anthracite" />
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/over-ons"
                            className="inline-flex items-center gap-2 text-black font-bold uppercase tracking-wide hover:text-anthracite-gradient transition-colors group"
                        >
                            Lees ons verhaal <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-anthracite group-hover:text-anthracite" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
