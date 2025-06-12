"use client";

import { useEffect, useState } from "react";
import { fetchTempatWisata, TempatWisata } from "@/lib/firestore";
import { MapPin, Star } from "lucide-react";

export function TempatWisataList() {
    const [tempatWisata, setTempatWisata] = useState<TempatWisata[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };


    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
            );
        }

        return stars;
    };

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Budaya': 'bg-purple-100 text-purple-800',
            'Taman Hiburan': 'bg-pink-100 text-pink-800',
            'Cagar Alam': 'bg-green-100 text-green-800',
            'Bahari': 'bg-blue-100 text-blue-800',
            'Pusat Perbelanjaan': 'bg-orange-100 text-orange-800',
            'Tempat Ibadah': 'bg-gray-100 text-gray-800',
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
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
        <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Tempat Wisata Indonesia</h1>
                <p className="text-gray-600">Discover amazing destinations across Indonesia</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tempatWisata.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 pb-4">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                    {item.place_name || "Unnamed Place"}
                                </h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                                    {item.category}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center">
                                    {renderStars(item.rating)}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {item.rating.toFixed(1)}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                {item.description || "No description available"}
                            </p>
                        </div>

                        {/* Details */}
                        <div className="px-6 pb-4 space-y-3 mt-auto">
                            {/* Location */}
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                <span className="text-gray-700">{item.location}</span>
                                {item.city_x && (
                                    <span className="text-gray-500">• {item.city_x}</span>
                                )}
                            </div>


                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <span className="text-lg font-bold text-green-600">
                                        {formatPrice(item.price)}
                                    </span>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
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
