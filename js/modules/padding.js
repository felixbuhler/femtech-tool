let padding = window.getComputedStyle(document.documentElement).getPropertyValue('--padding');
padding = 2 * padding.substring(0, padding.length - 2);

export {
    padding
}