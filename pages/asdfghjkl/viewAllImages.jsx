"use client";

import React, { useEffect, useState } from "react";

export default function ViewAllImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/images/viewAllImages");
      const text = await res.text();
      if (text.trimStart().startsWith("<")) {
        throw new Error(
          "Server returned an error page. Check that the API route exists and the server is running."
        );
      }
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response from server.");
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch images.");
      }

      setImages(data.images || []);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const getImagePathFromUrl = (url) => {
    if (!url) return null;
    try {
      const decoded = decodeURIComponent(url);
      const match = decoded.match(/\/o\/(.+)\?/);
      return match && match[1] ? match[1] : null;
    } catch {
      return null;
    }
  };

  const handleDelete = async (url) => {
    const imagePath = getImagePathFromUrl(url);
    if (!imagePath) {
      alert("Could not determine image path for deletion.");
      return;
    }

    if (!confirm("Are you sure you want to delete this image?")) return;

    setDeleting(url);
    try {
      const res = await fetch("/api/images/deleteImages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imagePath }),
      });
      const text = await res.text();
      if (text.trimStart().startsWith("<")) {
        throw new Error(
          "Server returned an error page while deleting. Check the API route."
        );
      }
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response from server.");
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete image.");
      }

      setImages((prev) => prev.filter((img) => img !== url));
    } catch (err) {
      alert(err.message || "Failed to delete image.");
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex items-center justify-center min-h-[300px]">
        <p className="text-gray-500">Loading images...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        All Images
      </h2>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-600">
          {error}
        </div>
      )}

      {images.length === 0 && !error && (
        <div className="text-center py-12 text-gray-500 rounded-2xl bg-gray-50 border border-gray-200">
          No images found.
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((url) => (
          <div
            key={url}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
          >
            <img
              src={url}
              alt="Uploaded"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 break-all hover:underline"
              >
                {url}
              </a>
              <button
                type="button"
                onClick={() => handleDelete(url)}
                disabled={deleting === url}
                className="w-full py-2 px-4 rounded-full text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors disabled:opacity-50"
              >
                {deleting === url ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

