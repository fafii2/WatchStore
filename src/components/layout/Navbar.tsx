import Link from "next/link";

export function Navbar() {
    return (
        <header className="w-full border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif text-white tracking-widest hover:text-primary transition-colors duration-500">
                    JD&apos;s Time &amp; Ride
                </Link>
                <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.15em] text-white/60 font-medium">
                    <Link href="/collection" className="hover:text-primary transition-colors duration-300">Collection</Link>
                    <Link href="/about" className="hover:text-primary transition-colors duration-300">About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/collection" className="px-8 py-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 uppercase text-[10px] tracking-[0.2em] font-semibold">
                        Inquire Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
