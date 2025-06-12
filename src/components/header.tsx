"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Heart } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { logoutUser } from "@/lib/auth";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const scrollToTop = () => {
    console.log('Scrolling to top...');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
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
        </Link>
        
        {/* Desktop Navigation */}
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
          {/* Desktop Authentication */}
          {!loading && (
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <User size={16} />
                    <span className="text-sm">{user.displayName || user.email}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b border-border">
                          {user.email}
                        </div>
                        <Link
                          href="/favorites"
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-foreground hover:bg-primary/10 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Heart size={16} />
                          Favorit Saya
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-foreground hover:bg-primary/10 transition-colors"
                        >
                          <LogOut size={16} />
                          Keluar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/login">Masuk</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/register">Daftar</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-3 rounded-md hover:bg-primary/10 text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('kategori')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-3 rounded-md hover:bg-primary/10 text-left"
            >
              Kategori
            </button>
            <button 
              onClick={() => scrollToSection('destinasi')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-3 rounded-md hover:bg-primary/10 text-left"
            >
              Destinasi
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer px-3 py-3 rounded-md hover:bg-primary/10 text-left"
            >
              Tentang Kami
            </button>
            
            {/* Mobile Authentication */}
            {!loading && (
              <div className="pt-4 border-t border-border">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-700">
                      Halo, {user.displayName || user.email}
                    </div>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/favorites">
                        <Heart size={16} className="mr-2" />
                        Favorit Saya
                      </Link>
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <LogOut size={16} className="mr-2" />
                      Keluar
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/login">Masuk</Link>
                    </Button>
                    <Button asChild size="sm" className="w-full">
                      <Link href="/register">Daftar</Link>
                    </Button>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}