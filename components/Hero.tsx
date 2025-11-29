"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";


export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-24 lg:py-0">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Videos */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="relative order-1 lg:order-1 lg:col-span-7"
                    >
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {/* Video 1 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl shadow-black/5 group">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                                >
                                    <source src="/tiktok video.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            {/* Video 2 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl shadow-black/5 group">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                                >
                                    <source src="/tiktok video 2.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>


                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="text-center lg:text-left order-2 lg:order-2 lg:col-span-5"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                    >
                        <h2 className="inline-block bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-anthracite-gradient text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
                            Exclusieve Occasions & Service
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tighter uppercase leading-[0.9]">
                            Autopark <br />
                            <span className="text-anthracite-gradient">Lelystad</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
                            Jouw auto, onze zorg. Wij bieden een selectie van premium voertuigen en hoogwaardige service op maat. Ervaar kwaliteit en exclusiviteit.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <Link
                                href="/voorraad"
                                className="group relative px-8 py-4 bg-anthracite-gradient text-black font-bold uppercase tracking-wider overflow-hidden rounded-full min-w-[200px] text-center shadow-lg shadow-black/5"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Bekijk Voorraad <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                            </Link>

                            <Link
                                href="/diensten"
                                className="px-8 py-4 border border-black/10 bg-black/5 backdrop-blur-sm text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-full min-w-[200px] text-center"
                            >
                                Onze Diensten
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <SilverStrokeIcon d="M6 9l6 6 6-6" viewBox="0 0 24 24" className="w-12 h-12" />
            </motion.div>
        </section>
    );
}

function SilverStrokeIcon({ d, viewBox, className = "w-6 h-6" }: { d: string; viewBox: string; className?: string }) {
    const svgData = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}'><path d='${d}' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>`;

    return (
        <div
            className={`bg-anthracite-gradient ${className}`}
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
