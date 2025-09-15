import React from "react";

const AudioFilesCard = () => {
  const audioFiles: any[] = []; // This should be populated with the list of audio files

  return (
    <div className="bg-amber-500 shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Generated Audio Files</h2>
      {audioFiles.length === 0 ? (
        <p>No audio files generated yet.</p>
      ) : (
        <ul className="space-y-2">
          {audioFiles.map((file, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{file.name}</span>
              <a href={file.url} className="text-blue-500 hover:underline">
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AudioFilesCard;
