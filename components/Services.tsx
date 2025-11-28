"use client";

import { motion } from "framer-motion";
import { Globe, Car, ClipboardCheck, Banknote } from "lucide-react";

const services = [
    {
        title: "Import & Export",
        description: "Wij regelen alle benodigde export documenten en helpen bij de import van voertuigen in het buitenland.",
        icon: Globe,
    },
    {
        title: "Taxatie & Schade",
        description: "Officiele rapporten voor schade, verkoop of verzekering. Belangrijke waardebepaling van jouw auto.",
        icon: ClipboardCheck,
    },
    {
        title: "Aankoopadvies",
        description: "Wij denken met je mee! Persoonlijk advies bij het kopen van een betrouwbare occasion.",
        icon: Car,
    },
    {
        title: "Financiering",
        description: "Droomauto gevonden? Bij ons kun je rekenen op flexibele financieringsopties op maat.",
        icon: Banknote,
    },
];

export function Services() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Onze Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Waarom Autopark Lelystad?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-black border border-gold/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-6 h-6 text-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 uppercase">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
