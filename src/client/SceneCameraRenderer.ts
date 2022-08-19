//You always need a scene, camera, and a renderer
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//Where you place objects, lights, and cameras. 
//We can have multiple scenes in one project.
const scene = new THREE.Scene()

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10)
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)

camera1.position.z = 2
camera2.position.y = 1

// A vector representing a position in world space.
//Optionally, the x,y, and z components of the world space position.

camera2.lookAt(new THREE.Vector3(0, 0, 0))
camera3.position.z = 1
camera4.position.x = 1
camera4.lookAt(new THREE.Vector3(0, 0, 0))

// The perspective Camera is designed to mimic the way the human eye sees.
// FOV, width/height, aspect ratio, near/far

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 2

const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const canvas3 = document.getElementById('c3') as HTMLCanvasElement
const canvas4 = document.getElementById('c4') as HTMLCanvasElement

// Renders my beautiful scene
// By default it uses WebGL
// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
renderer1.setSize(200, 200)
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
renderer2.setSize(200, 200)
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 })
renderer3.setSize(200, 200)
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 })
renderer4.setSize(200, 200)

//There is the orthographic projection is like a cube
//Where the perspective remains constant regardless of it's distance
// new OrbitControls(camera, renderer.domElement)

new OrbitControls(camera1, renderer1.domElement)

//The OrthographicCamera constructor expects the values to be in
//3D world units

//Making a cube!
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    // The color for the material
    color: 0x00ff00,
    // Show the meshes of the block
    wireframe: true,
})

//Combining the shape and material of the cube
const cube = new THREE.Mesh(geometry, material)

//Adding cube to the scene
scene.add(cube)

// Does not allow resize for the project
// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    //I did not know this was a Web API
    //Tells the browser that you wish to perform an animation that
    //requests that the browser calls a specified function to update
    //an animation before the next repaint.
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)
}

animate()