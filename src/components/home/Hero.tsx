"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[url('/watch-hero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            {/* Extremely Subtle Leather Texture as Hero Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/leather-bg.jpg"
                    alt="Leather Texture"
                    fill
                    quality={100}
                    priority
                    className="object-cover opacity-15 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-[#050505]/40" />
            </div>

            <div className="container relative z-10 px-6 mt-4 md:mt-8 mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 60 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent mb-8"
                    />

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-tight">
                        ELEVATE YOUR <br className="hidden md:block" />
                        <span className="text-primary italic font-light">TIME</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
                    >
                        Curated luxury timepieces for the modern collector. <br className="hidden sm:block" />
                        Authenticity guaranteed, presentation elevated.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Button asChild size="lg" className="bg-primary text-[#050505] hover:bg-white rounded-none px-10 py-7 text-xs uppercase tracking-[0.2em] transition-all duration-500 font-medium">
                            <Link href="/collection">Explore Collection</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-none px-10 py-7 text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-500 font-medium bg-white/5">
                            <Link href="/about">Our Philosophy</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
