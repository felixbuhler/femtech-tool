// Imports

import { resizeSelection, elementAspectRatio } from "./modules/aspectRatio.js";
import { elementDistance, elementObjectBlur } from "./modules/gui.js";
import { colorPurple, colorOrange } from "./modules/colors.js";
import { selectObject } from "./modules/sketch/object.js";
import { setColor, colorFront, colorBack } from "./modules/sketch/color.js";

// Variables

let valueObjectBlur = elementObjectBlur.value;


// Setup Scene

function setup() {

    // Set low Framerate for GUI Performance

    frameRate(12);

    // Init Canvas

    let artwork = createCanvas();
    artwork.parent('visual-canvas');
    artwork.id('visual-canvas-artwork');

    // Resize To Aspect Ratio

    resizeSelection();

    // Listen to Changes

    window.addEventListener('resize', resizeSelection);
    elementAspectRatio.addEventListener('change', resizeSelection);
}

// Draw Scene

function draw() {

    setColor();

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
}

window.setup = setup;
window.draw = draw;