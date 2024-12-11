document.addEventListener("DOMContentLoaded", function () {
    const donationButtons = {
        nk: document.getElementById("btn-donate-now-nk"),
        fn: document.getElementById("btn-donate-now-fn"),
        qt: document.getElementById("btn-donate-now-qt"),
    };

    const donationFields = {
        nk: document.getElementById("donation-field-nk"),
        fn: document.getElementById("donation-field-fn"),
        qt: document.getElementById("donation-field-qt"),
    };

    const historyContainer = document.getElementById("history-container");

    function updateHistory(locationId, donationField) {
        const donationAmount = parseInt(donationField.value);
        if (!donationAmount || donationAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        const locationNames = {
            nk: "Flood at Noakhali",
            fn: "Flood Relief in Feni",
            qt: "Quota Movement Injuries",
        };

        const historyEntry = document.createElement("div");
        historyEntry.className =
            "flex justify-between bg-gray-200 p-4 rounded-md shadow-md";
        historyEntry.innerHTML = `
            <div>${locationNames[locationId]}</div>
            <div>${donationAmount} BDT</div>
        `;

        historyContainer.appendChild(historyEntry);

        donationField.value = ""; // Clear the input field
    }

    // Attach event listeners to donation buttons
    donationButtons.nk.addEventListener("click", function () {
        updateHistory("nk", donationFields.nk);
    });

    donationButtons.fn.addEventListener("click", function () {
        updateHistory("fn", donationFields.fn);
    });

    donationButtons.qt.addEventListener("click", function () {
        updateHistory("qt", donationFields.qt);
    });
});
