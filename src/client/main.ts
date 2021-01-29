import { mat4 } from "gl-matrix";
import AmmoModule from "ammojs-typed";

let Ammo: typeof AmmoModule;
let gl: WebGLRenderingContext;
let output: HTMLDivElement;

function init()
{
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    gl = canvas.getContext("webgl");
    gl.clearColor(0.2, 0.2, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    output = document.getElementById("output") as HTMLDivElement;

    const vec = new Ammo.btVector3(1, 2, 3);
    output.innerHTML = `vec = (${vec.x()}, ${vec.y()}, ${vec.z()})<br>`;

    const matrix = mat4.create();
    output.innerHTML += `matrix = [${matrix}]`;
}

function main()
{
    AmmoModule().then((api) =>
    {
        Ammo = api;
        init();
    });
}

// Debug
main();

// Release
// window.onload = () => main();
