let padding = window.getComputedStyle(document.documentElement).getPropertyValue('--padding');
padding = 2 * padding.substring(0, padding.length - 2);

// Artwork

let artworkWidth = 300;
let artworkHeight = 600;

// Container & Canvas

const container = document.getElementById('visual-canvas');
const canvas = document.getElementById('visual-canvas-artwork');

// Aspect Ratio

const aspectRatioSelect = document.getElementById('aspect-ratio');

// Get Aspect Ratio

function getAspectRatio(value) {
    const [w, h] = value.split(':').map(Number);
    return w / h;
}

function resizeSelection() {
    const aspectRatio = getAspectRatio(aspectRatioSelect.value);
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

// Hi Res Export

function exportHighRes(targetLongEdge = 3000) {
    // Verhältnis wie bei der normalen Canvas
    const aspectRatio = width / height;

    // Zielgröße berechnen
    let exportW, exportH;
    if (aspectRatio >= 1) {
        exportW = targetLongEdge;
        exportH = exportW / aspectRatio;
    } else {
        exportH = targetLongEdge;
        exportW = exportH * aspectRatio;
    }

    // Offscreen-Grafik erzeugen
    const gfx = createGraphics(exportW, exportH);

    // Alles dort im gleichen Stil wie auf deiner normalen Canvas zeichnen
    drawArtwork(gfx);

    // Bild speichern

    function getDateString() {
        const now = new Date();
        const year = String(now.getFullYear() % 100).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate sind 0-basiert!
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}-${minutes}_${year}${month}${day}`;
    }

    save(gfx, 'FT_Artwork_' + aspectRatioSelect.value + '_' + getDateString() + '.png');
}


// GUI Values 

// Object Type
const elementObjectType = document.getElementById('object-type');
let valueObjectType = elementObjectType.value;

// Distance
const elementDistance = document.getElementById('distance');
let valueDistance = elementDistance.value;

// Object Blur
const elementObjectBlur = document.getElementById('object-blur');
let valueObjectBlur = elementObjectBlur.value;



// P5

function setup() {

    // Init Canvas
    let artwork = createCanvas(100, 100);
    artwork.parent('visual-canvas');
    artwork.id('visual-canvas-artwork');

    // Make right Size
    resizeSelection();
    window.addEventListener('resize', resizeSelection);
    aspectRatioSelect.addEventListener('change', resizeSelection);
}

function drawArtwork(g) {
    // GUI Values 
    valueDistance = height / 500 * elementDistance.value;
    valueObjectBlur = elementObjectBlur.value;

    console.log("BLUR" + valueObjectBlur)
    // Content
    g.background(220);


    g.stroke(0);
    g.fill("red");
    g.ellipse(width / 2, height / 2, width - valueDistance, height - valueDistance);
    g.filter(BLUR, valueObjectBlur);

}

function draw() {
    drawArtwork(this);
}