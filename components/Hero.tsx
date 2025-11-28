"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSlideshow } from "./HeroSlideshow";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            {/* Background Slideshow */}
            <HeroSlideshow />

            {/* Content */}
            <motion.div
                className="relative z-20 container mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <h2 className="text-gold-gradient text-lg md:text-xl font-medium uppercase tracking-[0.2em] mb-4">
                    Exclusieve Occasions & Service
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter uppercase">
                    Autopark <span className="text-gold-gradient">Lelystad</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Jouw auto, onze zorg. Wij bieden een selectie van premium voertuigen en hoogwaardige service op maat.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/voorraad"
                        className="group relative px-8 py-4 bg-gold-gradient text-black font-bold uppercase tracking-wider overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Bekijk Voorraad <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </Link>

                    <Link
                        href="/diensten"
                        className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Onze Diensten
                    </Link>
                </div>
            </motion.div>


            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-gold-gradient rounded-full" />
                </div>
            </motion.div>
        </section >
    );
}
