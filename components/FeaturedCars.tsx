"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cars } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";

export function FeaturedCars() {
    // Show only the first 3 cars
    const featuredCars = cars.slice(0, 3);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-gradient text-sm font-bold uppercase tracking-[0.2em] mb-4"
                        >
                            Exclusief Aanbod
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Recent Toegevoegd
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/voorraad"
                            className="group flex items-center gap-3 text-white hover:text-gold transition-colors"
                        >
                            <span className="uppercase tracking-wider text-sm font-medium">Bekijk alle auto's</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCars.map((car, index) => (
                        <CarCard key={car.id} car={car} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
