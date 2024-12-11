
const makeHistory = document.getElementById('btn-history').addEventListener('click', function () {
    const historyContainer = document.getElementById('history-container');

    // Create a new history entry dynamically
    const historyEntry = document.createElement('div');
    historyEntry.className = 'flex flex-col bg-gray-100 p-4 rounded-md shadow-sm mb-2';
    historyEntry.innerHTML = `
        <div class='text-lg font-bold'>${donatedAmountInt} Taka donated for ${cause}</div>
        <div class='text-sm text-gray-600'>Date: ${new Date().toLocaleString()}</div>
    `;
    historyContainer.appendChild(historyEntry);
})