class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
}


let Mouse = new Vector2();
window.addEventListener('mousemove', (event) => {
    Mouse.x = (event.clientX / window.innerWidth) * 2 - 1;  
    Mouse.y = -((event.clientY / window.innerHeight) * 2 - 1); 
});


const RainWorld = document.getElementsByClassName("rainworld")[0];
RainWorld.style.left = "-25vw"; 
RainWorld.style.top = "-25vh";

const clamp = (x, a, b) => Math.max(a, Math.min(x, b));
const lerp = (x, y, a) => x * (1 - a) + y * a;

let currentLeft = -25;
let currentTop = -25;
let lastTime = performance.now();

function animate(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    requestAnimationFrame(animate);

    if (window.innerWidth === 0 || window.innerHeight === 0) {
        return;
    }

    const targetLeft = (-Mouse.x - 1) * 25; 
    const targetTop = (Mouse.y - 1) * 25;

    currentLeft = lerp(currentLeft, targetLeft, 2.5 * deltaTime);
    currentTop = lerp(currentTop, targetTop, 2.5 * deltaTime);

    currentLeft = clamp(currentLeft, -50, 0);
    currentTop = clamp(currentTop, -50, 0);

    RainWorld.style.left = `${currentLeft}vw`;
    RainWorld.style.top = `${currentTop}vh`;
}

requestAnimationFrame(animate);