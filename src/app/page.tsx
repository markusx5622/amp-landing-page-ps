import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { Services } from "@/components/sections/Services";
import { CuratedCatalog } from "@/components/sections/CuratedCatalog";
import { Calculator } from "@/components/sections/Calculator";
import { WhatsAppOrderForm } from "@/components/sections/WhatsAppOrderForm";
import { TrackingPreview } from "@/components/sections/TrackingPreview";
import { TrustSection } from "@/components/sections/TrustSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <HowItWorks />
      <Categories />
      <Services />
      <CuratedCatalog />
      <Calculator />
      <WhatsAppOrderForm />
      <TrackingPreview />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
