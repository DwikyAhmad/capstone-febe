"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Dummy data for interest options
const categories = [
  { id: "1", label: "Pantai & Laut" },
  { id: "2", label: "Gunung & Pendakian" },
  { id: "3", label: "Budaya & Tradisi" },
  { id: "4", label: "Sejarah & Arsitektur" },
  { id: "5", label: "Kuliner" },
  { id: "6", label: "Alam & Pemandangan" },
  { id: "7", label: "Petualangan" },
  { id: "8", label: "Belanja & Kerajinan" },
  { id: "9", label: "Agrowisata" },
  { id: "10", label: "Wisata Religi" },
  { id: "11", label: "Festival & Acara" },
  { id: "12", label: "Fotografi" },
];

export function PreferenceSection() {
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  
  const toggleInterest = (id: string) => {
    setInterests((current) => 
      current.includes(id) 
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Sesuaikan Preferensi Anda</h2>
          <p className="text-muted-foreground mt-2">
            Bantu kami memberikan rekomendasi yang paling relevan dengan minat dan preferensi Anda
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Anggaran</h3>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih anggaran" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Ekonomis (&lt; Rp500.000)</SelectItem>
                <SelectItem value="medium">Menengah (Rp500.000 - Rp1.500.000)</SelectItem>
                <SelectItem value="high">Premium (&gt; Rp1.500.000)</SelectItem>
                <SelectItem value="any">Tidak ada batasan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Durasi</h3>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih durasi perjalanan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">1 Hari</SelectItem>
                <SelectItem value="weekend">Akhir Pekan (2-3 hari)</SelectItem>
                <SelectItem value="week">Mingguan (4-7 hari)</SelectItem>
                <SelectItem value="longterm">Jangka Panjang (&gt; 1 minggu)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="font-semibold text-lg">Dengan Siapa?</h3>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih teman perjalanan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Sendiri</SelectItem>
                <SelectItem value="couple">Pasangan</SelectItem>
                <SelectItem value="friends">Teman</SelectItem>
                <SelectItem value="family">Keluarga dengan Anak</SelectItem>
                <SelectItem value="group">Grup Besar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-4">Minat & Aktivitas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-start space-x-2">
                <Checkbox 
                  id={`interest-${category.id}`} 
                  checked={interests.includes(category.id)}
                  onCheckedChange={() => toggleInterest(category.id)}
                />
                <label 
                  htmlFor={`interest-${category.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="px-8">
            Dapatkan Rekomendasi
          </Button>
        </div>
      </div>
    </section>
  );
} 