"use client";

import { motion } from "framer-motion";
import { Globe, Car, ClipboardCheck, Banknote } from "lucide-react";

const services = [
    {
        title: "Import & Export",
        description: "Wij regelen alle benodigde export documenten en helpen bij de import van voertuigen in het buitenland.",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
        viewBox: "0 0 24 24"
    },
    {
        title: "Taxatie & Schade",
        description: "Officiele rapporten voor schade, verkoop of verzekering. Belangrijke waardebepaling van jouw auto.",
        d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
        viewBox: "0 0 24 24"
    },
    {
        title: "Aankoopadvies",
        description: "Wij denken met je mee! Persoonlijk advies bij het kopen van een betrouwbare occasion.",
        d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
        viewBox: "0 0 24 24"
    },
    {
        title: "Financiering",
        description: "Droomauto gevonden? Bij ons kun je rekenen op flexibele financieringsopties op maat.",
        d: "M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z",
        viewBox: "0 0 24 24"
    },
];

export function Services() {
    return (
        <section className="py-24 bg-background relative transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-silver-sheen text-sm font-bold uppercase tracking-widest mb-2">Onze Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">Waarom Autopark Lelystad?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-8 border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:border-silver-sheen hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 relative shadow-sm rounded-3xl"
                        >
                            <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-silver-sheen">
                                <SilverIcon d={service.d} viewBox={service.viewBox} className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-4 uppercase">{service.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SilverIcon({ d, viewBox, className = "w-6 h-6" }: { d: string; viewBox: string; className?: string }) {
    const svgData = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}'><path d='${d}' fill='black'/></svg>`;

    return (
        <div
            className={`bg-silver-sheen-dark ${className}`}
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
