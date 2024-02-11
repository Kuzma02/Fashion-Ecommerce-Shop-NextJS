import { CategoryPreview, Hero, ProductsSection, BenefitsSection } from "@/components";


export default function Home() {
  return <main className="max-w-screen-2xl mx-auto">
    <Hero />
    <CategoryPreview />
    <ProductsSection />
    <BenefitsSection />
  </main>;
}
