import React from 'react';
import 'aframe';
import 'aframe-ar';

const MarkerScene = () => (
  <a-scene embedded arjs>
    <a-marker-camera preset="hiro"></a-marker-camera>
    <a-box position="0 0.5 0" material="color: red;"></a-box>
    <a-sphere position="1 1 0" radius="0.5" material="color: blue;"></a-sphere>
    {/* <a-marker-camera preset="hiro"></a-marker-camera> */}

  </a-scene>
);

export default MarkerScene;
