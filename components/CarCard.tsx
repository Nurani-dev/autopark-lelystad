"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Gauge, Fuel, Cog } from "lucide-react";
import { Car } from "@/lib/cars";

interface CarCardProps {
    car: Car;
    index?: number;
    priority?: boolean;
}

export function CarCard({ car, index = 0, priority = false }: CarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden hover:border-anthracite/50 hover:shadow-lg transition-all duration-300 shadow-sm rounded-3xl"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={priority}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                    <span className="text-white font-bold text-lg">
                        € {car.price.toLocaleString("nl-NL")}
                    </span>
                </div>

                {/* Sold Badge */}
                {car.sold && (
                    <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md px-4 py-2 rounded-full">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                            Verkocht
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-6">
                    <h3 className="text-foreground dark:text-white/60 text-sm uppercase tracking-wider mb-1">
                        {car.make}
                    </h3>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-anthracite-gradient transition-colors line-clamp-1">
                        {car.model}
                    </h2>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Calendar className="w-4 h-4 text-anthracite/70" />
                        <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Gauge className="w-4 h-4 text-anthracite/70" />
                        <span>{car.mileage.toLocaleString("nl-NL")} km</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Fuel className="w-4 h-4 text-anthracite/70" />
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Cog className="w-4 h-4 text-anthracite/70" />
                        <span>{car.transmission}</span>
                    </div>
                </div>

                {/* Action */}
                <Link
                    href={`/voorraad/${car.id}`}
                    className="flex items-center justify-between w-full py-4 border-t border-black/10 dark:border-white/10 group/link"
                >
                    <span className="text-foreground font-medium uppercase tracking-wider text-sm group-hover/link:text-anthracite-gradient transition-colors">
                        Bekijk details
                    </span>
                    <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover/link:border-anthracite group-hover/link:bg-anthracite/10 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-foreground group-hover/link:text-anthracite transition-colors" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
