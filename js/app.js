// Imports

import { resizeSelection, elementAspectRatio } from "./modules/aspectRatio.js";
import { elementDistance, elementObjectBlur } from "./modules/gui.js";
import { colorPurple, colorOrange } from "./modules/colors.js";
import { selectObject } from "./modules/sketch/object.js";
import { setColor, colorFront, colorBack } from "./modules/sketch/color.js";

// Variables

let valueObjectBlur = elementObjectBlur.value;
let noiseLayer;

// Noise Generator

function generateNoise(pg) {
    pg.loadPixels();
    for (let i = 0; i < pg.pixels.length; i += 4) {
        let val = random(255);
        pg.pixels[i] = val;
        pg.pixels[i + 1] = val;
        pg.pixels[i + 2] = val;
        pg.pixels[i + 3] = 15;
    }
    pg.updatePixels();
}



// Setup Scene

function setup() {

    // Set low Framerate for GUI Performance



    // Init Canvas

    let artwork = createCanvas();
    artwork.parent('visual-canvas');
    artwork.id('visual-canvas-artwork');

    // Resize To Aspect Ratio

    resizeSelection();

    // Listen to Changes

    window.addEventListener('resize', resizeSelection);
    elementAspectRatio.addEventListener('change', resizeSelection);

    // Noise

    noiseLayer = createGraphics(windowWidth, windowHeight);
    noiseLayer.clear();

    // Set Colors

    setColor();

}

// Draw Scene

function draw() {

    // Variables

    let centerX = width / 2;
    let centerY = height / 2;
    let valueDistance = elementDistance.value * 0.002 * Math.min(width, height);
    elementDistance.addEventListener('change', () => { valueDistance = elementDistance.value });

    // Content

    background(colorBack);


    // Objects

    selectObject(centerX, centerY, width - valueDistance, height - valueDistance, colorFront);

    // Blur

    valueObjectBlur = parseFloat(elementObjectBlur.value);
    filter(BLUR, valueObjectBlur);

    // Noise

    generateNoise(noiseLayer);
    image(noiseLayer, 0, 0);
}

window.setup = setup;
window.draw = draw;