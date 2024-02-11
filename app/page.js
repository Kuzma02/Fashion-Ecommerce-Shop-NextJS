import { CategoryPreview, Hero, ProductsSection } from "@/components";


export default function Home() {
  return <main className="max-w-screen-2xl mx-auto">
    <Hero />
    <CategoryPreview />
    <ProductsSection />
  </main>;
}
