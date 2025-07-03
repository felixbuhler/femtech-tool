// Import Colors

import { colorBlack, colorWhite, colorNeon, colorOrange, colorPurple } from "../colors.js";

// Get GUI Element

const elementColorTheme = document.getElementById('color-theme');
let valueColorTheme = elementColorTheme.value;

// Separate Value

let colorFront = "red";
let colorBack = "black";

function getTheme(value) {
    [colorFront, colorBack] = value.split(':').map(String);
    return colorFront + "-" + colorBack;
}

console.log(getTheme(elementColorTheme.value));

elementColorTheme.addEventListener('change', () => {
    getTheme(elementColorTheme.value);
    setColor();
});

// Set Color 

export function setColor() {
    if (colorFront === "orange") {
        colorFront = colorOrange;
    }
    else if (colorFront === "purple") {
        colorFront = colorPurple;
    }
    else if (colorFront === "black") {
        colorFront = colorBlack;
    }
    else if (colorFront === "white") {
        colorFront = colorWhite;
    }
    else if (colorFront === "neon") {
        colorFront = colorNeon;
    }


    if (colorBack === "orange") {
        colorBack = colorOrange;
    }
    else if (colorBack === "purple") {
        colorBack = colorPurple;
    }
    else if (colorBack === "black") {
        colorBack = colorBlack;
    }
    else if (colorBack === "white") {
        colorBack = colorWhite;
    }
    else if (colorBack === "neon") {
        colorBack = colorNeon;
    }
}

// Export Variables

export {
    colorFront, colorBack
}