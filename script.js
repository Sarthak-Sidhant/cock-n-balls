document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const cockCylinderLength = parseFloat(document.getElementById("cock-cylinder-length").value);
    const cockCircumference = parseFloat(document.getElementById("cock-circumference").value);
    const ballDiameter = parseFloat(document.getElementById("ball-diameter").value);

    const cockRadius = cockCircumference / (2 * Math.PI);
    const cockConeVolume = (1 / 3) * Math.PI * cockRadius * cockRadius * cockCylinderLength;
    const cockCylinderVolume = Math.PI * cockRadius * cockRadius * cockCylinderLength;
    const ballRadius = ballDiameter / 2;
    const ballVolume = (4 / 3) * Math.PI * ballRadius * ballRadius * ballRadius;

    const totalVolume = cockConeVolume + cockCylinderVolume + 2 * ballVolume;

    // Format user_data string
    const timestamp = new Date().toLocaleString();
    const userData = `Hello ${name}! Thanks for Visiting https://sarthaksidhant.me/cock-n-balls\nYou Visited Our Site at ${timestamp}\nHere are your cock-n-balls details:\nLength of the Cylinder: ${cockCylinderLength} inches\nCircumference of The Cylinder: ${cockCircumference} inches\nDiameter of The Balls: ${ballDiameter} inches\nVolume of Cock-n-Balls: ${totalVolume.toFixed(2)} cubic inches\nThe Units are in Inches.\n\nThanks For Visiting Our Site!\nThis Download will help you keep track of your medical records.`;

    document.getElementById("result").textContent = `Total Volume: ${totalVolume.toFixed(2)} cubic inches`;

    // Save data to .txt file with name and timestamp
    saveDataToFile(userData);
});

// Function to save data to .txt file
function saveDataToFile(data) {
    const filename = "user_cock-n-balls_details.txt";
    const blob = new Blob([data], { type: "text/plain" });

    // Create download link
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Cleanup
    document.body.removeChild(link);
}
