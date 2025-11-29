"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
    Calendar,
    Gauge,
    Fuel,
    Cog,
    ArrowLeft,
    Phone,
    Mail,
    CheckCircle2,
    Share2
} from "lucide-react";
import { cars } from "@/lib/cars";
import { cn } from "@/lib/utils";

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const car = cars.find((c) => c.id === id);
    const [activeImage, setActiveImage] = useState(0);

    if (!car) {
        notFound();
    }

    return (
        <main className="bg-black min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/voorraad"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="uppercase tracking-wider text-sm font-medium">Terug naar overzicht</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Images */}
                    <div className="lg:col-span-8 space-y-4">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10"
                        >
                            <Image
                                src={car.images[activeImage]}
                                alt={`${car.make} ${car.model}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {car.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={cn(
                                        "relative aspect-[16/10] rounded-md overflow-hidden border transition-all duration-300",
                                        activeImage === index
                                            ? "border-gold opacity-100"
                                            : "border-white/10 opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <Image
                                        src={image}
                                        alt={`${car.make} ${car.model} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="mt-12 pt-12 border-t border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">Beschrijving</h2>
                            <p className="text-white/70 leading-relaxed text-lg">
                                {car.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mt-12 pt-12 border-t border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">Opties & Accessoires</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {car.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Contact */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Title & Price */}
                        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {car.make} {car.model}
                            </h1>
                            <div className="text-gold text-3xl font-bold mb-6">
                                € {car.price.toLocaleString("nl-NL")}
                            </div>

                            {/* Key Specs */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                    <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                        <Calendar className="w-3 h-3" /> Bouwjaar
                                    </div>
                                    <span className="text-white font-medium">{car.year}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                    <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                        <Gauge className="w-3 h-3" /> Kilometerstand
                                    </div>
                                    <span className="text-white font-medium">{car.mileage.toLocaleString("nl-NL")} km</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                    <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                        <Fuel className="w-3 h-3" /> Brandstof
                                    </div>
                                    <span className="text-white font-medium">{car.fuel}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                    <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                        <Cog className="w-3 h-3" /> Transmissie
                                    </div>
                                    <span className="text-white font-medium">{car.transmission}</span>
                                </div>
                                {car.power && (
                                    <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                        <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                            <Gauge className="w-3 h-3" /> Vermogen
                                        </div>
                                        <span className="text-white font-medium">{car.power}</span>
                                    </div>
                                )}
                                {car.engineSize && (
                                    <div className="flex flex-col gap-1 p-3 bg-white/5 rounded border border-white/5">
                                        <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                                            <Cog className="w-3 h-3" /> Motorinhoud
                                        </div>
                                        <span className="text-white font-medium">{car.engineSize}</span>
                                    </div>
                                )}
                            </div>

                            {/* CTAs */}
                            <div className="space-y-4">
                                <a
                                    href="tel:+31612345678"
                                    className="flex items-center justify-center gap-2 w-full bg-gold text-black font-bold py-4 rounded hover:bg-white transition-colors uppercase tracking-wider text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    Bel direct
                                </a>
                                <a
                                    href="mailto:info@autoparklelystad.nl"
                                    className="flex items-center justify-center gap-2 w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded hover:bg-white/10 transition-colors uppercase tracking-wider text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    Stuur bericht
                                </a>
                            </div>
                        </div>

                        {/* Share */}
                        <button className="flex items-center justify-center gap-2 w-full text-white/40 hover:text-gold transition-colors text-sm uppercase tracking-wider">
                            <Share2 className="w-4 h-4" />
                            Deel deze auto
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
