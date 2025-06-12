"use client";

import { MapPin, Star, Globe, Heart, Award } from "lucide-react";

export function AboutSection() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section
            id="tentang"
            className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Tentang <span className="text-primary">TravelJoy</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Platform digital terdepan untuk menemukan destinasi
                        wisata terbaik di Indonesia. Kami membantu Anda
                        menjelajahi keindahan Nusantara dengan mudah dan
                        menyenangkan.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Misi Kami
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Menjadi jembatan yang menghubungkan para wisatawan
                            dengan keajaiban destinasi Indonesia, dari pantai
                            eksotis hingga warisan budaya yang kaya, memberikan
                            pengalaman perjalanan yang tak terlupakan.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Visi Kami
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Membangun ekosistem pariwisata digital yang
                            memudahkan setiap orang untuk menemukan,
                            merencanakan, dan menikmati perjalanan wisata
                            terbaik di seluruh Indonesia.
                        </p>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Yang Kami Tawarkan
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            TravelJoy menyediakan berbagai fitur untuk membantu
                            perjalanan wisata Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-10 h-10 text-blue-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                Rekomendasi Destinasi
                            </h4>
                            <p className="text-gray-600">
                                Temukan destinasi wisata terbaik dari 6
                                kategori: Bahari, Budaya, Cagar Alam, Taman
                                Hiburan, Pusat Perbelanjaan, dan Tempat Ibadah.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-10 h-10 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                Review & Rating
                            </h4>
                            <p className="text-gray-600">
                                Sistem rating dan review yang membantu Anda
                                memilih destinasi terbaik berdasarkan pengalaman
                                wisatawan lain.
                            </p>
                        </div>
                    </div>
                </div>

            

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
                        <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Mulai Petualangan Anda Bersama TravelJoy
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Jelajahi keindahan Indonesia dan temukan destinasi
                            impian Anda. Buat kenangan tak terlupakan di setiap
                            perjalanan!
                        </p>
                        <button 
                            onClick={scrollToTop}
                            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Mulai Menjelajah
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
