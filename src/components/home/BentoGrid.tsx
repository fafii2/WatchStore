"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const bentoItems = [
    {
        title: "Rolex Daytona",
        subtitle: "Oysterflex 116515LN",
        image: "/watches/watch-6.jpg",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Patek Philippe Nautilus",
        subtitle: "5711/1A",
        image: "/watches/watch-1.jpg",
        colSpan: "col-span-1",
    },
    {
        title: "Audemars Piguet",
        subtitle: "Royal Oak Offshore",
        image: "/watches/watch-5.jpg",
        colSpan: "col-span-1",
    },
    {
        title: "Vacheron Constantin",
        subtitle: "Overseas",
        image: "/watches/watch-2.jpg",
        colSpan: "col-span-1 md:col-span-2",
    },
];

export function BentoGrid() {
    return (
        <section className="py-24 px-6 relative z-10 bg-[#050505] border-t border-white/10 overflow-hidden">
            {/* Subtle Leather Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/leather-bg.jpg"
                    alt="Leather Texture"
                    fill
                    quality={100}
                    className="object-cover opacity-20 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-10">
                    <div>
                        <h2 className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-semibold">Curated Assembly</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white tracking-wide">Featured Collection</h3>
                    </div>
                    <Link
                        href="/collection"
                        className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors uppercase tracking-[0.15em] text-xs font-medium mt-8 md:mt-0"
                    >
                        View All Inventory <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 auto-rows-[400px] md:auto-rows-[550px]"
                >
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={item.colSpan}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                            }}
                        >
                            <Link href="/collection"
                                className="relative overflow-hidden group bg-black cursor-pointer w-full h-full block"
                            >
                                <div className="absolute inset-0 bg-[#0A0A0A]">
                                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[3000ms] ease-out" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 transition-opacity duration-700 opacity-80 group-hover:opacity-100">
                                    <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-primary transition-colors duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 tracking-widest text-sm uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Corner Bracket Hover Effect */}
                                <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 transition-all duration-700 scale-[0.9] group-hover:scale-100 pointer-events-none mix-blend-overlay" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
