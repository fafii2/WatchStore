import { Hero } from "@/components/home/Hero";
import { FeaturedWatch } from "@/components/home/FeaturedWatch";
import { BentoGrid } from "@/components/home/BentoGrid";
import { TrustBanner } from "@/components/home/TrustBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWatch />
      <BentoGrid />
      <TrustBanner />
    </>
  );
}
