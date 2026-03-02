"use client";

import { ShieldCheck, Clock, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function TrustBanner() {
    const steps = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "100% Authenticity Guaranteed",
            description: "Every timepiece is rigorously inspected and verified by our master horologists before listing.",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Extensive Warranty",
            description: "Enjoy peace of mind with our comprehensive 12-month mechanical warranty on all purchases.",
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Curated Selection",
            description: "We only stock the most pristine and highly sought-after models from the world's finest brands.",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Fully Insured Shipping",
            description: "Secure, tracked, and fully insured delivery worldwide directly to your doorstep.",
        },
    ];

    return (
        <section className="bg-[#0c0c0c] py-24 relative overflow-hidden border-t border-white/10 border-b">
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

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20 max-w-2xl mx-auto"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-6">Our Commitment</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The JD Standard</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        We don't just sell watches; we curate investments and preserve horological history. Our commitment to excellence ensures complete confidence in every acquisition.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col items-center text-center px-4"
                        >
                            <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 text-primary">
                                {step.icon}
                            </div>
                            <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-[0.15em] leading-relaxed">{step.title}</h3>
                            <p className="text-sm text-white/50 font-light leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
