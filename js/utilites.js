const currentBalance = document.getElementById('current-balance').innerText
const currentBalanceInt = parseInt(currentBalance);

const modal = document.getElementById('donation-modal');
const closeModalButton = document.getElementById('close-modal');


const historyContainer = document.getElementById('history-container');
const donationFieldNk = document.getElementById('donation-field-nk');
const donationFieldFn = document.getElementById('donation-field-fn');
const donationFieldQt = document.getElementById('donation-field-qt');

// Toggle history & donation tab
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donation-tab');
const historyBtn = document.getElementById('btn-history')
const donationBtn = document.getElementById('btn-donation')


function hideDonationTab() {

    donationSection.classList.add('hidden')
    donationBtn.classList.remove('bg-[#bef264]')
    donationBtn.classList.add('bg-[white]')


    historyBtn.classList.add('bg-[#bef264]')
    historyBtn.classList.remove('bg-[white]')
    historyBtn.classList.remove('border-none')

}

function hideHistoryTab() {

    donationSection.classList.remove('hidden');
    donationBtn.classList.add('bg-[#bef264]');
    donationBtn.classList.remove('bg-[white]');

    historySection.classList.add('hidden');
    historyBtn.classList.remove('bg-[#bef264]');
    historyBtn.classList.add('bg-[white]');
}


function showModal() {
    const modal = document.getElementById('donation-modal');
    const closeModalButton = document.getElementById('close-modal');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    // Close modal when clicking outside the content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when clicking the close button
    closeModalButton.addEventListener('click', closeModal);
}