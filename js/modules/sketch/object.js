// Shadow

function dropShadow(size, color) {
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = size / 5;
    drawingContext.shadowColor = color;
}

// Ellipse

function drawEllipse(x, y, width, height, color) {
    dropShadow(width, "yellow");
    fill(color);
    ellipse(x, y, width, height);
}

// Squircle

function drawSquircle(x, y, width, height, color) {

    const borderRadius = 0.2 * Math.min(width, height);

    dropShadow(width, "yellow");
    fill(color);
    rectMode(CENTER);
    rect(x, y, width, height, borderRadius);
    
}

// Object Selection

const elementObjectType = document.getElementById('object-type');
let valueObjectType = elementObjectType.value;

function changeObjectType() {
    valueObjectType = elementObjectType.value;
}

elementObjectType.addEventListener('change', changeObjectType);

export function selectObject(centerX, centerY, width, height, color) {

    if (valueObjectType === "ellipse") {
        drawEllipse(centerX, centerY, width, height, color)
    }
    else if (valueObjectType === "squircle") {
        drawSquircle(centerX, centerY, width, height, color)
    }
    else if (valueObjectType === "logo") {
        console.log("Logo")
    }
}