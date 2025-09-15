import React from 'react';

const NavigationMenu = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
                <li>
                    <a href="/srt-to-audio" className="text-blue-600 hover:underline">
                        SRT to Audio
                    </a>
                </li>
                <li>
                    <a href="/another-feature" className="text-blue-600 hover:underline">
                        Another Feature
                    </a>
                </li>
                <li>
                    <a href="/settings" className="text-blue-600 hover:underline">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavigationMenu;