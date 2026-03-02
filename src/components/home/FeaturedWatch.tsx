"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedWatch() {
    return (
        <section className="py-24 px-6 bg-[#0c0c0c] relative overflow-hidden border-t border-white/10">
            {/* Extremely Subtle Leather Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/leather-bg.jpg"
                    alt="Leather Texture"
                    fill
                    quality={100}
                    className="object-cover opacity-10 mix-blend-overlay"
                />
            </div>

            {/* Background Watermark to fill empty space */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-bold text-white/[0.02] whitespace-nowrap pointer-events-none tracking-widest uppercase z-0">
                Masterpiece
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <p className="text-primary tracking-[0.3em] uppercase text-xs font-semibold">Highlight of the Month</p>
                        <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                            The Pinnacle of <br />
                            <span className="italic font-light text-white/80">Craftsmanship</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed font-light max-w-lg">
                            Experience the epitome of haute horlogerie with our hand-selected piece of the month. Featuring impeccable mechanics, peerless design, and a heritage that stands the test of time, this piece balances sporty elegance with unmatched luxury.
                        </p>
                        <div className="pt-8">
                            <Link href="/collection" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-white hover:text-primary transition-colors pb-3 border-b border-white/20 hover:border-primary font-medium">
                                Explore The Masterpiece <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="flex-1 w-full relative flex justify-center lg:justify-end"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                        <div className="relative aspect-[4/5] w-full max-w-md">
                            <Image src="/watches/watch-2.jpg" alt="Featured Timepiece" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 border border-white/10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
