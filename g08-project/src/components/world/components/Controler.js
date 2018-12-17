import Camera from './Camera.js'
import World from './World.js'

export default class Controler extends World
{
    constructor()
    {
        super()
        const camera = new Camera()

        this.mouse =
        {
            mouseX: 0,
            mouseXdown: 0,
            mouseY: 0,
            mouseYdown: 0
        }

        this.properties =
        {
            camera: camera.camera,
            renderer: new THREE.WebGLRenderer(),
            scene: this.scene,
            zoom:
            {
                min: 35,
                max: 110,
                speed: 0.2
            },
            speed: 0.1,
            angle:
            {
                min: 1,
                max: Math.PI / 1.5
            },
        }

        this.controler = null

        this.initControler()
    }

    initControler()
    {
        this.controler = new THREE.OrbitControls(this.properties.camera, this.properties.renderer.domElement)
        this.controler.minDistance = this.properties.zoom.min
        this.controler.maxDistance = this.properties.zoom.max
        this.controler.rotateSpeed = this.properties.zoom.speed
        this.controler.autoRotate = true
        this.controler.autoRotateSpeed = this.properties.speed
        this.controler.minPolarAngle = this.properties.angle.min
        this.controler.maxPolarAngle = this.properties.angle.max
        this.controler.enableDamping = true
        this.dampingFactor = 1
    }
}