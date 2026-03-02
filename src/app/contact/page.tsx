"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import * as m from "framer-motion/m";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage({ text: "", type: "" });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitMessage({ text: "Your inquiry has been received. We will be in touch shortly.", type: "success" });
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await response.json();
                setSubmitMessage({ text: result.error || "Something went wrong. Please try again.", type: "error" });
            }
        } catch (error) {
            setSubmitMessage({ text: "An unexpected error occurred. Please try again later.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen pt-24 pb-32"
        >
            <div className="container mx-auto px-6 max-w-4xl">
                <m.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-16 border-b border-white/10 pb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-cinzel text-primary mb-6">Contact Us</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you are hunting a specific reference or seeking to consign a cornerstone piece from your collection, our experts are at your disposal.
                    </p>
                </m.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <m.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Direct Inquiries</h2>
                            <p className="text-white text-lg">hello@jdtimeandride.com</p>
                            <p className="text-muted-foreground mt-2">Expect a response within 24 hours.</p>
                        </div>

                        <div>
                            <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Showroom Location</h2>
                            <p className="text-white text-lg leading-relaxed">
                                123 Horology Way, Suite 400<br />
                                Financial District<br />
                                New York, NY 10004
                            </p>
                            <p className="text-muted-foreground mt-3 italic line-through">Walk-ins Welcome</p>
                            <p className="text-primary mt-1 text-sm font-medium tracking-wide">Strictly By Appointment Only</p>
                        </div>

                        <div>
                            <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Socials</h2>
                            <a href="#" className="text-white hover:text-primary transition-colors text-lg">Instagram: @jdtimeandride</a>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-[#0f0f0f] border border-border/40 p-8 rounded-sm"
                    >
                        <h2 className="text-2xl font-cinzel text-white mb-6">Request Contact</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full bg-black border border-border/50 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full bg-black border border-border/50 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                                <select
                                    name="subject"
                                    id="subject"
                                    className="w-full bg-black border border-border/50 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                                >
                                    <option>Watch Sourcing Request</option>
                                    <option>Consignment Inquiry</option>
                                    <option>General Question</option>
                                    <option>Appraisal Services</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black border border-border/50 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="How can we assist you?"
                                ></textarea>
                            </div>

                            <Button disabled={isSubmitting} type="submit" className="w-full bg-primary text-black hover:bg-primary/90 text-sm uppercase tracking-widest h-14 rounded-none mt-4">
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {submitMessage.text && (
                                <p className={`text-sm mt-4 text-center ${submitMessage.type === 'success' ? 'text-primary' : 'text-red-500'}`}>
                                    {submitMessage.text}
                                </p>
                            )}
                        </form>
                    </m.div>
                </div>
            </div>
        </m.div>
    );
}
