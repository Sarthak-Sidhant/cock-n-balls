function calculateVolume() {
    const cockCylinderLength = parseFloat(document.getElementById("cock-cylinder-length").value);
    const cockCircumference = parseFloat(document.getElementById("cock-circumference").value);
    const ballDiameter = parseFloat(document.getElementById("ball-diameter").value);

    const cockRadius = cockCircumference / (2 * Math.PI);
    const cockConeVolume = (1 / 3) * Math.PI * cockRadius * cockRadius * cockCylinderLength;
    const cockCylinderVolume = Math.PI * cockRadius * cockRadius * cockCylinderLength;
    const ballRadius = ballDiameter / 2;
    const ballVolume = (4 / 3) * Math.PI * ballRadius * ballRadius * ballRadius;

    const totalVolume = cockConeVolume + cockCylinderVolume + 2 * ballVolume;
    document.getElementById("result").textContent = `Total Volume: ${totalVolume.toFixed(2)} cubic inches`;
}
