import React, { useRef, useEffect } from "react";

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access user camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera access error:", err));
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%" }} />
    </div>
  );
};

export default CameraView;
