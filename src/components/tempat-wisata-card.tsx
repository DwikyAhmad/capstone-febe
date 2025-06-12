"use client";

import { TempatWisata } from "@/lib/firestore";
import { MapPin, Star, Trash2 } from "lucide-react";

interface TempatWisataCardProps {
    item: TempatWisata;
    onFavoriteClick?: (item: TempatWisata) => void;
    onDeleteClick?: (item: TempatWisata) => void;
    className?: string;
    showDeleteButton?: boolean;
    isDeleting?: boolean;
}

export function TempatWisataCard({ 
    item, 
    onFavoriteClick, 
    onDeleteClick,
    className = "",
    showDeleteButton = false,
    isDeleting = false
}: TempatWisataCardProps) {
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

    const handleFavoriteClick = () => {
        if (onFavoriteClick) {
            onFavoriteClick(item);
        }
    };

    const handleDeleteClick = () => {
        if (onDeleteClick) {
            onDeleteClick(item);
        }
    };

    return (
        <div
            className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}
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
                            {formatPrice(item.price ?? 0)}
                        </span>
                    </div>
                    
                    {/* Conditional Button */}
                    {showDeleteButton ? (
                        <button 
                            onClick={handleDeleteClick}
                            disabled={isDeleting}
                            className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDeleting ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Menghapus...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Trash2 size={16} className="mr-2" />
                                    Hapus dari Favorit
                                </div>
                            )}
                        </button>
                    ) : (
                        <button 
                            onClick={handleFavoriteClick}
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                        >
                            Add to Favorite
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
} 