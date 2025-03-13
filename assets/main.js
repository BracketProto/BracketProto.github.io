let Mouse = new THREE.Vector2();
window.addEventListener('mousemove', (Event) => {
    Mouse.x = (Event.clientX / window.innerWidth) * 2 - 1;
    Mouse.y = -((Event.clientY / window.innerHeight) * 2 - 1);
});
const RainWorld = document.getElementsByClassName("rainworld")[0];

//THREEJS

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
const Opacity = 0.25;
const DotMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(1 * Opacity, 1 * Opacity, 1 * Opacity) });

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

let MouseWorld = new THREE.Vector3();

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

const lerp = (x, y, a) => x * (1 - a) + y * a;

let LastTime = performance.now();

function Animate() {
    let DeltaTime = (performance.now() - LastTime) / 1000;
    LastTime = performance.now();
    requestAnimationFrame(Animate);
    if(window.innerWidth == 0 || window.innerHeight == 0){
        return; 
    }
    UpdateDots();
    Renderer.render(Scene, Camera);
    const CurrentLeft = Number(RainWorld.style.left.toString().replace("vw", ""));
    const CurrentTop = Number(RainWorld.style.top.toString().replace("vh", ""));
    const ImageLeft = THREE.MathUtils.clamp(
        lerp(CurrentLeft, ((-Mouse.x - (1 / window.innerWidth) / 2) - 1) * 25, 2.5 * DeltaTime),
        -50,
        0
    );
    const ImageTop = THREE.MathUtils.clamp(
        lerp(CurrentTop, ((Mouse.y - (1 / window.innerHeight) / 2) - 1) * 25, 2.5 * DeltaTime),
        -50,
        0
    );
    RainWorld.style.left = ImageLeft.toString() + "vw";
    RainWorld.style.top = ImageTop.toString() + "vh";
}

GenerateGrid();
Animate();
