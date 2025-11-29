"use client";


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Import & Export",
        description: "Volledige begeleiding bij het importeren en exporteren van exclusieve voertuigen. Wij regelen alle documentatie en transport.",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
        viewBox: "0 0 24 24",
        href: "/diensten/import-export",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Taxatie & Schade",
        description: "Professionele taxatierapporten en vakkundig schadeherstel. Uw auto in topconditie, met behoud van waarde.",
        d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
        viewBox: "0 0 24 24",
        href: "/diensten/taxatie-schade",
        image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Aankoopadvies",
        description: "Deskundig advies bij de aanschaf van uw droomauto. Wij inspecteren, onderhandelen en adviseren voor de beste deal.",
        d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
        viewBox: "0 0 24 24",
        href: "/diensten/aankoopadvies",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Financiering",
        description: "Flexibele financieringsoplossingen op maat. Realiseer uw droom met onze aantrekkelijke lease- en financieringsopties.",
        d: "M4 6h16v12H4zm2 2v4h12V8H6zm2 5h8v2H8v-2zm-2-7h12v2H6V6z",
        viewBox: "0 0 24 24",
        href: "/diensten/financiering",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop"
    },
];

export default function DienstenPage() {
    return (
        <main className="bg-background min-h-screen transition-colors duration-300">
            <section className="pt-32 pb-4 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-anthracite-gradient text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                        Exclusieve Service op Maat
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase">
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
                                    className="relative h-[400px] overflow-hidden rounded-sm border border-gray-200 dark:border-white/10 group-hover:border-anthracite-gradient transition-all duration-500"
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
                                        {/* Additional gradient for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className="mb-auto">
                                            <div className="w-16 h-16 bg-black/50 backdrop-blur-sm border border-anthracite/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-anthracite-gradient group-hover:bg-anthracite/10">
                                                <SilverIcon
                                                    d={service.d}
                                                    viewBox={service.viewBox}
                                                    className="w-8 h-8 bg-anthracite-gradient group-hover:bg-none group-hover:bg-white transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-foreground dark:text-white mb-4 uppercase tracking-tight group-hover:text-anthracite-gradient transition-all">
                                            {service.title}
                                        </h3>
                                        <p className="text-foreground dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-md group-hover:text-foreground dark:group-hover:text-white transition-colors">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-3 text-anthracite text-sm font-bold uppercase tracking-wider group-hover:gap-5 transition-all">
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

function SilverIcon({ d, viewBox, className = "w-6 h-6" }: { d: string; viewBox: string; className?: string }) {
    const svgData = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}'><path d='${d}' fill='black'/></svg>`;

    return (
        <div
            className={className}
            style={{
                maskImage: `url("${svgData}")`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url("${svgData}")`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
            }}
        />
    );
}
