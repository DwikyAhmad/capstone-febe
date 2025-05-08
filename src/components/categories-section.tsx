import { CategoryCard } from "@/components/category-card";

// Dummy data for categories
const categories = [
  {
    id: "1",
    name: "Pantai",
    count: 152,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h1m8-9v1m11 8h-1M5.6 5.6l.7.7m12.1-.7-.7.7M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm-9 6h18" />
      </svg>
    ),
  },
  {
    id: "2",
    name: "Gunung",
    count: 87,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    id: "3",
    name: "Budaya",
    count: 105,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    ),
  },
  {
    id: "4",
    name: "Kuliner",
    count: 211,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11h.01M11 15h.01M16 16h.01M10 11h.01M13 12h.01M21 5c-1.1 0-2.06-.6-2.6-1.5-.509.894-1.452 1.5-2.566 1.5-1.087 0-2-.577-2.52-1.443-.473.864-1.324 1.443-2.38 1.443-1.128 0-2.11-.62-2.613-1.543C7.825 4.427 6.825 5.013 5.69 5H3v2c0 9.333 3.14 15 9 17 5.86-2 9-7.667 9-17V5h-2.111c.031 0 .082-.001.111-.005z" />
      </svg>
    ),
  },
  {
    id: "5",
    name: "Danau",
    count: 63,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9a4 4 0 0 1 8 0v2.89a7 7 0 0 1-1.5 4.33L12 19.66l-2.5-3.44A7 7 0 0 1 8 11.89z" />
        <path d="M4 21h16" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    id: "6",
    name: "Sejarah",
    count: 77,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16v-2" />
        <path d="m7.5 4.21 4.5 2.6 4.5-2.6" />
        <path d="M7.5 19.79V14.6L3 12" />
        <path d="M16.5 19.79V14.6L21 12" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
  },
  {
    id: "7",
    name: "Petualangan",
    count: 129,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: "8",
    name: "Pulau",
    count: 95,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20V8c0-2.2 1.8-4 4-4s4 1.8 4 4v12" />
        <path d="M8 16H4v-2c0-1.1.9-2 2-2h2" />
        <path d="M16 16h4v-2c0-1.1-.9-2-2-2h-2" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-primary/5 py-16">
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
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 