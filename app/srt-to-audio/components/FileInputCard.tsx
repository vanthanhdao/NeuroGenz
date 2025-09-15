"use client";

import React from "react";

const FileInputCard = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    // Handle file upload logic here
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Upload SRT File</h2>
      <input
        type="file"
        accept=".srt"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <p className="mt-2 text-gray-500">
        Select an SRT file to convert to audio.
      </p>
    </div>
  );
};

export default FileInputCard;
