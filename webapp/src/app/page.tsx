import { AccessModel } from "@/components/site/AccessModel";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ProductPillars } from "@/components/site/ProductPillars";
import { Roadmap } from "@/components/site/Roadmap";
import { WorkspaceGrid } from "@/components/site/WorkspaceGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductPillars />
        <AccessModel />
        <WorkspaceGrid />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
