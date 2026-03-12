import React, { useState } from 'react';

function YouTubeFeature() {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Custom Feature</h1>
      <input 
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Paste YT Link"
        className="text-black p-2 mt-4"
      />
      {/* Your logic here */}
    </div>
  );
}

export default YouTubeFeature;
