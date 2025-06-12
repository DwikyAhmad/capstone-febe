"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const kategoriList = [
  "Bahari",
  "Budaya",
  "Cagar Alam",
  "Taman Hiburan",
  "Pusat Perbelanjaan",
  "Tempat Ibadah",
];

const PAGE_SIZE = 4;

type Recommendation = {
  Place_Name: string;
  City_x: string;
  Category: string;
  Rating: number;
};

export default function PreferenceSection() {
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null);
  const [results, setResults] = useState<Recommendation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedKategori) fetchAll();
  }, [selectedKategori]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(
        kategoriList.map((kat) =>
          fetch("https://username123ml-traveljoy.hf.space/get_recommendations/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category: kat }),
          }).then((res) => res.json())
        )
      );
      const allData = responses.flat();
      setResults(allData);
    } catch {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchKategori = async (kategori: string) => {
    if (selectedKategori === kategori) {
      setSelectedKategori(null);
      setCurrentPage(1);
      return;
    }

    setSelectedKategori(kategori);
    setCurrentPage(1);
    setLoading(true);
    try {
      const res = await fetch("https://username123ml-traveljoy.hf.space/get_recommendations/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: kategori }),
      });
      const data = await res.json();
      setResults(Array.isArray(data) ? data : []);
      if (!data.length) setError("Tidak ada rekomendasi.");
    } catch {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  const paginated = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const totalPages = Math.ceil(results.length / PAGE_SIZE);

  return (
    <section className="container mx-auto px-4 py-10 max-w-4xl min-h-[900px]">
      <h2 className="text-xl font-bold mb-4">Pilih Kategori</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {kategoriList.map((kat) => (
          <Button
            key={kat}
            variant={selectedKategori === kat ? "default" : "outline"}
            onClick={() => fetchKategori(kat)}
          >
            {kat}
          </Button>
        ))}
        <Button
          variant={selectedKategori === null ? "default" : "outline"}
          onClick={() => setSelectedKategori(null)}
        >
          Semua
        </Button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paginated.map((item, i) => (
          <div key={i} className="rounded-lg shadow-md overflow-hidden border p-4">
            <h3 className="font-semibold text-lg">{item.Place_Name}</h3>
            <p>📍 Kota: <strong>{item.City_x}</strong></p>
            <p>🏷️ Kategori: {item.Category}</p>
            <p>🌟 Rating: {item.Rating}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) =>
              page === 1 ||
              page === totalPages ||
              Math.abs(page - currentPage) <= 1
            )
            .reduce<number[]>((acc, page, index, arr) => {
              if (index > 0 && page - arr[index - 1] > 1) {
                acc.push(-1); 
              }
              acc.push(page);
              return acc;
            }, [])
            .map((page, i) =>
              page === -1 ? (
                <span key={`ellipsis-${i}`} className="px-2">
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              )
            )}
        </div>
      )}
    </section>
  );
}
