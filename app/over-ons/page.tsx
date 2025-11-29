"use client";


import { motion } from "framer-motion";
import { ShieldCheck, Users, Wrench, Star } from "lucide-react";

export default function OverOnsPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-gold/30">
            <section className="pt-32 pb-4 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold-gradient text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                        Autopark Lelystad
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                        Over Ons
                    </h1>
                </motion.div>
            </section>

            <section className="py-24 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="neon-glow top-1/4 left-0 opacity-20" />
                <div className="neon-glow bottom-0 right-0 opacity-20" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                                Passie voor <span className="text-gold-gradient">Techniek</span> & <br />
                                <span className="text-gold-gradient">Kwaliteit</span>.
                            </h2>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Autopark Lelystad is al jarenlang een vertrouwd adres voor alles wat met auto’s te maken heeft. Wij zijn een moderne autogarage met een passie voor techniek, kwaliteit en service. Of het nu gaat om onderhoud, reparatie, APK-keuring of de aanschaf van een betrouwbare occasion dan bent u bij ons aan het juiste adres.
                                </p>
                                <p>
                                    Ons team van ervaren monteurs en auto-experts staan elke dag klaar om u snel en vakkundig te helpen. We combineren vakmanschap met een persoonlijke aanpak, zodat u altijd met een goed gevoel de weg op gaat. Transparantie en eerlijk advies vinden wij net zo belangrijk als technische perfectie.
                                </p>
                                <p className="font-medium text-white text-xl pt-4">
                                    Kom gerust eens langs bij Autopark Lelystad – Jouw auto, onze zorg!
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                                        <Wrench className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium">Vakkundig Onderhoud</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium">Persoonlijke Aanpak</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium">Betrouwbare Service</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium">Kwaliteit & Garantie</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Animation with Golden Glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Rotating Glow Rings */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-gold/20 border-t-gold/60 blur-sm"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 rounded-full border border-gold/10 border-b-gold/40"
                                />

                                {/* Center Visual */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-2/3 h-2/3 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-gold/20">
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 z-10" />
                                        <img
                                            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop"
                                            alt="Autopark Lelystad Workshop"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Golden Glow Overlay */}
                                        <motion.div
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-gold/20 mix-blend-overlay z-20"
                                        />
                                    </div>
                                </div>

                                {/* Floating Particles */}
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-gold rounded-full blur-[1px]"
                                        initial={{
                                            x: Math.random() * 400 - 200,
                                            y: Math.random() * 400 - 200,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: [null, Math.random() * -100],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2
                                        }}
                                        style={{
                                            left: '50%',
                                            top: '50%'
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}
