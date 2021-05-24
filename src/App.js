import React from 'react';
import './App.css';
import { ARnft } from '@kalwalt/ar-nft';
import { ARnftThreejs } from '@webarkit/arnft-threejs';
import * as THREE from 'three'

ARnft.init(640, 480, "DataNFT/pinball", 'config.json', true)
  .then((nft) => {
    let mat = new THREE.MeshLambertMaterial({color: 0xff0000});
    let boxGeom = new THREE.BoxGeometry(1,1,1);
    let cube = new THREE.Mesh( boxGeom, mat);
    cube.position.z = 90;
    cube.scale.set(180,180,180);

    nft.add(cube);
  }).catch((error) => {
    console.log(error);
  });


function App() {
  return (
    <div>
    </div>
  );
}

export default App;
