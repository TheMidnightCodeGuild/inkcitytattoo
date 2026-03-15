"use client";

import React, { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export default function UploadBlogs() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    setError(null);

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
      setError("Image size must be less than 10MB.");
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
    setError(null);
    setSuccess(null);

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!subtitle.trim()) {
      setError("Subtitle is required.");
      return;
    }
    if (!content.trim()) {
      setError("Content is required.");
      return;
    }
    if (!file) {
      setError("Please select a cover image.");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("subtitle", subtitle.trim());
      formData.append("content", content.trim());
      formData.append("image", file);

      const res = await fetch("/api/blogs/addBlogs", {
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

      setSuccess(data);
      setTitle("");
      setSubtitle("");
      setContent("");
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
    setTitle("");
    setSubtitle("");
    setContent("");
    setFile(null);
    setPreview(null);
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        Upload Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title"
            disabled={uploading}
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-4"
          />
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Short subtitle"
            disabled={uploading}
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-4"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog content..."
            rows={6}
            disabled={uploading}
            className="w-full text-gray-600 placeholder-gray-400 bg-white text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Image
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors bg-white">
            <input
              type="file"
              name="image"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleFileChange}
              disabled={uploading}
              className="hidden"
              id="blog-image-upload"
            />
            <label htmlFor="blog-image-upload" className="cursor-pointer block">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-40 mx-auto rounded-lg object-contain"
                />
              ) : (
                <div className="text-gray-500">
                  <svg
                    className="mx-auto h-10 w-10 text-gray-400"
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
                  <p className="mt-2 text-sm">Click to select cover image</p>
                  <p className="text-xs text-gray-400 mt-1">
                    JPEG, PNG, GIF or WebP (max 10MB)
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 space-y-2">
            <p className="text-sm text-green-700 font-medium">
              {success.message}
            </p>
            {success.blog && (
              <div className="text-sm text-gray-600">
                <p><span className="font-medium">Title:</span> {success.blog.title}</p>
                <p><span className="font-medium">ID:</span> {success.blogId}</p>
                {success.blog.imageUrl && (
                  <img
                    src={success.blog.imageUrl}
                    alt="Uploaded"
                    className="h-16 w-24 object-cover rounded mt-2"
                  />
                )}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={uploading}
            className="flex-1 h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload Blog"}
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
