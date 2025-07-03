// Aspect Ratio

// Imports

import { container } from "./elements.js";
import { padding } from "./padding.js";

// Variables

let artworkWidth = 0;
let artworkHeight = 0;

// Get GUI Element

const elementAspectRatio = document.getElementById('aspect-ratio');
let valueAspectRatio = elementAspectRatio.value;

// Convert Select Value to Variables

function getAspectRatio(value) {
    const [w, h] = value.split(':').map(Number);
    return w / h;
}

// Resize p5.js Canvas to Aspect Ratio

export function resizeSelection() {

    const aspectRatio = getAspectRatio(elementAspectRatio.value);
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    let newWidth, newHeight;

    if (containerWidth / containerHeight > aspectRatio) {
        // Container ist breiter als das gewünschte Verhältnis
        newHeight = containerHeight;
        newWidth = newHeight * aspectRatio;
    } else {
        // Container ist höher als das gewünschte Verhältnis
        newWidth = containerWidth;
        newHeight = newWidth / aspectRatio;
    }

    artworkWidth = newWidth - padding;
    artworkHeight = newHeight - padding;

    resizeCanvas(artworkWidth, artworkHeight);

}

export {
    elementAspectRatio
}