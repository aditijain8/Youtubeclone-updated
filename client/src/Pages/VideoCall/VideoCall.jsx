import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import VideoCall from "../../components/VideoCall/VideoCall";

function VideoCallPage() {
  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div style={{ marginLeft: '20px', width: '100%' }}>
        <VideoCall />
      </div>
    </div>
  );
}

export default VideoCallPage;

