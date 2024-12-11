const btnDonate = document.getElementById('btn-donate-now-nk').addEventListener('click', function () {
    const donationNowAmount = document.getElementById('donation-field-nk').value;
    const donationNowAmountNumber = parseInt(donationNowAmount);

    const donatedAmount = document.getElementById('donation-amount-nk').innerText
    const donatedAmountInt = parseInt(donatedAmount)

    if (donationNowAmountNumber <= 0 || isNaN(donationNowAmountNumber)) {
        alert('please input Valid amount')
    }
    else {
        document.getElementById('donation-amount-nk').innerText = donationNowAmountNumber + donatedAmountInt;

        document.getElementById('current-balance').innerText = currentBalanceInt - donationNowAmountNumber;

        document.getElementById('donation-field-nk').value = '';

    }

})
