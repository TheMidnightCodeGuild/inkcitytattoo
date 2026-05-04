import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import SeoHead from "./components/SeoHead";

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
      <SeoHead
        title="Tattoo Gallery Ujjain - Ink City Tattoo Studio Portfolio"
        description="View the latest tattoo gallery from Ink City Tattoo Studio, Ujjain. Explore custom tattoos, portrait tattoos, spiritual tattoos, and detailed body art work."
        canonicalPath="/gallery"
        keywords="tattoo gallery ujjain, tattoo portfolio, custom tattoo designs ujjain, realistic tattoo gallery"
        image="/images/servicesbanner.png"
      />
      <Header />
      <section className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <Image
          src="/images/servicesbanner.png"
          alt="Ink City Tattoo Gallery Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
              Gallery
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-3">
              Explore our latest tattoo work and artistic creations.
            </p>
            <div className="w-20 md:w-24 h-1 bg-[#F7A600] mx-auto mt-5"></div>
          </div>
        </div>
      </section>

      <main className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16">
        <div className="max-w-[1300px] mx-auto">
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
