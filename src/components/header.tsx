"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToTop = () => {
    console.log('Scrolling to top...');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    const header = document.querySelector('header');
    
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight - 16; // Extra 16px padding
      
      console.log('Element found, scrolling to position:', elementPosition);
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M3 7h18M8 20h8M12 4v16M4 11l8-4 8 4" />
          </svg>
          <span className="text-lg font-bold text-primary">TravelJoy</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={scrollToTop}
            className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-primary/10"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('kategori')}
            className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-primary/10"
          >
            Kategori
          </button>
          <button 
            onClick={() => scrollToSection('destinasi')}
            className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-primary/10"
          >
            Destinasi
          </button>
          <button 
            onClick={() => scrollToSection('tentang')}
            className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-primary/10"
          >
            Tentang Kami
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/login">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}