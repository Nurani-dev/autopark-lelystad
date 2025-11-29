"use client";

import { motion } from "framer-motion";

export function ContactAnimation() {
    return (
        <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl mb-8">
            {/* Center Core */}
            <motion.div
                className="relative z-10 w-16 h-16 bg-anthracite-gradient rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,62,70,0.6)]"
                animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        "0 0 30px rgba(57,62,70,0.6)",
                        "0 0 60px rgba(57,62,70,0.8)",
                        "0 0 30px rgba(57,62,70,0.6)",
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-anthracite-gradient rounded-full" />
                </div>
            </motion.div>

            {/* Pulsing Rings */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-anthracite/30 rounded-full"
                    initial={{ width: "4rem", height: "4rem", opacity: 1 }}
                    animate={{
                        width: ["4rem", "24rem"],
                        height: ["4rem", "24rem"],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Connecting Lines */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#393E46" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </div>
    );
}
