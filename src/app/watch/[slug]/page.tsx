import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { InquiryDialog } from "@/components/features/InquiryDialog";

// Dummy data for a specific watch
const watchData = {
    id: "1",
    name: "Daytona Oysterflex",
    brand: "Rolex",
    slug: "rolex-daytona-116515ln",
    reference: "116515LN",
    price: 42500,
    status: "Available",
    description: "The Oyster Perpetual Cosmograph Daytona in 18 ct Everose gold with a chocolate and black dial and an Oysterflex bracelet, featuring a black Cerachrom bezel with tachymetric scale. This chronograph was designed to be the ultimate timing tool for endurance racing drivers.",
    images: [
        "/watch-detail.jpg",
        "/watch-hero.jpg"
    ],
    specs: {
        caseSize: "40mm",
        caseMaterial: "18 ct Everose gold",
        movement: "Perpetual, mechanical chronograph, self-winding (Calibre 4130)",
        dial: "Chocolate and black",
        waterResistance: "Waterproof to 100 metres / 330 feet",
        powerReserve: "Approximately 72 hours",
        bracelet: "Oysterflex",
        condition: "Unworn / 2024",
        boxPapers: "Original Box & Papers included"
    },
    includes: [
        "Original Manufacturer Box",
        "Original Warranty Card",
        "JD Time & Ride Authenticity Guarantee",
        "12-Month Mechanical Warranty"
    ]
};

// Simulate dynamic routing behavior
export default async function WatchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    await params; // Await params to fulfill the promise but we don't need the slug yet with dummy data

    // In a real app we would fetch the specific watch by slug from Sanity here.
    // We're using the dummy data for now
    const watch = watchData;

    return (
        <div className="min-h-screen pt-32 pb-40 bg-[#050505]">
            <div className="container mx-auto px-6 max-w-7xl">
                <Link href="/collection" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-medium mb-16">
                    <ArrowLeft className="w-4 h-4 mr-3" /> Back to Collection
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column: Images */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="relative aspect-square w-full bg-[#111] border border-border/40 overflow-hidden group">
                            <Image src={watch.images[0]} alt={watch.name} fill className="object-cover opacity-90 transition-opacity duration-700 hover:opacity-100" />
                        </div>
                        {watch.images.length > 1 && (
                            <div className="grid grid-cols-2 gap-6">
                                {watch.images.slice(1).map((img, idx) => (
                                    <div key={idx} className="relative aspect-square bg-[#111] border border-border/40 overflow-hidden group">
                                        <Image src={img} alt={`${watch.name} View ${idx + 2}`} fill className="object-cover opacity-80 transition-opacity duration-700 hover:opacity-100" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Details & Specs */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">{watch.brand}</p>
                                <Badge
                                    variant={watch.status === "Available" ? "default" : "outline"}
                                    className={`lowercase tracking-[0.2em] text-[10px] px-3 py-1 rounded-none font-medium ${watch.status === 'Available' ? 'bg-primary/90 text-[#050505] border-primary/90' : 'text-white/50 border-white/20'}`}
                                >
                                    {watch.status}
                                </Badge>
                            </div>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-4 leading-tight">{watch.name}</h1>
                            <p className="text-white/40 font-mono text-sm tracking-wider mb-8">REF. {watch.reference}</p>

                            <div className="text-3xl text-white font-light tracking-widest mb-12">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(watch.price)}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <div className="flex-1">
                                    <InquiryDialog watchName={watch.name} reference={watch.reference} triggerText="Inquire Now" variant="default" />
                                </div>
                                {watch.status === "Available" && (
                                    <div className="flex-1">
                                        <InquiryDialog watchName={watch.name} reference={watch.reference} triggerText="Make an Offer" variant="outline" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="prose prose-invert prose-p:text-white/60 prose-p:leading-loose prose-p:font-light mb-16">
                            <p>{watch.description}</p>
                        </div>

                        <Separator className="bg-white/10 mb-12" />

                        <h3 className="text-2xl font-serif text-white mb-8 tracking-wide">Specifications</h3>
                        <div className="grid grid-cols-1 gap-y-6 mb-16">
                            {Object.entries(watch.specs).map(([key, value]) => (
                                <div key={key} className="flex flex-col sm:flex-row sm:items-baseline border-b border-white/5 pb-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 w-1/3 mb-1 sm:mb-0">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <span className="text-sm text-white/90 font-light w-2/3">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/5 p-10">
                            <h3 className="text-xl font-serif text-white mb-6 tracking-wide">Included in Delivery</h3>
                            <ul className="space-y-4">
                                {watch.includes.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-white/60 font-light leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-primary mr-4 mt-1 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
