document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorPreview = document.getElementById("colorPreview");
    const hexCode = document.getElementById("hexCode");

    function updateColorPreview() {
        const redValue = parseInt(redInput.value);
        const greenValue = parseInt(greenInput.value);
        const blueValue = parseInt(blueInput.value);

        if (isNaN(redValue) || isNaN(greenValue) || isNaN(blueValue)) {
            return;
        }

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

    redInput.addEventListener("input", updateColorPreview);
    greenInput.addEventListener("input", updateColorPreview);
    blueInput.addEventListener("input", updateColorPreview);

    // Llama a la función una vez para inicializar la vista previa del color
    updateColorPreview();
});
