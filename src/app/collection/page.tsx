import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Dummy data representing Sanity CMS output
const watches = [
    {
        id: "1",
        name: "Rolex Daytona Oysterflex",
        brand: "Rolex",
        slug: "rolex-daytona-116515ln",
        price: 42500,
        status: "Available",
        image: "/watches/watch-6.jpg",
    },
    {
        id: "2",
        name: "Patek Philippe Nautilus",
        brand: "Patek Philippe",
        slug: "patek-philippe-nautilus-5711",
        price: 115000,
        status: "Pre-Order",
        image: "/watches/watch-1.jpg",
    },
    {
        id: "3",
        name: "Audemars Piguet Royal Oak",
        brand: "Audemars Piguet",
        slug: "ap-royal-oak-offshore",
        price: 38000,
        status: "Sold",
        image: "/watches/watch-5.jpg",
    },
    {
        id: "4",
        name: "Vacheron Constantin Overseas",
        brand: "Vacheron Constantin",
        slug: "vacheron-overseas-4500v",
        price: 32000,
        status: "Available",
        image: "/watches/watch-2.jpg",
    },
    {
        id: "5",
        name: "Rolex Submariner Date",
        brand: "Rolex",
        slug: "rolex-submariner-126610ln",
        price: 14500,
        status: "Available",
        image: "/watches/watch-3.jpg",
    },
    {
        id: "6",
        name: "A. Lange & Söhne Zeitwerk",
        brand: "A. Lange & Söhne",
        slug: "lange-zeitwerk-striking-time",
        price: 95000,
        status: "Coming Soon",
        image: "/watches/watch-4.jpg",
    }
];

export default function CollectionPage() {
    return (
        <div className="min-h-screen pt-32 pb-40 bg-[#050505] relative">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                <div className="mb-24 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">The Collection</h1>
                    <p className="text-white/60 max-w-2xl text-lg font-light leading-relaxed">
                        Browse our curated inventory of verified luxury timepieces. Each watch has been rigorously inspected for authenticity and mechanical excellence.
                    </p>
                    <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mt-12" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {watches.map((watch) => (
                        <Link
                            href={`/watch/${watch.slug}`}
                            key={watch.id}
                            className="group block"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#0A0A0A] mb-6">
                                <div className="absolute inset-0 bg-[#0A0A0A]">
                                    <Image src={watch.image} alt={watch.name} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                                </div>

                                <div className="absolute top-6 left-6">
                                    <Badge
                                        variant={
                                            watch.status === "Available" ? "default" :
                                                watch.status === "Sold" ? "destructive" :
                                                    watch.status === "Pre-Order" ? "secondary" : "outline"
                                        }
                                        className={`
                      lowercase tracking-[0.2em] text-[10px] font-medium px-4 py-1.5 rounded-none border max-w-fit transition-colors duration-500
                      ${watch.status === 'Available' ? 'bg-primary/90 text-[#050505] border-primary/90' : ''}
                      ${watch.status === 'Sold' ? 'bg-black/90 text-white/50 border-white/10 backdrop-blur-md' : ''}
                      ${watch.status === 'Pre-Order' ? 'bg-white/10 text-white border-white/20 backdrop-blur-md' : ''}
                      ${watch.status === 'Coming Soon' ? 'bg-transparent text-white border-white/30 backdrop-blur-md' : ''}
                    `}
                                    >
                                        {watch.status}
                                    </Badge>
                                </div>
                            </div>

                            <div className="px-2">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 font-medium">{watch.brand}</p>
                                <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors duration-500">{watch.name}</h2>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-6">
                                    <span className="text-white/80 text-sm tracking-widest font-light">
                                        {watch.status === "Sold" ? 'PRICE ON REQUEST' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(watch.price)}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/0 group-hover:text-primary transition-colors duration-500 transform translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                                        View Details
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
