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
        this.image = null
        this.texture = null

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
        this.initCamera()

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

        // Get canvas
        this.$canvas = document.querySelector('canvas')

        /**
         * Events
         */
        window.addEventListener('resize', () => this.resize())

        /**
         * Planet Props
         */
        this.kernelProps =
        {
            amount: 100000,
            particleSize: 0.15,
            color: 0xff2222,
            radius: 20,
            get: false
        }
        this.surfaceProps =
        {
          amount: 100000,
          particleSize: 0.15,
          color: 0xff7979,
          radius: 50,
          get: false
        }
        this.atmosphereProps =
        {
          amount: 10000,
          particleSize: 0.15,
          color: 0xf3eed9,
          radius: 60,
          get: false
        }
        this.sateliteProps =
        {
            amount: 1000,
            particleSize: 0.05,
            color: 0xffffff,
            radius: 64,
            get: true
        }

        /**
         * Animate
         */
        this.createParticles(this.kernelProps.amount, this.kernelProps.particleSize, this.kernelProps.color, this.kernelProps.radius, this.kernelProps.get)
        this.createParticles(this.surfaceProps.amount, this.surfaceProps.particleSize, this.surfaceProps.color, this.surfaceProps.radius, this.surfaceProps.get)
        this.createParticles(this.atmosphereProps.amount, this.atmosphereProps.particleSize, this.atmosphereProps.color, this.atmosphereProps.radius, this.atmosphereProps.get)
        this.satelite = this.createParticles(this.sateliteProps.amount, this.sateliteProps.particleSize, this.sateliteProps.color, this.sateliteProps.radius, this.sateliteProps.get)

        this.loop = this.loop.bind(this)
        this.loop()
    }

    resize()
    {
        this.screen.width = window.innerWidth
        this.screen.height = window.innerHeight

        // keep aspect ratio of camera
        this.camera.aspect = this.screen.width / this.screen.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.screen.width / this.screen.height)
    }

    /**
     * Camera
     */
    initCamera()
    {
        this.camera.lookAt(this.cameraProps.target)
        this.camera.position.set(0, 0, this.cameraProps.far)
        this.camera.updateProjectionMatrix()
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

    // textureLoader()
    // {
    //     this.image = new Image()
    //     this.image.src = '../assets/images/particle.png'
    //     this.image.onload = () => {
    //         this.texture = new THREE.Texture(this.image)
    //         this.texture.needsUpdate = true
    //         this.texture.minFilter = THREE.LinearFilter
    //         console.log(this.texture)
    //         return this.texture
    //     }
    // }

    createParticles(_amount, _particleSize, _color, _radius, _isGet)
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

        this.material = new THREE.PointsMaterial(
            {
                color: _color,
                size: _particleSize,
                // map: this.texture,
                blending: THREE.AdditiveBlending 
            }
        )
        this.material.depthTest = false
        this.particles = new THREE.Points(this.planet, this.material)

        this.scene.add(this.particles)
        if(_isGet) {return this.particles}
    }

    rotateObject(_object, _xSpeed, _ySpeed)
    {
        _object.rotation.x += _xSpeed
        _object.rotation.y += _ySpeed
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
        this.controler.enablePan = false
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
        this.rotateObject(this.satelite, 0, -0.003)
        this.update()
        this.render()
    }
}