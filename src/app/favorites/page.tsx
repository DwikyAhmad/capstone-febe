"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getUserFavorites, removeFromFavorites, Favorite } from "@/lib/favorites";
import { TempatWisata } from "@/lib/firestore";
import { TempatWisataCard } from "@/components/tempat-wisata-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, HeartOff } from "lucide-react";

export default function FavoritesPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [removingFavorite, setRemovingFavorite] = useState<string | null>(null);

    useEffect(() => {
        // Redirect if not authenticated
        if (!authLoading && !user) {
            router.push('/login');
            return;
        }

        if (user) {
            loadFavorites();
        }
    }, [user, authLoading, router]);

    const loadFavorites = async () => {
        if (!user) return;

        try {
            setLoading(true);
            setError(null);
            const data = await getUserFavorites(user.uid);
            setFavorites(data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Failed to load favorites"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFavorite = async (item: TempatWisata) => {
        if (!user) return;

        const placeName = item.place_name || 'Unnamed Place';
        
        try {
            setRemovingFavorite(placeName);
            await removeFromFavorites(user, placeName);
            
            // Remove from local state
            setFavorites(prev => prev.filter(f => f.placeName !== placeName));
            
            alert(`${placeName} berhasil dihapus dari favorit!`);
        } catch (error) {
            console.error('Error removing favorite:', error);
            alert('Gagal menghapus dari favorit. Silakan coba lagi.');
        } finally {
            setRemovingFavorite(null);
        }
    };

    const handleBackClick = () => {
        router.back();
    };

    // Convert Favorite to TempatWisata for card component
    const favoriteToTempatWisata = (favorite: Favorite): TempatWisata => ({
        id: favorite.id || '',
        place_name: favorite.placeName,
        category: favorite.category,
        location: favorite.location,
        rating: favorite.rating,
        price: favorite.price,
        description: favorite.description,
        city_x: favorite.cityX || '',
        // Required fields with default values
        age: 0,
        latitude: 0,
        longitude: 0,
        place_id: 0,
        time_minutes: 0,
        user_id: ''
    });

    if (authLoading || loading) {
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
                            <HeartOff className="h-12 w-12 text-red-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Favorites</h3>
                        <p className="text-red-600 mb-4">{error}</p>
                        <Button onClick={loadFavorites}>
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
                        <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                        <h1 className="text-3xl font-bold text-gray-900">
                            Destinasi Favorit Saya
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        Koleksi destinasi wisata yang telah Anda simpan sebagai favorit
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                        {favorites.length} destinasi favorit
                    </div>
                </div>

                {/* Favorites Grid */}
                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {favorites.map((favorite, index) => (
                            <TempatWisataCard
                                key={favorite.id || `favorite-${index}`}
                                item={favoriteToTempatWisata(favorite)}
                                onDeleteClick={handleRemoveFavorite}
                                showDeleteButton={true}
                                isDeleting={removingFavorite === favorite.placeName}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Heart className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Belum Ada Favorit
                        </h3>
                        <p className="text-gray-500 mb-4">
                            Anda belum menyimpan destinasi apapun sebagai favorit. 
                            Mulai jelajahi dan tambahkan destinasi yang menarik!
                        </p>
                        <Button onClick={() => router.push('/')} variant="outline">
                            Jelajahi Destinasi
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
} 