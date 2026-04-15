import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/api/images/viewAllImages");
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          throw new Error(data?.error || "Failed to fetch images.");
        }

        setImages(Array.isArray(data.images) ? data.images : []);
      } catch (err) {
        setImages([]);
        setError(err?.message || "Failed to fetch images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-24">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D62] uppercase">
            Gallery
          </h1>
          <p className="text-gray-700 mt-3 mb-8">
            All images from Firebase Storage `images/` directory.
          </p>

          {loading && <p className="text-gray-600">Loading images...</p>}
          {!loading && error && <p className="text-red-600">{error}</p>}

          {!loading && !error && images.length === 0 && (
            <p className="text-gray-600">No images found.</p>
          )}

          {!loading && !error && images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((url, index) => (
                <div
                  key={`${url}-${index}`}
                  className="relative w-full h-44 sm:h-52 md:h-60 rounded-lg overflow-hidden border border-gray-200"
                >
                  <Image
                    src={url}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
