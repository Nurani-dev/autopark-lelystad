"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Gauge, Fuel, Cog } from "lucide-react";
import { Car } from "@/lib/cars";

interface CarCardProps {
    car: Car;
    index?: number;
}

export function CarCard({ car, index = 0 }: CarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-gold/50 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
                    <span className="text-gold font-bold text-lg">
                        € {car.price.toLocaleString("nl-NL")}
                    </span>
                </div>

                {/* Sold Badge */}
                {car.sold && (
                    <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md px-4 py-2">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                            Verkocht
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-6">
                    <h3 className="text-white/60 text-sm uppercase tracking-wider mb-1">
                        {car.make}
                    </h3>
                    <h2 className="text-2xl font-bold text-white group-hover:text-gold transition-colors line-clamp-1">
                        {car.model}
                    </h2>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar className="w-4 h-4 text-gold/70" />
                        <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Gauge className="w-4 h-4 text-gold/70" />
                        <span>{car.mileage.toLocaleString("nl-NL")} km</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Fuel className="w-4 h-4 text-gold/70" />
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Cog className="w-4 h-4 text-gold/70" />
                        <span>{car.transmission}</span>
                    </div>
                </div>

                {/* Action */}
                <Link
                    href={`/voorraad/${car.id}`}
                    className="flex items-center justify-between w-full py-4 border-t border-white/10 group/link"
                >
                    <span className="text-white font-medium uppercase tracking-wider text-sm group-hover/link:text-gold transition-colors">
                        Bekijk details
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-gold group-hover/link:bg-gold/10 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover/link:text-gold transition-colors" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
