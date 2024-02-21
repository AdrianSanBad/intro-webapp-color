document.addEventListener("DOMContentLoaded", function() {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const colorPreview = document.getElementById("colorPreview");
    const hexCode = document.getElementById("hexCode");

    function updateColorPreview() {
        const redValue = redRange.value;
        const greenValue = greenRange.value;
        const blueValue = blueRange.value;
        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorPreview.style.backgroundColor = color;
        hexCode.textContent = rgbToHex(redValue, greenValue, blueValue);
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    redRange.addEventListener("input", updateColorPreview);
    greenRange.addEventListener("input", updateColorPreview);
    blueRange.addEventListener("input", updateColorPreview);

    // Llama a la función una vez para inicializar la vista previa del color
    updateColorPreview();
});
