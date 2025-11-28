"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    {subtitle && (
                        <h2 className="text-gold text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4">
                            {subtitle}
                        </h2>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}
