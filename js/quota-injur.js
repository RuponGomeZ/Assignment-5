const btnDonateQuota = document.getElementById('btn-donate-now-qt').addEventListener('click', function () {
    const donationNowAmount = document.getElementById('donation-field-qt').value;
    const donationNowAmountNumber = parseInt(donationNowAmount);


    const donatedAmount = document.getElementById('donation-amount-qt').innerText;
    const donatedAmountInt = parseInt(donatedAmount);

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceInt = parseInt(currentBalance);

    if (donationNowAmountNumber <= 0 || isNaN(donationNowAmountNumber)) {
        alert('Please input a valid amount');
    } else {
        document.getElementById('donation-amount-qt').innerText = donationNowAmountNumber + donatedAmountInt;

        document.getElementById('current-balance').innerText = currentBalanceInt - donationNowAmountNumber;

        document.getElementById('donation-field-qt').value = '';
    }

});



