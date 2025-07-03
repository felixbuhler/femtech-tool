let elementObjectType, valueObjectType;
let elementDistance, valueDistance;
let elementObjectBlur, valueObjectBlur;
let elementColorTheme, valueColorTheme;
let elementAspectRatio;

export function initGuiElements() {
    elementObjectType = document.getElementById('object-type');
    valueObjectType = elementObjectType.value;

    elementDistance = document.getElementById('distance');
    valueDistance = elementDistance.value;

    elementObjectBlur = document.getElementById('object-blur');
    valueObjectBlur = elementObjectBlur.value;

    elementColorTheme = document.getElementById('color-theme');
    valueColorTheme = elementColorTheme.value;

    elementAspectRatio = document.getElementById('aspect-ratio');
}

// Exportiere auch die Elemente
export {
    elementObjectType,
    valueObjectType,
    elementDistance,
    valueDistance,
    elementObjectBlur,
    valueObjectBlur,
    elementColorTheme,
    valueColorTheme,
    elementAspectRatio
};