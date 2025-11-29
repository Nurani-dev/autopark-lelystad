"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ClipboardCheck, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Wrench, FileText } from "lucide-react";
import Link from "next/link";

export default function TaxatieSchadePage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-gold/30">
            {/* Top Navigation Removed - Moved to Left Column */}

            <PageHeader
                title="Taxatie & Schade"
                subtitle="Waarde & Herstel"
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
                            <Link href="/diensten" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors group mb-8">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="uppercase tracking-wider text-sm font-medium">Terug naar overzicht</span>
                            </Link>

                            {/* Animated Shield Icon - Tuned: Less Glow, Bigger Elements */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gold/5 rounded-full blur-2xl"
                                />
                                {/* Center Circle - Much Bigger */}
                                <div className="w-2/3 h-2/3 bg-gold/5 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 border border-gold/20 overflow-hidden">
                                    <ClipboardCheck className="w-1/2 h-1/2 text-gold relative z-20" />
                                    {/* Scanning Effect */}
                                    <motion.div
                                        animate={{ top: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                                        className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent z-10"
                                    />
                                </div>
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
                            <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                                Waardebehoud van <br />
                                <span className="text-gray-500">Uw Investering.</span>
                            </h3>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Een exclusieve auto is meer dan een vervoersmiddel; het is een waardevol bezit dat de juiste aandacht verdient. Of het nu gaat om een officiële waardebepaling voor de verzekering of vakkundig herstel na een incident: kwaliteit staat voorop.
                                </p>
                                <p>
                                    Wij werken uitsluitend samen met gecertificeerde schadeherstellers die gespecialiseerd zijn in premium merken zoals Porsche, Ferrari, Bentley en Mercedes-AMG. Hierdoor garanderen wij herstel volgens de strengste fabrieksspecificaties.
                                </p>
                                <p>
                                    Daarnaast verzorgen wij erkende taxatierapporten (WEV/BPM) die essentieel zijn voor een correcte verzekeringsdekking of fiscale afwikkeling.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sub-headline moved above grid - Reduced spacing */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-gradient text-sm md:text-base font-bold uppercase tracking-widest mb-8"
                    >
                        Expertise & Kwaliteit
                    </motion.h2>

                    {/* Section 2: Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/30 transition-colors group">
                            <FileText className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-3">Taxatierapporten</h4>
                            <p className="text-gray-400 leading-relaxed">Erkende rapporten voor verzekering (artikel 7:960 BW) en fiscale doeleinden.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-3">Schadeherstel</h4>
                            <p className="text-gray-400 leading-relaxed">Herstel met 100% originele onderdelen en behoud van fabrieksgarantie.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/30 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-3">Lakverzegeling</h4>
                            <p className="text-gray-400 leading-relaxed">Hoogwaardige glass coating en PPF (Paint Protection Film) applicaties.</p>
                        </div>
                    </div>

                    {/* Section 3: Details & CTA (Split Layout) */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-16 mb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left: Heading & CTA */}
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-6">Onze Diensten</h4>
                                <p className="text-gray-400 mb-8 max-w-md">
                                    Van kleine reparaties tot complete restauraties: wij zorgen ervoor dat uw auto in topconditie blijft.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-gold-gradient text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform rounded-sm">
                                    <span>Maak een Afspraak</span>
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Right: List */}
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Erkende taxatierapporten (WEV/BPM)",
                                    "Schadeherstel met fabrieksgarantie",
                                    "Gebruik van 100% originele onderdelen",
                                    "Complete afhandeling met uw verzekeraar",
                                    "Spotrepair en uitdeuken zonder spuiten",
                                    "Velgenherstel en CNC-draaien",
                                    "Interieurreiniging en lederherstel",
                                    "Haal- en brengservice met gesloten transport"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-center gap-4 text-white text-lg"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
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
