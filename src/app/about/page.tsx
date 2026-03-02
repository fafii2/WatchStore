"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-[#050505] overflow-hidden">
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-40 pb-32 px-6">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <p className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-6">Our Philosophy</p>
                            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                                Time is the <span className="italic font-light text-white/80">Ultimate Luxury.</span>
                            </h1>
                            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                                We exist to help you measure it beautifully. A sanctuary for discerning collectors who understand that true value transcends mechanics.
                            </p>

                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 100 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="w-[1px] bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-16"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* The Origin Section */}
                <section className="py-32 px-6 bg-[#0c0c0c]/90 border-t border-white/5 backdrop-blur-sm relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="flex-1 space-y-8"
                            >
                                <h2 className="text-4xl md:text-5xl font-serif text-white">The Origin</h2>
                                <div className="space-y-6 text-white/60 leading-relaxed font-light">
                                    <p>
                                        Founded on an unyielding passion for horology, JD&apos;s Time &amp; Ride began as a private collection for discerning enthusiasts. We recognized that traditional social media platforms failed to convey the true gravity and craftsmanship of fine timepieces.
                                    </p>
                                    <p>
                                        This digital showroom was built to bridge that gap—providing a platform worthy of the art we represent. We don&apos;t just list watches; we curate investments and preserve horological history.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="flex-1 w-full relative aspect-[3/4] max-w-md mx-auto"
                            >
                                <Image src="/watches/watch-5.jpg" alt="Watchmaking Craftsmanship" fill className="object-cover" />
                                <div className="absolute inset-0 border border-white/10" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0c0c] via-transparent to-transparent pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The Standard Section */}
                <section className="py-32 px-6 bg-[#050505]/90 border-t border-white/5 backdrop-blur-sm relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="flex-1 space-y-8"
                            >
                                <h2 className="text-4xl md:text-5xl font-serif text-white">The Standard</h2>
                                <div className="space-y-6 text-white/60 leading-relaxed font-light">
                                    <p>
                                        Every timepiece in our collection undergoes a rigorous multi-point inspection by certified master horologists. We do not compromise on authenticity, mechanical integrity, or aesthetic preservation.
                                    </p>
                                    <p>
                                        When you acquire a watch from JD, you are acquiring a guaranteed legacy. We believe that trust is the ultimate currency in the world of luxury, and we have built our reputation on transparency and excellence.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="flex-1 w-full relative aspect-[3/4] max-w-md mx-auto"
                            >
                                <Image src="/watches/watch-1.jpg" alt="Master Watchmaker Inspection" fill className="object-cover" />
                                <div className="absolute inset-0 border border-white/10" />
                                <div className="absolute inset-0 bg-gradient-to-bl from-[#050505] via-transparent to-transparent pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Beyond the Dial / Closing Statement */}
                <section className="py-32 px-6 relative overflow-hidden bg-[#0c0c0c]/90 border-t border-white/5 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Beyond the <span className="italic font-light text-white/80">Dial</span></h2>
                            <p className="text-white/60 text-lg leading-relaxed font-light mb-12">
                                A luxury watch is more than a tool to tell time; it is a milestone marker, an heirloom, and a testament to human engineering. We guide our clients not just in making a purchase, but in making an informed investment that will stand the test of time.
                            </p>

                            <Link href="/collection" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-white hover:text-primary transition-colors pb-3 border-b border-white/20 hover:border-primary font-medium">
                                Discover The Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}
