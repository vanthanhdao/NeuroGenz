import React from "react";
import FileInputCard from "./components/FileInputCard";
import AudioFilesCard from "./components/AudioFilesCard";
import NavigationMenu from "./components/NavigationMenu";
import LanguageVoiceCard from "./components/LanguageVoiceCard";

const Page: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <FileInputCard />
        <AudioFilesCard />
      </div>
      <div className="w-1/4 p-4">
        <NavigationMenu />
        <LanguageVoiceCard />
      </div>
    </div>
  );
};

export default Page;
