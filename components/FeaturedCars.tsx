"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Fuel, Gauge, Calendar, Zap } from "lucide-react";

const cars = [
    {
        id: 1,
        title: "Porsche Macan 2.0",
        price: "€ 47.950,-",
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop",
        specs: { year: "2019", km: "110.904", fuel: "Benzine", power: "250 pk" },
        sold: true,
    },
    {
        id: 2,
        title: "Audi A6 Avant 55 TFSI e",
        price: "€ 42.950,-",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2670&auto=format&fit=crop",
        specs: { year: "2021", km: "83.920", fuel: "Hybride", power: "265 pk" },
        sold: false,
    },
    {
        id: 3,
        title: "Mercedes-Benz CLA 250",
        price: "€ 27.999,-",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop",
        specs: { year: "2020", km: "94.632", fuel: "Benzine", power: "224 pk" },
        sold: false,
    },
];

export function FeaturedCars() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-gold-gradient text-sm font-bold uppercase tracking-widest mb-2">Onze Collectie</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Nieuw Binnen</h3>
                    </div>
                    <Link
                        href="/voorraad"
                        className="group flex items-center gap-2 text-white font-bold uppercase tracking-wide hover:text-gold-gradient transition-colors"
                    >
                        Bekijk alle auto's <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-gold-gradient" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-zinc-900 border border-white/5 hover:border-gold-gradient transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${car.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                {car.sold && (
                                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                        Verkocht
                                    </div>
                                )}

                                <div className="absolute bottom-4 left-4">
                                    <p className="text-gold-gradient font-bold text-xl">{car.price}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-4 truncate">{car.title}</h4>

                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-gold-gradient/70" />
                                        <span>{car.specs.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Gauge className="w-4 h-4 text-gold-gradient/70" />
                                        <span>{car.specs.km} km</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Fuel className="w-4 h-4 text-gold-gradient/70" />
                                        <span>{car.specs.fuel}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-gold-gradient/70" />
                                        <span>{car.specs.power}</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                                    <Link href={`/voorraad/${car.id}`} className="text-white text-sm font-bold uppercase tracking-wide hover:text-gold-gradient transition-colors">
                                        Bekijk Details
                                    </Link>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-gradient group-hover:bg-gold-gradient group-hover:text-black transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
