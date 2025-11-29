"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Banknote, CheckCircle2, ArrowRight, ArrowLeft, Percent, Briefcase, Key } from "lucide-react";
import Link from "next/link";

export default function FinancieringPage() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-anthracite/30 transition-colors duration-300">
            {/* Top Navigation Removed - Moved to Left Column */}

            <PageHeader
                title="Financiering"
                subtitle="Flexibel & Transparant"
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

                            {/* Animated Graph Icon - Tuned: Less Glow, Bigger Elements */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-anthracite/5 blur-3xl rounded-full" />
                                {/* Center Circle - Much Bigger */}
                                <div className="w-2/3 h-2/3 bg-anthracite/5 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 border border-anthracite/20 overflow-hidden">
                                    <Banknote className="w-1/2 h-1/2 text-anthracite relative z-20" />
                                    {/* Rising Graph Effect */}
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        animate={{ height: ["0%", "40%", "20%", "60%", "40%", "80%", "60%", "100%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute bottom-0 left-0 right-0 bg-anthracite/20 z-10"
                                    />
                                </div>
                                {/* Floating Particles */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 0, x: 0 }}
                                        animate={{ opacity: [0, 1, 0], y: -40, x: (i - 1) * 20 }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-anthracite rounded-full"
                                    />
                                ))}
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
                                Rijden in Uw Droomauto <br />
                                <span className="text-gray-500">Binnen Handbereik.</span>
                            </h3>

                            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    De financiering van een exclusieve auto vraagt om maatwerk. Of u nu ondernemer bent en zoekt naar fiscale voordelen, of als particulier wilt genieten van een vaste maandlast: bij Autopark Lelystad vinden we de oplossing die bij uw situatie past.
                                </p>
                                <p>
                                    Wij werken samen met gespecialiseerde financieringsmaatschappijen die de markt van premium auto's begrijpen. Hierdoor kunnen wij scherpe tarieven, flexibele looptijden en gunstige acceptatievoorwaarden bieden.
                                </p>
                                <p>
                                    Transparantie staat hierbij voorop. Geen kleine lettertjes, maar een helder voorstel zodat u precies weet waar u aan toe bent.
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
                        Financiële Oplossingen
                    </motion.h2>

                    {/* Section 2: Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Briefcase className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Financial Lease</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Economisch eigendom voor ondernemers. Renteaftrek en investeringsaftrek mogelijk.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Key className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Operational Lease</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Zorgeloos rijden voor een vast bedrag per maand, inclusief onderhoud en verzekering.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Percent className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Particulier</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Aantrekkelijke financieringsopties voor particulieren met boetevrij aflossen.</p>
                        </div>
                    </div>

                    {/* Section 3: Details & CTA (Split Layout) */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-16 mb-20 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left: Heading & CTA */}
                            <div>
                                <h4 className="text-3xl font-bold text-foreground dark:text-white mb-6">Onze Financieringsvoordelen</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                                    Wij helpen u graag op weg met een financiering die past bij uw wensen en mogelijkheden.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-anthracite-gradient text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform rounded-sm">
                                    <span>Vraag Offerte Aan</span>
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Right: List */}
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Financial Lease & Operational Lease",
                                    "Persoonlijk advies op maat",
                                    "Scherpe rentetarieven",
                                    "Snelle acceptatie (vaak binnen 24 uur)",
                                    "Looptijden van 12 tot 72 maanden",
                                    "Mogelijkheid tot slottermijn",
                                    "Ook voor startende ondernemers",
                                    "Direct rijden, achteraf betalen"
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
