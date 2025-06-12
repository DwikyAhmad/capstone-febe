import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RecommendationSection } from "@/components/recommendation-section";
import Kategori from "@/components/preference-section";
import { Footer } from "@/components/footer";
import { TempatWisataList } from "@/components/tempat-wisata-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-jakarta">
      <Header />
      <Hero />
      <section id="destinasi">
       <RecommendationSection />
      </section>
      <TempatWisataList />
      <section id="kategori">
        <Kategori />
      </section>
      <Footer />
    </main>
  );
}
