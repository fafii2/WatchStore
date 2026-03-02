import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-[#050505] pt-24 pb-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-serif text-white mb-6 tracking-wide">JD&apos;s Time &amp; Ride</h2>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm font-light">
                        Curated luxury timepieces for the modern collector. Authenticity guaranteed, presentation elevated.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-6 uppercase tracking-[0.2em] text-xs">Navigation</h3>
                    <ul className="space-y-4 text-sm text-white/60 font-light">
                        <li><Link href="/collection" className="hover:text-primary transition-colors duration-300">Our Collection</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors duration-300">About JD</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-6 uppercase tracking-[0.2em] text-xs">Contact</h3>
                    <ul className="space-y-4 text-sm text-white/60 font-light">
                        <li>Inquiries: hello@jdtimeandride.com</li>
                        <li>Showroom: By Appointment Only</li>
                        <li>IG: @jdtimeandride</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light tracking-wide">
                <span>&copy; {new Date().getFullYear()} JD&apos;s Time &amp; Ride. All rights reserved.</span>
                <span className="uppercase tracking-[0.2em]">Crafted for the Discerning</span>
            </div>
        </footer>
    );
}
