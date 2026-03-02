"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface InquiryDialogProps {
    watchName: string;
    reference?: string;
    triggerText?: string;
    variant?: "default" | "outline";
}

export function InquiryDialog({ watchName, reference, triggerText = "Inquire Now", variant = "default" }: InquiryDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
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
            subject: `Inquiry: ${watchName} (Ref. ${reference})`,
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitMessage({ text: "Success! We will be in touch shortly.", type: "success" });
                setTimeout(() => setIsOpen(false), 2000);
            } else {
                const result = await response.json();
                setSubmitMessage({ text: result.error || "Something went wrong.", type: "error" });
            }
        } catch {
            setSubmitMessage({ text: "An unexpected error occurred.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    variant={variant}
                    className={`w-full text-[10px] uppercase tracking-[0.2em] font-medium h-14 rounded-none transition-all duration-300 ${variant === 'default' ? 'bg-primary text-[#050505] hover:bg-white' : 'bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40'}`}
                >
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-[#0A0A0A] border-white/10 text-white rounded-none p-8">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-serif text-white tracking-wide mb-2">Inquire</DialogTitle>
                    <DialogDescription className="text-white/50 font-light leading-relaxed">
                        {watchName} <br />
                        <span className="font-mono text-xs tracking-wider opacity-70">REF. {reference}</span>
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                    <div className="space-y-3">
                        <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm font-light rounded-none"
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm font-light rounded-none"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={4}
                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm font-light resize-none rounded-none leading-relaxed"
                            placeholder="I am interested in acquiring this piece..."
                            defaultValue={`I am interested in acquiring the ${watchName}. Please provide additional information regarding the purchase process.`}
                        ></textarea>
                    </div>

                    <Button disabled={isSubmitting} type="submit" className="w-full bg-primary text-[#050505] hover:bg-white text-[10px] uppercase tracking-[0.2em] font-medium h-14 rounded-none mt-4 transition-colors duration-300">
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>

                    {submitMessage.text && (
                        <p className={`text-sm mt-3 text-center ${submitMessage.type === 'success' ? 'text-primary' : 'text-red-500'}`}>
                            {submitMessage.text}
                        </p>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    );
}
