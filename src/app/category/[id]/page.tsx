"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchRecommendationsByCategory } from "@/lib/api";
import { TempatWisata } from "@/lib/firestore";
import { TempatWisataCard } from "@/components/tempat-wisata-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Filter } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { addToFavorites } from "@/lib/favorites";

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const categoryId = params.id as string;
    
    // Decode the category name from URL
    const categoryName = decodeURIComponent(categoryId);
    
    const [recommendations, setRecommendations] = useState<TempatWisata[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);

    useEffect(() => {
        const loadRecommendations = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchRecommendationsByCategory(categoryName);
                setRecommendations(data);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Failed to load recommendations"
                );
            } finally {
                setLoading(false);
            }
        };

        if (categoryName) {
            loadRecommendations();
        }
    }, [categoryName]);

    const handleFavoriteClick = async (item: TempatWisata) => {
        // Check if user is authenticated
        if (!user) {
            router.push('/login');
            return;
        }

        const placeName = item.place_name || 'Unnamed Place';
        
        try {
            setAddingToFavorites(placeName);
            await addToFavorites(user, item);
            
            // Show success message (you can replace this with a toast notification)
            alert(`${item.place_name} berhasil ditambahkan ke favorit!`);
        } catch (error) {
            console.error('Error adding to favorites:', error);
            
            if (error instanceof Error && error.message === 'Item is already in favorites') {
                alert(`${item.place_name} sudah ada di favorit Anda!`);
            } else {
                alert('Gagal menambahkan ke favorit. Silakan coba lagi.');
            }
        } finally {
            setAddingToFavorites(null);
        }
    };

    const handleBackClick = () => {
        router.back();
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            'Budaya': '🏛️',
            'Taman Hiburan': '🎢',
            'Cagar Alam': '🌲',
            'Bahari': '🌊',
            'Pusat Perbelanjaan': '🛍️',
            'Tempat Ibadah': '🕌',
        };
        return icons[category] || '📍';
    };

    // Show loading if auth is still loading or recommendations are loading
    if (loading || authLoading) {
        return (
            <div className="min-h-screen bg-gray-50 font-jakarta">
                <div className="max-w-7xl mx-auto p-6">
                    {/* Header Skeleton */}
                    <div className="mb-8">
                        <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse"></div>
                        <div className="h-8 w-64 bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Cards Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-pulse">
                                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
                                <div className="h-10 w-full bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 font-jakarta">
                <div className="max-w-7xl mx-auto p-6">
                    <Button 
                        onClick={handleBackClick} 
                        variant="outline" 
                        className="mb-6"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Kembali
                    </Button>
                    
                    <div className="text-center py-16">
                        <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <Filter className="h-12 w-12 text-red-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Category</h3>
                        <p className="text-red-600 mb-4">{error}</p>
                        <Button onClick={() => window.location.reload()}>
                            Coba Lagi
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-jakarta">
            <div className="max-w-7xl mx-auto p-6">
                {/* Back Button */}
                <Button 
                    onClick={handleBackClick} 
                    variant="outline" 
                    className="mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali
                </Button>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{getCategoryIcon(categoryName)}</span>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {categoryName}
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        Temukan destinasi {categoryName.toLowerCase()} terbaik yang direkomendasikan untuk Anda
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                        {recommendations.length} destinasi ditemukan
                    </div>
                </div>

                {/* Recommendations Grid */}
                {recommendations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {recommendations.map((item, index) => (
                            <TempatWisataCard
                                key={item.id || `recommendation-${index}`}
                                item={item}
                                onFavoriteClick={handleFavoriteClick}
                                className={addingToFavorites === (item.place_name || 'Unnamed Place') ? 'opacity-75 pointer-events-none' : ''}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Tidak Ada Rekomendasi
                        </h3>
                        <p className="text-gray-500 mb-4">
                            Tidak ada destinasi {categoryName.toLowerCase()} yang tersedia saat ini.
                        </p>
                        <Button onClick={handleBackClick} variant="outline">
                            Jelajahi Kategori Lain
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
} 