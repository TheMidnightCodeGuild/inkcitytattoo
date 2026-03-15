"use client";

import React, { useState } from "react";

// Import the components/pages you want to show on the dashboard
import UploadBlogs from "./uploadBlogs";
import ViewAllBlogs from "./viewAllBlogs";

// Optional: lazy load the `uploadImages.jsx` if it exists (or import it if present)
let UploadImages = null;
try {
  // Try requiring - may fail if file does not exist
  // eslint-disable-next-line import/no-unresolved
  UploadImages = require("./uploadImages").default;
} catch {}

// Import viewAllImages.jsx if it exists
let ViewAllImages = null;
try {
  // Try requiring - may fail if file does not exist
  // eslint-disable-next-line import/no-unresolved
  ViewAllImages = require("./viewAllImages").default;
} catch {}

// Import viewAllEntries.jsx
let ViewAllEntries = null;
try {
  ViewAllEntries = require("./viewAllEntries.jsx").default;
} catch {}

const COMPONENTS = [
  {
    key: "uploadBlogs",
    label: "Upload Blog",
    component: <UploadBlogs />
  },
  {
    key: "uploadImages",
    label: "Upload Images",
    component: UploadImages ? <UploadImages /> : <div>UploadImages.jsx not found.</div>
  },
  {
    key: "viewAllBlogs",
    label: "View All Blogs",
    component: <ViewAllBlogs />
  },
  {
    key: "viewAllImages",
    label: "View All Images",
    component: ViewAllImages ? <ViewAllImages /> : <div>viewAllImages.jsx not found.</div>
  },
  {
    key: "viewAllEntries",
    label: "View All Entries",
    component: ViewAllEntries ? <ViewAllEntries /> : <div>viewAllEntries.jsx not found.</div>
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(COMPONENTS[0].key);

  const renderComponent = () => {
    const found = COMPONENTS.find((tab) => tab.key === activeTab);
    return found ? found.component : null;
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="flex justify-center gap-6 mb-8">
        {COMPONENTS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-full font-medium transition 
              ${activeTab === tab.key
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md min-h-[450px]">
        {renderComponent()}
      </div>
    </div>
  );
}
