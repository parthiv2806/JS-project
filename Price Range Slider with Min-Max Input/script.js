const miniumprice=document.getElementById("minInput");
const maximumprice=document.getElementById("maxInput");
const minislider=document.getElementById("minSlider");
const maxslider=document.getElementById("maxSlider");

minSlider.addEventListener("input", () => {
    minInput.value = minSlider.value;
    if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
        maxSlider.value = minSlider.value;
        maxInput.value = minSlider.value;
    }
});

maxSlider.addEventListener("input", () => {
    maxInput.value = maxSlider.value;
    if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
        minSlider.value = maxSlider.value;
        minInput.value = maxSlider.value;
    }
});
minInput.addEventListener("input", () => {
    minSlider.value = minInput.value;
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
        maxInput.value = minInput.value;
        maxSlider.value = minInput.value;
    }
});

maxInput.addEventListener("input", () => {
    maxSlider.value = maxInput.value;
    if (parseInt(maxInput.value) < parseInt(minInput.value)) {
        minInput.value = maxInput.value;
        minSlider.value = maxInput.value;
    }
});