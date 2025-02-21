document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get("selectedNumber", function (data) {
        if (data.selectedNumber) {
            document.getElementById("selected-number").innerText = "Selected: " + data.selectedNumber;
        }
    });

    document.getElementById("convert").addEventListener("click", function () {
        let number = parseFloat(document.getElementById("selected-number").innerText.split(": ")[1]);
        let fromUnit = document.getElementById("from-unit").value;
        let toUnit = document.getElementById("to-unit").value;

        const conversionRates = {
            "cm": { "cm": 1, "m": 0.01, "in": 0.3937, "ft": 0.0328 },
            "m": { "cm": 100, "m": 1, "in": 39.37, "ft": 3.281 },
            "in": { "cm": 2.54, "m": 0.0254, "in": 1, "ft": 0.0833 },
            "ft": { "cm": 30.48, "m": 0.3048, "in": 12, "ft": 1 }
        };
        

        if (conversionRates[fromUnit] && conversionRates[fromUnit][toUnit]) {
            let result = number * conversionRates[fromUnit][toUnit];
            document.getElementById("result").innerText = `${result.toFixed(2)} ${toUnit}`;
        } else {
            document.getElementById("result").innerText = "Invalid conversion";
        }
    });
});
