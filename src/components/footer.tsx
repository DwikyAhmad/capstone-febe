import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary/5 border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
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
                            <span className="text-lg font-bold text-primary">
                                TravelJoy
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                            Sistem rekomendasi destinasi wisata Indonesia yang
                            dipersonalisasi menggunakan machine learning untuk
                            memberikan pengalaman liburan terbaik sesuai
                            preferensi pribadi Anda.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Bahari
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Budaya
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Cagar Alam
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Taman Hiburan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Pusat Perbelanjaan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Tempat Ibadah
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} TravelJoy. Sistem
                        Rekomendasi Wisata Indonesia. Hak Cipta Dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}
