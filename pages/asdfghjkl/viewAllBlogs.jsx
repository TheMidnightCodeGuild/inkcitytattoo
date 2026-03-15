"use client";

import React, { useState, useEffect } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export default function ViewAllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editModal, setEditModal] = useState(null); // { blog } or null
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const parseJsonResponse = async (res) => {
    const text = await res.text();
    if (text.trimStart().startsWith("<")) {
      throw new Error("Server returned an error page. Check that the API route exists and the server is running.");
    }
    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Invalid response from server.");
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/blogs/viewAllBlogs");
      const data = await parseJsonResponse(res);
      if (!res.ok) throw new Error(data.error || "Failed to fetch blogs.");
      setBlogs(data.blogs || []);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    setDeletingId(blogId);
    try {
      const res = await fetch("/api/blogs/deleteblogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId }),
      });
      const data = await parseJsonResponse(res);
      if (!res.ok) throw new Error(data.error || "Delete failed.");
      setBlogs((prev) => prev.filter((b) => b.blogId !== blogId));
    } catch (err) {
      alert(err.message || "Failed to delete blog.");
    } finally {
      setDeletingId(null);
    }
  };

  const openEditModal = (blog) => {
    setEditModal(blog);
    setEditTitle(blog.title || "");
    setEditSubtitle(blog.subtitle || "");
    setEditContent(blog.content || "");
    setEditFile(null);
    setEditPreview(null);
    setEditError(null);
  };

  const closeEditModal = () => {
    setEditModal(null);
    setEditTitle("");
    setEditSubtitle("");
    setEditContent("");
    setEditFile(null);
    setEditPreview(null);
    setEditError(null);
  };

  const handleEditFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    setEditError(null);
    if (!selectedFile) {
      setEditFile(null);
      setEditPreview(null);
      return;
    }
    if (!ACCEPTED_TYPES.includes(selectedFile.type)) {
      setEditError("Please select a valid image (JPEG, PNG, GIF, or WebP).");
      setEditFile(null);
      setEditPreview(null);
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setEditError("Image size must be less than 10MB.");
      setEditFile(null);
      setEditPreview(null);
      return;
    }
    setEditFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setEditPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editModal) return;
    setEditError(null);
    if (!editTitle.trim()) {
      setEditError("Title is required.");
      return;
    }
    if (!editSubtitle.trim()) {
      setEditError("Subtitle is required.");
      return;
    }
    if (!editContent.trim()) {
      setEditError("Content is required.");
      return;
    }

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append("blogId", editModal.blogId);
      formData.append("title", editTitle.trim());
      formData.append("subtitle", editSubtitle.trim());
      formData.append("content", editContent.trim());
      if (editFile) formData.append("image", editFile);

      const res = await fetch("/api/blogs/editBlogs", {
        method: "PUT",
        body: formData,
      });
      const data = await parseJsonResponse(res);
      if (!res.ok) throw new Error(data.error || "Update failed.");

      setBlogs((prev) =>
        prev.map((b) =>
          b.blogId === editModal.blogId
            ? { ...b, ...data.blog, blogId: b.blogId }
            : b
        )
      );
      closeEditModal();
    } catch (err) {
      setEditError(err.message || "Failed to update blog.");
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const d = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex items-center justify-center min-h-[300px]">
        <p className="text-gray-500">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        All Blogs
      </h2>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-600">
          {error}
        </div>
      )}

      {blogs.length === 0 && !error && (
        <div className="text-center py-12 text-gray-500 rounded-2xl bg-gray-50 border border-gray-200">
          No blogs yet.
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.blogId}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
          >
            {blog.imageUrl ? (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
            ) : (
              <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-manrope font-semibold text-lg text-gray-900 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-indigo-600 mt-1 line-clamp-1">
                {blog.subtitle}
              </p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-1">
                {blog.content}
              </p>
              {blog.createdAt && (
                <p className="text-xs text-gray-400 mt-2">
                  {formatDate(blog.createdAt)}
                </p>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => openEditModal(blog)}
                  className="flex-1 py-2 px-4 rounded-full text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(blog.blogId)}
                  disabled={deletingId === blog.blogId}
                  className="flex-1 py-2 px-4 rounded-full text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors disabled:opacity-50"
                >
                  {deletingId === blog.blogId ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-indigo-600 font-manrope text-xl font-semibold">
                  Edit Blog
                </h3>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Blog title"
                    disabled={saving}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={editSubtitle}
                    onChange={(e) => setEditSubtitle(e.target.value)}
                    placeholder="Short subtitle"
                    disabled={saving}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    placeholder="Blog content..."
                    rows={6}
                    disabled={saving}
                    className="w-full text-gray-600 placeholder-gray-400 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image (optional – leave unchanged or choose new)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={handleEditFileChange}
                      disabled={saving}
                      className="hidden"
                      id="edit-blog-image"
                    />
                    <label htmlFor="edit-blog-image" className="cursor-pointer block">
                      {editPreview ? (
                        <img src={editPreview} alt="New preview" className="max-h-32 mx-auto rounded-lg object-contain" />
                      ) : editModal.imageUrl ? (
                        <div className="flex items-center gap-3">
                          <img src={editModal.imageUrl} alt="Current" className="h-20 w-28 object-cover rounded-lg" />
                          <span className="text-sm text-gray-500">Current image – click to replace</span>
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm py-2">Click to select new image (optional)</div>
                      )}
                    </label>
                  </div>
                </div>

                {editError && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {editError}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 h-12 text-white font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={closeEditModal}
                    disabled={saving}
                    className="px-6 h-12 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
