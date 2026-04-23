"use client";

import React, { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export default function UploadImages() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    previews.forEach((url) => URL.revokeObjectURL(url));
    setError(null);
    setUploadedUrls([]);

    if (!selectedFiles.length) {
      setFiles([]);
      setPreviews([]);
      return;
    }

    const invalidType = selectedFiles.some(
      (selectedFile) => !ACCEPTED_TYPES.includes(selectedFile.type),
    );
    if (invalidType) {
      setError("Please select valid images (JPEG, PNG, GIF, or WebP).");
      setFiles([]);
      setPreviews([]);
      return;
    }

    const invalidSize = selectedFiles.some(
      (selectedFile) => selectedFile.size > MAX_FILE_SIZE,
    );
    if (invalidSize) {
      setError("Each file size must be less than 10MB.");
      setFiles([]);
      setPreviews([]);
      return;
    }

    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((selectedFile) => URL.createObjectURL(selectedFile)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.length) {
      setError("Please select at least one image first.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("images", file));

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

      setUploadedUrls(data.imageUrls || (data.imageUrl ? [data.imageUrl] : []));
      previews.forEach((url) => URL.revokeObjectURL(url));
      setFiles([]);
      setPreviews([]);
      e.target.reset();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  const handleReset = () => {
    previews.forEach((url) => URL.revokeObjectURL(url));
    setFiles([]);
    setPreviews([]);
    setUploadedUrls([]);
    setError(null);
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        Upload Image
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-5 sm:p-8 text-center hover:border-indigo-400 transition-colors">
          <input
            type="file"
            name="images"
            accept="image/jpeg,image/png,image/gif,image/webp"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
            id="image-upload"
            multiple
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer block"
          >
            {previews.length ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {previews.map((preview, index) => (
                  <img
                    key={`${preview}-${index}`}
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="h-24 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
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
                <p className="mt-2 text-sm">Click to select one or more images</p>
                <p className="text-xs text-gray-400 mt-1">
                  JPEG, PNG, GIF or WebP (max 10MB each)
                </p>
              </div>
            )}
          </label>
        </div>

        {files.length > 0 && (
          <p className="text-sm text-gray-600">{files.length} image(s) selected</p>
        )}

        {error && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        {uploadedUrls.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-green-600 font-medium">
              {uploadedUrls.length} image(s) uploaded successfully!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {uploadedUrls.map((url, index) => (
                <a
                  key={`${url}-${index}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={url}
                    alt={`Uploaded ${index + 1}`}
                    className="h-20 w-full rounded-lg object-cover border border-gray-200"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={!files.length || uploading}
            className="flex-1 h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload Images"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={uploading}
            className="px-6 h-12 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
