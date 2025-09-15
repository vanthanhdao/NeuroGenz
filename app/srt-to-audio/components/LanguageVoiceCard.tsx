import React from 'react';

const LanguageVoiceCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Select Language and Voice</h2>
            <div className="mb-4">
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                <select id="language" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                </select>
            </div>
            <div>
                <label htmlFor="voice" className="block text-sm font-medium text-gray-700">Voice</label>
                <select id="voice" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
                    <option value="default">Default Voice</option>
                    <option value="voice1">Voice 1</option>
                    <option value="voice2">Voice 2</option>
                    {/* Add more voices as needed */}
                </select>
            </div>
        </div>
    );
};

export default LanguageVoiceCard;