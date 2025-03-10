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


let MouseX = 0, MouseY = 0;
window.addEventListener('mousemove', (Event) => {
    MouseX = (Event.clientX / window.innerWidth) * 2 - 1;
    MouseY = -(Event.clientY / window.innerHeight) * 2 + 1;
});


window.addEventListener('resize', () => {
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();
    GenerateGrid();
});

function UpdateDots() {
    Dots.forEach(Dot => {
        const Dist = Math.sqrt(
            Math.pow(Dot.position.x - MouseX * 10, 2) +
            Math.pow(Dot.position.y - MouseY * 10, 2)
        );
        Dot.scale.set(1 + Dist * 0.15, 1 + Dist * 0.15, 1);
    });
}

function Animate() {
    requestAnimationFrame(Animate);
    UpdateDots();
    Renderer.render(Scene, Camera);
}

GenerateGrid();
Animate();