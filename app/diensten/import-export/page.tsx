"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight, ArrowLeft, Plane, Ship, FileCheck } from "lucide-react";
import Link from "next/link";

export default function ImportExportPage() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-anthracite/30 transition-colors duration-300">
            {/* Top Navigation Removed - Moved to Left Column */}

            <PageHeader
                title="Import & Export"
                subtitle="Grenzeloze Service"
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

                            {/* Animated Globe Icon - Tuned: Less Glow, Bigger Elements */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-anthracite/20 border-t-anthracite/80"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-anthracite/10 border-b-anthracite/60"
                                />
                                {/* Center Circle - Much Bigger */}
                                <div className="w-2/3 h-2/3 bg-anthracite/5 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10">
                                    <Globe className="w-1/2 h-1/2 text-anthracite" />
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
                                Uw Droomauto, <br />
                                <span className="text-gray-500">Waar Dan Ook.</span>
                            </h3>

                            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                <p>
                                    De zoektocht naar een exclusieve auto mag zich niet beperken tot landsgrenzen. Vaak bevinden de meest unieke exemplaren—met de juiste specificaties en historie—zich in het buitenland. Autopark Lelystad is uw partner in dit internationale traject.
                                </p>
                                <p>
                                    Wij verzorgen het volledige import- of exportproces. Van de eerste fysieke inspectie op locatie in Duitsland, België of verder, tot het beveiligde transport en de administratieve afhandeling bij de RDW en Douane.
                                </p>
                                <p>
                                    Ook voor export buiten de EU bieden wij volledige ontzorging, inclusief verscheping en exportdocumentatie (EX-A, EUR.1).
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sub-headline moved above grid - Reduced spacing */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-silver-sheen text-sm md:text-base font-bold uppercase tracking-widest mb-8"
                    >
                        Wereldwijde Dekking
                    </motion.h2>

                    {/* Section 2: Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Plane className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Sourcing & Inspectie</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Wij vinden de auto en controleren deze grondig op locatie voordat u tot aankoop overgaat.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <FileCheck className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Douane & BPM</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Fiscale optimalisatie en correcte aangifte van BPM en invoerrechten.</p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-anthracite/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                            <Ship className="w-10 h-10 text-anthracite mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-foreground dark:text-white mb-3">Logistiek</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Verzekerd transport via de weg, lucht of zee naar elke bestemming.</p>
                        </div>
                    </div>

                    {/* Section 3: Details & CTA (Split Layout) */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-16 mb-20 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left: Heading & CTA */}
                            <div>
                                <h4 className="text-3xl font-bold text-foreground dark:text-white mb-6">Onze Import & Export Services</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                                    Wij nemen alle zorgen uit handen zodat u zich kunt richten op wat echt telt: genieten van uw nieuwe aanwinst.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-silver-sheen-dark text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform rounded-sm">
                                    <span>Start Uw Import/Export</span>
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Right: List */}
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Zoekopdracht op maat in heel Europa",
                                    "Fysieke aankoopkeuring op locatie",
                                    "Onderhandeling en aankoopbegeleiding",
                                    "Verzekerd transport naar Nederland",
                                    "RDW-keuring en kentekenregistratie",
                                    "BPM-aangifte en fiscale afwikkeling",
                                    "Inbouw van klasse-alarm en accessoires",
                                    "Exportdocumentatie voor verkoop buitenland"
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
