import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative bg-primary/5 py-20">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-14">
            Tempat Liburan Sesuai dengan{" "}
            <span className="text-primary">Minat </span> Anda
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Jelajahi rekomendasi destinasi wisata yang dipersonalisasi berdasarkan
            preferensi Anda menggunakan teknologi machine learning
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <Input 
              type="text" 
              placeholder="Lokasi, aktivitas, atau minat anda..." 
              className="md:flex-1"
            />
            <Button type="submit" size="default" className="w-full md:w-auto">
              Cari Destinasi
            </Button>
          </div>
          
          <div className="mt-6 flex justify-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              1000+ Destinasi
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
              </svg>
              100+ Kategori
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 