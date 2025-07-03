import { elementAspectRatio } from './gui.js'

// Get Value from Select Element

function getAspectRatio(value) {
    const [w, h] = value.split(':').map(Number);
    return w / h;
}

// Resize p5.js Canvas

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

