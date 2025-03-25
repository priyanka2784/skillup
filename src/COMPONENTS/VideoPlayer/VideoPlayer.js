import React from "react";
import ABOUTUSVIDEO from "../../Assets/Video/aboutus.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <video
        src={ABOUTUSVIDEO}
        width={"100%"}
        height={"600px"}
        controls={true}
        autoPlay={true}
        loop={true}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
