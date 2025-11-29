"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://autoparklelystad.nl/wp-content/uploads/2025/10/Untitled-design.png-scaled.jpg",
    "https://autoparklelystad.nl/wp-content/uploads/2025/10/Untitled-design-4.png.png",
    "https://autoparklelystad.nl/wp-content/uploads/2025/10/Untitled-design.png.png"
];

export function HeroSlideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1 },
                        scale: { duration: 5, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${images[index]}')` }}
                    />
                </motion.div>
            </AnimatePresence>
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />
            <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
        </div>
    );
}
