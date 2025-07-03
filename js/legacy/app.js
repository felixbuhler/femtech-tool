


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







// Export

function getDateString() {
    const now = new Date();
    const year = String(now.getFullYear() % 100).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate sind 0-basiert!
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}-${minutes}_${year}${month}${day}`;
}

function saveImage() {
    save('FT_Artwork_' + aspectRatioSelect.value + '_' + getDateString() + '.png');
}
