import React, { useState } from "react";

const CATEGORIES = [
  "Script tattoo",
  "Spiritual tattoo",
  "Line art",
  "Black tattoo",
  "Color tattoo",
  "Mandala tattoo",
  "Geometric tattoo",
  "Human portraits",
  "Animal portraits",
  "Water color tattoo",
  "Dot work",
  "Black and grey realism",
  "Piercing",
  "Tattoo removal",
  "Temporary tattoos",
  "Vitiligo",
  "Tattoo training",
  "Female tattoo artist",
  "Micro pigmentation",
];

const UploadImageToCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [categoryImages, setCategoryImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [deletingPath, setDeletingPath] = useState("");

  const fetchCategoryImages = async (category) => {
    setIsLoadingImages(true);
    try {
      const query = encodeURIComponent(category);
      const res = await fetch(`/api/categories/listImages?category=${query}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = [data?.error, data?.details, data?.code]
          .filter(Boolean)
          .join(" | ");
        setStatus(message || "Failed to fetch images");
        setCategoryImages([]);
        return;
      }
      setCategoryImages(Array.isArray(data.images) ? data.images : []);
    } catch (err) {
      setStatus(err?.message || "Failed to fetch images");
      setCategoryImages([]);
    } finally {
      setIsLoadingImages(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setStatus("");
    setSelectedFiles([]);
    setCategoryImages([]);
    fetchCategoryImages(category);
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files || []));
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFiles.length || !selectedCategory) {
      setStatus("Please select a category and one or more image files.");
      return;
    }
    setIsUploading(true);
    setStatus("");
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => formData.append("images", file));
      formData.append("category", selectedCategory);

      const res = await fetch("/api/categories/addImage", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        const count = data?.uploadedCount || selectedFiles.length;
        setStatus(`${count} image(s) uploaded successfully!`);
        setSelectedFiles([]);
        await fetchCategoryImages(selectedCategory);
      } else {
        const message = [data?.error, data?.details, data?.code]
          .filter(Boolean)
          .join(" | ");
        setStatus(message || "Failed to upload image");
      }
    } catch (err) {
      setStatus(err?.message || "An unexpected error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async (fullPath) => {
    if (!fullPath) return;
    setDeletingPath(fullPath);
    setStatus("");

    try {
      const res = await fetch("/api/categories/deleteImage", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullPath }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = [data?.error, data?.details, data?.code]
          .filter(Boolean)
          .join(" | ");
        setStatus(message || "Failed to delete image");
        return;
      }
      setStatus("Image deleted successfully!");
      setCategoryImages((prev) => prev.filter((item) => item.fullPath !== fullPath));
    } catch (err) {
      setStatus(err?.message || "Failed to delete image");
    } finally {
      setDeletingPath("");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8 sm:my-12 px-2">
      {!selectedCategory ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className="w-full px-3 sm:px-4 py-2 rounded bg-blue-600 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold shadow transition"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setCategoryImages([]);
                setStatus("");
                setSelectedFiles([]);
              }}
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs font-semibold"
            >
              &larr; Go Back
            </button>
            <span className="text-base sm:text-lg font-bold text-blue-700 break-words">
              {selectedCategory}
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            encType="multipart/form-data"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border rounded px-3 py-2 w-full sm:w-auto"
              multiple
            />
            <button
              type="submit"
              disabled={isUploading || !selectedFiles.length}
              className="px-6 py-2 rounded bg-blue-700 hover:bg-blue-900 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isUploading ? "Uploading..." : "Upload Images"}
            </button>
          </form>
          {selectedFiles.length > 0 && (
            <p className="text-sm text-gray-600 -mt-2">
              {selectedFiles.length} image(s) selected
            </p>
          )}

          <div className="mt-6">
            <h3 className="text-base font-bold text-gray-800 mb-3">
              Existing Images in {selectedCategory}
            </h3>
            {isLoadingImages ? (
              <p className="text-sm text-gray-600">Loading images...</p>
            ) : categoryImages.length === 0 ? (
              <p className="text-sm text-gray-600">No images found in this category.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categoryImages.map((item) => (
                  <div
                    key={item.fullPath}
                    className="border rounded-lg p-2 bg-white shadow-sm"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-28 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(item.fullPath)}
                      disabled={deletingPath === item.fullPath}
                      className="w-full mt-2 px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {deletingPath === item.fullPath ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {status && (
            <div
              className={`text-center font-semibold ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadImageToCategory;
