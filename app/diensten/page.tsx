"use client";


import { motion } from "framer-motion";
import { Globe, Car, ClipboardCheck, Banknote, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Import & Export",
        description: "Volledige begeleiding bij het importeren en exporteren van exclusieve voertuigen. Wij regelen alle documentatie en transport.",
        icon: Globe,
        href: "/diensten/import-export",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Taxatie & Schade",
        description: "Professionele taxatierapporten en vakkundig schadeherstel. Uw auto in topconditie, met behoud van waarde.",
        icon: ClipboardCheck,
        href: "/diensten/taxatie-schade",
        image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Aankoopadvies",
        description: "Deskundig advies bij de aanschaf van uw droomauto. Wij inspecteren, onderhandelen en adviseren voor de beste deal.",
        icon: Car,
        href: "/diensten/aankoopadvies",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Financiering",
        description: "Flexibele financieringsoplossingen op maat. Realiseer uw droom met onze aantrekkelijke lease- en financieringsopties.",
        icon: Banknote,
        href: "/diensten/financiering",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop"
    },
];

export default function DienstenPage() {
    return (
        <main className="bg-black min-h-screen">
            <section className="pt-32 pb-4 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold-gradient text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                        Exclusieve Service op Maat
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                        Onze Diensten
                    </h1>
                </motion.div>
            </section>

            <section className="pt-12 pb-24 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="neon-glow top-1/4 left-1/4 opacity-20" />
                <div className="neon-glow bottom-1/4 right-1/4 opacity-20" />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <Link key={service.title} href={service.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative h-[400px] overflow-hidden rounded-sm border border-white/10 group-hover:border-gold-gradient transition-all duration-500"
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className="mb-auto">
                                            <div className="w-16 h-16 bg-black/50 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-gold-gradient group-hover:bg-gold/10">
                                                <service.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-gold-gradient transition-all">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md group-hover:text-gray-300 transition-colors">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-3 text-gold text-sm font-bold uppercase tracking-wider group-hover:gap-5 transition-all">
                                            <span>Lees Meer</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
