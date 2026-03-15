"use client";

import React, { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export default function UploadImages() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    setError(null);
    setUploadedUrl(null);

    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      return;
    }

    if (!ACCEPTED_TYPES.includes(selectedFile.type)) {
      setError("Please select a valid image (JPEG, PNG, GIF, or WebP).");
      setFile(null);
      setPreview(null);
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File size must be less than 10MB.");
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/images/addImages", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      if (text.trimStart().startsWith("<")) {
        throw new Error("Server returned an error page. Check that the API route exists and the server is running.");
      }
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response from server.");
      }

      if (!res.ok) {
        throw new Error(data.error || "Upload failed.");
      }

      setUploadedUrl(data.imageUrl);
      setFile(null);
      setPreview(null);
      e.target.reset();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setUploadedUrl(null);
    setError(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        Upload Image
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
          <input
            type="file"
            name="image"
            accept="image/jpeg,image/png,image/gif,image/webp"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer block"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-lg object-contain"
              />
            ) : (
              <div className="text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm">Click to select an image</p>
                <p className="text-xs text-gray-400 mt-1">
                  JPEG, PNG, GIF or WebP (max 10MB)
                </p>
              </div>
            )}
          </label>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        {uploadedUrl && (
          <div className="space-y-2">
            <p className="text-sm text-green-600 font-medium">
              Image uploaded successfully!
            </p>
            <div className="flex items-center gap-3">
              <img
                src={uploadedUrl}
                alt="Uploaded"
                className="h-20 w-20 rounded-lg object-cover border border-gray-200"
              />
              <a
                href={uploadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm truncate max-w-[200px]"
              >
                View image
              </a>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!file || uploading}
            className="flex-1 h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={uploading}
            className="px-6 h-12 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
