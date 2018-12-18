import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

export default class Planet
{
    constructor(_domEl)
    {
        // DOM
        this.$container = _domEl
        this.screen =
        {
            width: this.$container.offsetWidth,
            height: this.$container.offsetHeight
        }

        /**
         * THREE JS
         */

        // Camera
        this.cameraProps =
        {
            fov: 75,
            aspect: this.screen.width / this.screen.height,
            near: 1,
            far: 200,
            target: new THREE.Vector3(0, 0, 50)
        }
        this.camera = new THREE.PerspectiveCamera(
            this.cameraProps.fov,
            this.cameraProps.aspect,
            this.cameraProps.near,
            this.cameraProps.far
        )

        // Scene
        this.scene = new THREE.Scene()

        // Renderer
        this.renderer = new THREE.WebGLRenderer( { alpha: true } )

        // Controler
        this.controler = null
        this.controlerProps =
        {
            zoom:
            {
                min: 35,
                max: 110,
                speed: 0.2
            },
            rotateSpeed: 0.1,
            angle:
            {
                min: 1,
                max: Math.PI / 1.5
            },
            damping: 1
        }
        this.initControler()

        // Append Canvas
        this.$container.appendChild(this.renderer.domElement)

        /**
         * Events
         */
        window.addEventListener('resize', () => this.resize())

        /**
         * Animate
         */
        this.createParticles(100000, 0.05 * 5, 0xff2222, 20)
        this.createParticles(100000, 0.05 * 5, 0xff7979, 50)
        this.createParticles(10000, 0.05 * 5, 0xF3EED9, 60)
        this.loop = this.loop.bind(this)
        this.loop()
    }

    resize()
    {
        this.screen.width = this.$container.offsetWidth
        this.screen.height = this.$container.offsetHeight

        // keep aspect ratio of camera
        this.cameraProps.aspect = this.$container.offsetWidth / this.$container.offsetHeight
        this.camera.updateProjectionMatrix()
        
        this.$canvas = document.querySelector('canvas')
        this.$canvas.style.width = this.screen.width
        this.$canvas.style.height = this.screen.height
    }

    /**
     * Camera
     */
    initCamera()
    {
        this.camera.lookAt(this.cameraProps.target)
        this.camera.position.set(4, 0, 4)
    }

    /**
     * World
     */
    randParticles(_radius)
    {
        this.vector = new THREE.Vector3()

        this.x = THREE.Math.randFloat(-1, 1)
        this.y = THREE.Math.randFloat(-1, 1)
        this.z = THREE.Math.randFloat(-1, 1)
        this.normalize = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)

        this.vector.x = this.x * this.normalize * _radius
        this.vector.y = this.y * this.normalize * _radius
        this.vector.z = this.z * this.normalize * _radius

        return this.vector
    }

    createParticles(_amount, _particleSize, _color, _radius)
    {
        this.planet = new THREE.BufferGeometry()
        this.pos = []

        for(let i = 0; i < _amount; i++)
        {
            this.vertex = this.randParticles(_radius)
            this.pos.push(this.vertex.x, this.vertex.y, this.vertex.z)
        }
        this.planet.addAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3))

        // Apply png texture to our particles
        this.image = new Image()
        this.image.addEventListener('load', () => 
        {
            this.texture = new THREE.Texture(this.image)
            this.texture.needsUpdate = true
            this.texture.minFilter = THREE.LinearFilter
        })
        this.image.src = '../assets/images/particle.png'

        this.material = new THREE.PointsMaterial({ color: _color, size: _particleSize, map: this.texture, blending: THREE.AdditiveBlending })
        this.material.depthTest = false
        this.particles = new THREE.Points(this.planet, this.material)

        this.scene.add(this.particles)
    }

    /**
     * Controler
     */
    initControler()
    {
        this.controler = new OrbitControls(this.camera, this.renderer.domElement)
        this.controler.minDistance = this.controlerProps.zoom.min
        this.controler.maxDistance = this.controlerProps.zoom.max
        this.controler.rotateSpeed = this.controlerProps.zoom.speed
        this.controler.autoRotate = true
        this.controler.autoRotateSpeed = this.controlerProps.rotateSpeed
        this.controler.minPolarAngle = this.controlerProps.angle.min
        this.controler.maxPolarAngle = this.controlerProps.angle.max
        this.controler.enableDamping = true
        this.dampingFactor = this.controlerProps.damping
    }

    /**
     * Animate
     */
    update()
    {
        this.controler.update()
        this.renderer.setSize(this.screen.width, this.screen.height)
    }
    
    render()
    {
        this.renderer.render(this.scene, this.camera)
    }

    loop()
    {
        requestAnimationFrame(this.loop)
        this.update()
        this.render()
    }
}