"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DestinationCard } from "@/components/destination-card";

// Dummy data for destinations
const popularDestinations = [
  {
    id: "1",
    name: "Pantai Kuta",
    location: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1024",
    rating: 4.7,
    price: "Rp500.000/malam",
    tags: ["Pantai", "Surfing", "Liburan Keluarga"]
  },
  {
    id: "2",
    name: "Borobudur",
    location: "Magelang, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1588312578101-cacee14bb0ab?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1024",
    rating: 4.9,
    price: "Rp75.000/orang",
    tags: ["Sejarah", "Budaya", "UNESCO"]
  },
  {
    id: "3",
    name: "Danau Toba",
    location: "Sumatera Utara",
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1024",
    rating: 4.8,
    price: "Rp350.000/malam",
    tags: ["Danau", "Alam", "Pemandangan"]
  },
  {
    id: "4",
    name: "Raja Ampat",
    location: "Papua Barat",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1024",
    rating: 4.9,
    price: "Rp1.200.000/malam",
    tags: ["Menyelam", "Alam", "Pantai"]
  }
];

const trendsDestinations = [
  {
    id: "5",
    name: "Labuan Bajo",
    location: "Nusa Tenggara Timur",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1024",
    rating: 4.7,
    price: "Rp850.000/malam",
    tags: ["Pulau Komodo", "Pantai", "Menyelam"]
  },
  {
    id: "6",
    name: "Kawah Ijen",
    location: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1581340151765-7ac189960bc9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1024",
    rating: 4.8,
    price: "Rp250.000/malam",
    tags: ["Gunung", "Api Biru", "Pendakian"]
  },
  {
    id: "7",
    name: "Desa Penglipuran",
    location: "Bali",
    image: "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?q=80&w=1024",
    rating: 4.6,
    price: "Rp300.000/malam",
    tags: ["Budaya", "Desa Tradisional", "Kerajinan"]
  },
  {
    id: "8",
    name: "Pulau Belitung",
    location: "Bangka Belitung",
    image: "https://images.unsplash.com/photo-1568651925522-cd4447340898?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1024",
    rating: 4.7,
    price: "Rp450.000/malam",
    tags: ["Pantai", "Batu Granit", "Kuliner"]
  }
];

const forYouDestinations = [
  {
    id: "9",
    name: "Dieng Plateau",
    location: "Jawa Tengah",
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1024",
    rating: 4.6,
    price: "Rp350.000/malam",
    tags: ["Pegunungan", "Danau Warna", "Budaya"]
  },
  {
    id: "10",
    name: "Taman Nasional Komodo",
    location: "Nusa Tenggara Timur",
    image: "https://images.unsplash.com/photo-1698093185273-551148a76898?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1024",
    rating: 4.9,
    price: "Rp950.000/malam",
    tags: ["Satwa Liar", "Pulau", "Menyelam"]
  },
  {
    id: "11",
    name: "Gili Trawangan",
    location: "Lombok, NTB",
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=1024",
    rating: 4.7,
    price: "Rp750.000/malam",
    tags: ["Pantai", "Snorkeling", "Pulau"]
  },
  {
    id: "12",
    name: "Kawah Putih",
    location: "Jawa Barat",
    image: "https://images.unsplash.com/photo-1698186861646-31803b7908f4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1024",
    rating: 4.5,
    price: "Rp300.000/malam",
    tags: ["Danau Vulkanik", "Alam", "Foto"]
  }
];

export function RecommendationSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("popular");
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Rekomendasi Destinasi</h2>
          <p className="text-muted-foreground mt-2">
            Temukan destinasi populer dan sesuai dengan preferensi Anda
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="popular" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="mb-8">
          <TabsTrigger value="popular">Populer</TabsTrigger>
          <TabsTrigger value="trends">Sedang Tren</TabsTrigger>
          <TabsTrigger value="for-you">Untuk Anda</TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id}
                {...destination}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendsDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id}
                {...destination}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="for-you" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forYouDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id}
                {...destination}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
} 