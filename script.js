document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorPreview = document.getElementById("colorPreview");
    const hexCode = document.getElementById("hexCode");

    function updateColorPreview() {
        const color = colorPicker.value;
        const redValue = parseInt(color.substring(1, 3), 16);
        const greenValue = parseInt(color.substring(3, 5), 16);
        const blueValue = parseInt(color.substring(5, 7), 16);

        redInput.value = redValue;
        greenInput.value = greenValue;
        blueInput.value = blueValue;

        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorPreview.style.backgroundColor = rgbColor;
        hexCode.textContent = color.toUpperCase();
    }

    colorPicker.addEventListener("input", updateColorPreview);
    redInput.addEventListener("input", updateColorFromInputs);
    greenInput.addEventListener("input", updateColorFromInputs);
    blueInput.addEventListener("input", updateColorFromInputs);

    // Llama a la función una vez para inicializar la vista previa del color
    updateColorPreview();

    function updateColorFromInputs() {
        const redValue = parseInt(redInput.value);
        const greenValue = parseInt(greenInput.value);
        const blueValue = parseInt(blueInput.value);

        if (isNaN(redValue) || isNaN(greenValue) || isNaN(blueValue)) {
            return;
        }

        const hexColor = rgbToHex(redValue, greenValue, blueValue);
        colorPicker.value = hexColor;
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorPreview.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor.toUpperCase();
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
});
