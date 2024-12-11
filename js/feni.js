const btnDonateFeni = document.getElementById('btn-donate-now-fn').addEventListener('click', function () {
    const donationNowAmount = document.getElementById('donation-field-fn').value;
    const donationNowAmountNumber = parseInt(donationNowAmount);

    const donatedAmount = document.getElementById('donation-amount-fn').innerText;
    const donatedAmountInt = parseInt(donatedAmount);

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceInt = parseInt(currentBalance);

    if (donationNowAmountNumber <= 0 || isNaN(donationNowAmountNumber)) {
        alert('Please input a valid amount');
    } else {
        document.getElementById('donation-amount-fn').innerText = donationNowAmountNumber + donatedAmountInt;

        document.getElementById('current-balance').innerText = currentBalanceInt - donationNowAmountNumber;

        document.getElementById('donation-field-fn').value = '';

    }


});
