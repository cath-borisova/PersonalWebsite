const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, (window.innerWidth / window.innerHeight), 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cube1 = initializeTile(0);
scene.add(cube1);

const cube2 = initializeTile(1);
scene.add(cube2);

const cube3 = initializeTile(2);
scene.add(cube3);

const cube4 = initializeTile(0);
scene.add(cube4);

const cube5 = initializeTile(1);
scene.add(cube5);

const geometry = new THREE.BoxGeometry(4, 0.1, 4);
const material = new THREE.MeshBasicMaterial( { color: 0x000000} );
const dice = new THREE.Mesh( geometry, material );

camera.position.z = 5;

changePosition(cube1, 0);
changePosition(cube2, 1);
changePosition(cube3, 2);
changePosition(cube4, 3);
changePosition(cube5, 4);
function animate() {
	requestAnimationFrame( animate );


	renderer.render( scene, camera );
	};

animate();