"use client";

import React, { useEffect, useState } from "react";

const parseJsonResponse = async (res) => {
  const text = await res.text();
  if (text.trimStart().startsWith("<")) {
    throw new Error(
      "Server returned an error page. Check that the API route exists and the server is running."
    );
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid response from server.");
  }
};

const formatDate = (value) => {
  if (!value) return "";
  const d = value?.toDate ? value.toDate() : new Date(value);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function ViewAllEntries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchEntries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/forms/viewAllEntries");
      const data = await parseJsonResponse(res);
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch entries.");
      }
      setEntries(data.entries || []);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = async (entryId) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;

    setDeletingId(entryId);
    try {
      const res = await fetch("/api/forms/deleteEntry", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entryId }),
      });
      const data = await parseJsonResponse(res);
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete entry.");
      }

      setEntries((prev) => prev.filter((e) => e.entryId !== entryId));
    } catch (err) {
      alert(err.message || "Failed to delete entry.");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex items-center justify-center min-h-[300px]">
        <p className="text-gray-500">Loading entries...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
        All Contact Entries
      </h2>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-600">
          {error}
        </div>
      )}

      {entries.length === 0 && !error && (
        <div className="text-center py-12 text-gray-500 rounded-2xl bg-gray-50 border border-gray-200">
          No entries found.
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols  gap-6">
        {entries.map((entry) => (
          <div
            key={entry.entryId}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{entry.name}</p>
                <p className="text-sm text-gray-500">{entry.email}</p>
                <p className="text-sm text-gray-500">{entry.phone}</p>
              </div>
              {entry.createdAt && (
                <p className="text-xs text-gray-400 text-right">
                  {formatDate(entry.createdAt)}
                </p>
              )}
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-700 whitespace-pre-wrap break-words">
                {entry.message}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => handleDelete(entry.entryId)}
                disabled={deletingId === entry.entryId}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors disabled:opacity-50"
              >
                {deletingId === entry.entryId ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

