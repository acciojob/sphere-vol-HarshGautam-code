function volume_sphere() {
    let r = document.getElementById("radius").value;
    let radius = parseFloat(r);
    let volume;

    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
    }

    document.getElementById("volume").value = volume;
    return false;
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};