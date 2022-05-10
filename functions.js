const tilepos = [
    [0, -1, 0], //first tile
    [0, 0.5, -2.55], //second tile
    [0, 2, -5.1], //third tile
    [0, 3.5, -7.65], //fourth tile
    [0, 5, -10.2] //fifth tile
];

const colors = [0xc89bd4, 0xf7cc74, 0xa8cded];

function changePosition(cube, order){
    cube.position.x = tilepos[order][0];
    cube.position.y = tilepos[order][1];
    cube.position.z = tilepos[order][2];

}
function initializeTile(tileColor){
    const geometry = new THREE.BoxGeometry(4, 0.1, 4);
    const material = new THREE.MeshBasicMaterial( { color: colors[tileColor] } );
    const cube = new THREE.Mesh( geometry, material );
    cube.rotation.x = -100;
    return cube;
}