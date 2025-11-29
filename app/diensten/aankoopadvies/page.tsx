"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Car, CheckCircle2, ArrowRight, ArrowLeft, Search, FileSearch, Handshake } from "lucide-react";
import Link from "next/link";

export default function AankoopadviesPage() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-anthracite/30 transition-colors duration-300">
            {/* Top Navigation Removed - Moved to Left Column */}

            <PageHeader
                title="Aankoopadvies"
                subtitle="Zekerheid & Vertrouwen"
            />

            <section className="py-20 relative overflow-hidden">
                {/* Ambient Glow - Reduced Opacity */}
                <div className="neon-glow top-0 left-0 opacity-10" />
                <div className="neon-glow bottom-0 right-0 opacity-10" />

                <div className="container mx-auto px-4 relative z-10">

                    {/* Section 1: Intro (Split Layout) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12 items-center">
                        {/* Left: Visual & Navigation */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start justify-center lg:justify-start w-full"
                        >
                            {/* Back Button - Repositioned Above Animation */}
                            <Link href="/diensten" className="inline-flex items-center gap-2 text-gray-400 hover:text-anthracite transition-colors group mb-8">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="uppercase tracking-wider text-sm font-medium">Terug naar overzicht</span>
                            </Link>

                            {/* Animated Focus Icon - Tuned: Less Glow, Bigger Elements */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-full border border-anthracite/30"
                                />
                                <motion.div
                                    animate={{ scale: [1.2, 1.4, 1.2], opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute inset-4 rounded-full border border-anthracite/20"
                                />
                                {/* Center Circle - Much Bigger */}
                                <div className="w-2/3 h-2/3 bg-anthracite/5 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10">
                                    <Car className="w-1/2 h-1/2 text-anthracite" />
                                </div>
                                {/* Glow - Reduced */}
                                <div className="absolute inset-0 bg-anthracite/10 blur-2xl rounded-full" />
                            </div>
                        </motion.div>

                        {/* Right: Main Title & Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                                Koop Uw Droomauto <br />
                                <span className="text-gray-500">Zonder Zorgen.</span>
                            </h3>

                            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    De aanschaf van een exclusieve auto is een emotionele beslissing, maar vraagt ook om rationeel inzicht. Met ons aankoopadvies voorkomt u verrassingen en bent u verzekerd van een goede investering.
                                </p>
                                <p>
                                    Wij treden op als uw persoonlijke adviseur. Dit begint bij het definiëren van uw wensen en het zoeken naar het perfecte exemplaar, en eindigt pas wanneer de auto op uw naam staat en volledig naar wens is afgeleverd.
                                </p>
                                <p>
                                    Dankzij onze jarenlange ervaring in het premium segment en ons uitgebreide netwerk, weten wij precies waar we op moeten letten om een miskoop te voorkomen.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sub-headline moved above grid - Reduced spacing */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-anthracite-gradient text-sm md:text-base font-bold uppercase tracking-widest mb-8"
                    >
                        Persoonlijke Begeleiding
                    </motion.h2>

                    {/* Section 2: Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Search className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Zoekopdracht</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wij scannen de internationale markt naar de auto die exact aan uw specificaties voldoet.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <FileSearch className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Inspectie & Historie</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Grondige controle van de technische staat, schadeverleden en kilometerstand.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Handshake className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Onderhandeling</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wij voeren de prijsonderhandelingen voor u om de beste deal te garanderen.</p>
                        </div>
                    </div>

                    {/* Section 3: Details & CTA (Split Layout) */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-16 mb-20 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left: Heading & CTA */}
                            <div>
                                <h4 className="text-3xl font-bold text-foreground dark:text-white mb-6">Waarom Kiezen voor Aankoopadvies?</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                                    Met onze expertise aan uw zijde maakt u de juiste keuze en geniet u zorgeloos van uw nieuwe auto.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-anthracite-gradient text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform rounded-sm">
                                    <span>Vraag Advies Aan</span>
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Right: List */}
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Onafhankelijke technische keuring",
                                    "Controle van onderhoudshistorie en kilometerstand",
                                    "Onderhandeling over de beste prijs",
                                    "Advies over restwaarde en running costs",
                                    "Toegang tot 'off-market' aanbod",
                                    "Begeleiding bij import en BPM",
                                    "Geen emotionele valkuilen",
                                    "Volledige transparantie in kosten"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-center gap-4 text-foreground dark:text-white text-lg"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-anthracite shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
