import { CategoryCard } from "@/components/category-card";
import { Waves, Landmark, Trees, FerrisWheel, Store, Church } from "lucide-react";

// Dummy data for categories
const categories = [
  {
    id: "1",
    name: "Bahari",
    icon: <Waves size={24} />,
  },
  {
    id: "2",
    name: "Budaya",
    icon: <Landmark size={24} />,
  },
  {
    id: "3",
    name: "Cagar Alam",
    icon: <Trees size={24} />,
  },
  {
    id: "4",
    name: "Taman Hiburan",
    icon: <FerrisWheel size={24} />,
  },
  {
    id: "5",
    name: "Pusat Perbelanjaan",
    icon: <Store size={24} />,
  },
  {
    id: "6",
    name: "Tempat Ibadah",
    icon: <Church size={24} />,
  },
];

export function CategoriesSection() {
  return (
    <section id="kategori" className="bg-primary/5 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Jelajahi Kategori</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Pilih berbagai kategori wisata yang tersedia di seluruh Indonesia sesuai dengan minat dan preferensi Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 