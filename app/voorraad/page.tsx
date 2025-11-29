"use client";

import { motion } from "framer-motion";
import { cars } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";

export default function VoorraadPage() {
    return (
        <main className="bg-black min-h-screen">
            <section className="pt-32 pb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="container mx-auto px-4"
                >
                    <h2 className="text-gold-gradient text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                        Exclusieve Occasions
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-8">
                        Onze Voorraad
                    </h1>
                </motion.div>
            </section>

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cars.map((car, index) => (
                            <CarCard key={car.id} car={car} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
