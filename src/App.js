import React from 'react';
import './App.css';
import { ARnft } from '@kalwalt/ar-nft';
import * as THREE from 'three'

ARnft.init(640, 480, "DataNFT/pinball", 'config.json', true)
  .then((nft) => {
    let mat = new THREE.MeshLambertMaterial()
    let cubeGeom = new THREE.CubeGeometry(1,1,1);
    let cube = new THREE.Mesh(cubeGeom, mat);
    cube.position.z = 90;
    cube.scale.set(180,180,180);

    nft.add(cube);
  }).catch((error) => {
    console.log(error);
  });


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
