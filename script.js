// var http = require('http'); // Import Node.js core module
// var fs =require('fs');
// var THREE = require("three");
// join = require("path").join;
// var three= fs.readFileSync('three.js');


var scene = new THREE.Scene();

var camera=new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight , 0.1,1000);


var renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 10, 0.1, 10);
var material = new THREE.MeshPhongMaterial({color: "#bf9000"});
var cube = new THREE.Mesh(geometry, material);
cube.position.y=-2;

scene.add(cube);

const geometrytorus = new THREE.TorusGeometry( 1, 0.2, 16, 100 );
const materialtorus = new THREE.MeshPhongMaterial( { color: 0x049ef4 } );
const torus = new THREE.Mesh( geometrytorus, materialtorus );

scene.add( torus );

camera.position.z = -2;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 3);
directionalLight.position.set(0,10,0);
scene.add(directionalLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var val1= 0x049ef4;
renderer.render( scene,camera);

var rota = 0.01;


function animate()
{
    requestAnimationFrame(animate);
    torus.rotation.x += rota;
    torus.rotation.y += rota;

    renderer.render( scene, camera );
}

animate();