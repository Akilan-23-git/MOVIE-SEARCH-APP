import React, { useRef, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const FoodDetector = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load();
      const video = videoRef.current;

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.onloadeddata = () => {
            detectFrame(video, model);
          };
        });
    };

    const detectFrame = (video, model) => {
      model.detect(video).then((predictions) => {
        renderPredictions(predictions);
        requestAnimationFrame(() => detectFrame(video, model));
      });
    };

    const renderPredictions = (predictions) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = "#00FF00";
        ctx.fillText(
          `${prediction.class} - ${Math.round(prediction.score * 100)}%`,
          x,
          y > 10 ? y - 5 : 10
        );
      });
    };

    loadModelAndDetect();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%" }} />
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default FoodDetector;
