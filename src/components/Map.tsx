// IframeMap.tsx
import React from "react";

const Map = () => {
  return (
    <iframe
      className="w-full h-screen"
      src="https://storage.googleapis.com/maps-solutions-maxw2h0xfs/locator-plus/1bug/locator-plus.html"
      style={{ border: 0 }}
      loading="lazy"
      title="Google Maps Locator"
    ></iframe>
  );
};

export default Map;
