import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b border-border">
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
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="/destinasi" className="text-foreground hover:text-primary transition-colors">
            Destinasi
          </Link>
          <Link href="/kategori" className="text-foreground hover:text-primary transition-colors">
            Kategori
          </Link>
          <Link href="/tentang" className="text-foreground hover:text-primary transition-colors">
            Tentang Kami
          </Link>
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