"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchTempatWisata, TempatWisata } from "@/lib/firestore";
import { MapPin } from "lucide-react";
import { TempatWisataCard } from "./tempat-wisata-card";
import { useAuth } from "@/lib/auth-context";
import { addToFavorites } from "@/lib/favorites";

export function TempatWisataList() {
    const [tempatWisata, setTempatWisata] = useState<TempatWisata[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const loadTempatWisata = async () => {
            try {
                setLoading(true);
                const data = await fetchTempatWisata();
                setTempatWisata(data);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "An error occurred"
                );
            } finally {
                setLoading(false);
            }
        };

        loadTempatWisata();
    }, []);

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

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                Error: {error}
            </div>
        );
    }

    return (
        <div id="destinasi" className="max-w-7xl mx-auto p-6 my-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Rekomendasi Destinasi</h1>
                <p className="text-gray-600">Temukan destinasi populer dan sesuai dengan preferensi Anda</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tempatWisata.map((item, index) => (
                    <TempatWisataCard
                        key={item.id || `destination-${index}`}
                        item={item}
                        onFavoriteClick={handleFavoriteClick}
                        className={addingToFavorites === (item.place_name || 'Unnamed Place') ? 'opacity-75 pointer-events-none' : ''}
                    />
                ))}
            </div>
            
            {tempatWisata.length === 0 && (
                <div className="text-center py-16">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No destinations found</h3>
                    <p className="text-gray-500">No tempat wisata found in the collection.</p>
                </div>
            )}
        </div>
    );
}
