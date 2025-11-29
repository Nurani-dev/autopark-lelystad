"use client";

import { motion } from "framer-motion";

export function TradeInAnimation() {
    return (
        <div className="w-full h-48 relative flex items-center justify-center overflow-hidden">
            {/* Car Silhouette (SVG) */}
            <motion.svg
                width="200"
                height="100"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <path
                    d="M10 60 L30 40 L60 40 L80 20 L140 20 L170 40 L190 45 L190 70 L170 70 M30 70 L10 70 L10 60"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                />
                <motion.path
                    d="M10 60 L30 40 L60 40 L80 20 L140 20 L170 40 L190 45 L190 70 L170 70 M30 70 L10 70 L10 60"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
                {/* Wheels */}
                <circle cx="45" cy="70" r="12" stroke="#D4AF37" strokeWidth="2" className="opacity-50" />
                <circle cx="155" cy="70" r="12" stroke="#D4AF37" strokeWidth="2" className="opacity-50" />
                <motion.circle
                    cx="45" cy="70" r="12"
                    stroke="#D4AF37" strokeWidth="2"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                />
                <motion.circle
                    cx="155" cy="70" r="12"
                    stroke="#D4AF37" strokeWidth="2"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                />
            </motion.svg>

            {/* Scanning Beam */}
            <motion.div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20"
                initial={{ left: "20%", opacity: 0 }}
                animate={{
                    left: ["20%", "80%", "20%"],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity
                }}
                style={{ filter: "drop-shadow(0 0 8px #D4AF37)" }}
            />

            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    perspective: "500px",
                    transform: "rotateX(60deg) scale(2)"
                }}
            />
        </div>
    );
}
