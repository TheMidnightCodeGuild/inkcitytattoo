import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CategoryImages = ({ categoryName, className = "" }) => {
  const router = useRouter();
  const queryCategory =
    typeof router.query?.category === "string" ? router.query.category : "";
  const activeCategory = categoryName || queryCategory;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      if (!activeCategory) {
        setImages([]);
        setError("Category is required.");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const query = encodeURIComponent(activeCategory);
        const response = await fetch(
          `/api/categories/getCategoryImages?category=${query}`
        );
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          const message = [data?.error, data?.details, data?.code]
            .filter(Boolean)
            .join(" | ");
          throw new Error(message || "Failed to fetch images.");
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
  }, [activeCategory]);

  return (
    <section className={`max-w-[1300px] mx-auto px-4 py-10 ${className}`}>
      <h1 className="text-2xl md:text-4xl font-bold text-[#002D62] mb-6">
        {activeCategory ? `${activeCategory} Images` : "Category Images"}
      </h1>
      {loading && <p className="text-sm text-gray-600">Loading images...</p>}

      {!loading && error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && images.length === 0 && (
        <p className="text-sm text-gray-600">No images found in this category.</p>
      )}

      {!loading && !error && images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.fullPath}
              className="rounded-lg overflow-hidden border border-gray-200 bg-white"
            >
              <img
                src={image.url}
                alt={image.name || activeCategory}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryImages;
