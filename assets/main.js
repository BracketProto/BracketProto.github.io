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
window.addEventListener('mousemove', (Event) => {
    Mouse.x = (Event.clientX / window.innerWidth) * 2 - 1;
    Mouse.y = -((Event.clientY / window.innerHeight) * 2 - 1);
});
const RainWorld = document.getElementsByClassName("rainworld")[0];
RainWorld.style.left = -25 + "vw";
RainWorld.style.top = -25 + "vh";

const clamp = (x, a, b) => Math.max(a, Math.min(x, b));
const lerp = (x, y, a) => x * (1 - a) + y * a;

let LastTime = performance.now();

function Animate() {
    let DeltaTime = (performance.now() - LastTime) / 1000;
    LastTime = performance.now();
    requestAnimationFrame(Animate);
    if(window.innerWidth == 0 || window.innerHeight == 0){
        return; 
    }
    const CurrentLeft = Number(RainWorld.style.left.toString().replace("vw", ""));
    const CurrentTop = Number(RainWorld.style.top.toString().replace("vh", ""));
    const ImageLeft = clamp(
        lerp(CurrentLeft, ((-Mouse.x - (1 / window.innerWidth) / 2) - 1) * 25, 2.5 * DeltaTime),
        -50,
        0
    );
    const ImageTop = clamp(
        lerp(CurrentTop, ((Mouse.y - (1 / window.innerHeight) / 2) - 1) * 25, 2.5 * DeltaTime),
        -50,
        0
    );
    RainWorld.style.left = ImageLeft.toString() + "vw";
    RainWorld.style.top = ImageTop.toString() + "vh";
}

Animate();
