import React from 'react';
import 'aframe';

const ARScene = () => (
  <a-scene arjs="sourceType: webcam;">
    <a-box position="0 1 -3" rotation="0 45 0" color="blue"></a-box>
    <a-sphere position="2 1 -5" radius="1.25" color="red"></a-sphere>
    <a-camera position="0 0 0" look-controls-enabled></a-camera>
  </a-scene>
);

export default ARScene;
