import './App.css'
import { ARnft } from '@webarkit/ar-nft';
import * as ARnftThreejs  from '@webarkit/arnft-threejs';
import * as THREE from 'three'

const pathName = window.location.pathname
let config;
console.log(pathName);
if (pathName === '/ARnft-ES6-react'){
  config = '/ARnft-ES6-react/config.json'
} else {
  config = 'config.json'
}

let width = 640;
let height = 480;
ARnft.init(width, height, [["./DataNFT/pinball"]], [['pinball']], config, true)
  .then((nft) => {
    let mat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    let boxGeom = new THREE.BoxGeometry(1, 1, 1);
    let cube = new THREE.Mesh(boxGeom, mat);
    cube.position.z = 90;
    cube.scale.set(180, 180, 180);

    let root = new THREE.Object3D();
    root.matrixAutoUpdate = false;
    document.addEventListener('containerEvent', function (ev) {

      if(ev.type === 'containerEvent'){
        console.log('Container created...');
      }

      let canvas = document.getElementById('canvas');
      let fov = 0.8 * 180 / Math.PI;
      let ratio = width / height;
      let config = {
        "renderer": {
          "alpha": true,
          "antialias": true,
          "context": null,
          "precision": "mediump",
          "premultipliedAlpha": true,
          "stencil": true,
          "depth": true,
          "logarithmicDepthBuffer": true
        },
        "camera": {
          "fov": fov,
          "ratio": ratio,
          "near": 0.01,
          "far": 1000
        }
      }

      let sceneThreejs = new ARnftThreejs.SceneRendererTJS(config, canvas, nft.uuid, true);
      sceneThreejs.initRenderer();

      let nftAddTJS = new ARnftThreejs.NFTaddTJS(nft.uuid);
      nftAddTJS.add(cube, 'pinball', false);

      const tick = () => {
        sceneThreejs.draw();
        window.requestAnimationFrame(tick)
      }
      tick()

    })
  }).catch((error) => {
    console.log(error);
  });


function App() {
  return (
    <>
    </>
  )
}

export default App
