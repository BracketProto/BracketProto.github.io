const Scene = new THREE.Scene();
Scene.background = new THREE.Color(0x0b0c14);

const Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
Camera.position.z = 30;

const Renderer = new THREE.WebGLRenderer();
Renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Renderer.domElement);

// Dot Parameters
const DotRadius = 0.05;
const DotDistance = 1.5;
const DotMaterial = new THREE.MeshBasicMaterial({ color: 0x1b1c29 });

const Geometry = new THREE.SphereGeometry(DotRadius, 16, 16);
const Dots = new Set();

function GenerateGrid() {
    Dots.forEach(Dot => Scene.remove(Dot));
    Dots.clear();

    const FovRad = (Camera.fov * Math.PI) / 180;
    const VisibleHeight = 2 * Math.tan(FovRad / 2) * Math.abs(Camera.position.z);
    const VisibleWidth = VisibleHeight * Camera.aspect;

    const Cols = Math.ceil(VisibleWidth / DotDistance);
    const Rows = Math.ceil(VisibleHeight / DotDistance);

    for (let I = -Cols / 2; I < Cols / 2; I++) {
        for (let J = -Rows / 2; J < Rows / 2; J++) {
            const Dot = new THREE.Mesh(Geometry, DotMaterial);
            Dot.position.set(I * DotDistance, J * DotDistance, 0);
            Scene.add(Dot);
            Dots.add(Dot);
        }
    }
}

let Mouse = new THREE.Vector2();
let MouseWorld = new THREE.Vector3();

window.addEventListener('mousemove', (Event) => {
    Mouse.x = (Event.clientX / window.innerWidth) * 2 - 1;
    Mouse.y = -((Event.clientY / window.innerHeight) * 2 - 1);
});

function UpdateDots() {
    // Create a ray from the camera through the mouse position
    const Raycaster = new THREE.Raycaster();
    const MouseVector = new THREE.Vector2(Mouse.x, Mouse.y);
    Raycaster.setFromCamera(MouseVector, Camera);

    // Find intersection with the z=0 plane
    const PlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Plane at z = 0
    const MouseWorld = new THREE.Vector3();
    Raycaster.ray.intersectPlane(PlaneZ, MouseWorld); // Get intersection point

    // Scale dots based on distance from the mouse pointer
    Dots.forEach(Dot => {
        const Distance = Dot.position.distanceTo(MouseWorld);

        // Apply non-linear scaling for a smooth effect
        const ScaleFactor = THREE.MathUtils.clamp(2 / (Distance + 1), .1, 5); 

        Dot.scale.set(1/ScaleFactor/3, 1/ScaleFactor/3, 0.1);
    });
}


window.addEventListener('resize', () => {
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();
    GenerateGrid();
});

function Animate() {
    requestAnimationFrame(Animate);
    UpdateDots();
    Renderer.render(Scene, Camera);
}

GenerateGrid();
Animate();
