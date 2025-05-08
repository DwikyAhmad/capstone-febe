import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary/5 border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Destinasi Populer
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Bali
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Yogyakarta
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Raja Ampat
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Danau Toba
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Labuan Bajo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Lombok
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Pantai
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Gunung
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
                                    Kuliner
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Sejarah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Petualangan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Bantuan & Dukungan
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Kontak
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Syarat & Ketentuan
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
