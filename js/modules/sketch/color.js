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

// Set Color 

export function setColor() {
    if (getTheme(elementColorTheme.value) === "orange-purple") {
        colorFront = colorOrange;
        colorBack = colorPurple;
    }
    else if (getTheme(elementColorTheme.value) === "orange-black") {
        colorFront = colorOrange;
        colorBack = colorBlack;
    }
    else if (getTheme(elementColorTheme.value) === "orange-white") {
        colorFront = colorOrange;
        colorBack = colorWhite;
    }
    else if (getTheme(elementColorTheme.value) === "purple-orange") {
        colorFront = colorPurple;
        colorBack = colorOrange;
    }
    else if (getTheme(elementColorTheme.value) === "neon-black") {
        colorFront = colorNeon;
        colorBack = colorBlack;
    }
    else if (getTheme(elementColorTheme.value) === "black-neon") {
        colorFront = colorBlack;
        colorBack = colorNeon;
    }
}

// Export Variables

export {
    colorFront, colorBack
}