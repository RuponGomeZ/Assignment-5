const btnDonate = document.getElementById('btn-donate-now').addEventListener('click', function () {
    const donationNowAmount = document.getElementById('donation-field').value;
    const donationNowAmountNumber = parseInt(donationNowAmount);

    const donatedAmount = document.getElementById('donation-amount').innerText
    const donatedAmountInt = parseInt(donatedAmount)

    const currentBalance = document.getElementById('current-balance').innerText
    const currentBalanceInt = parseInt(currentBalance);



    if (donationNowAmountNumber <= 0 || isNaN(donationNowAmountNumber)) {
        alert('please input Valid amount')
    }
    else {
        document.getElementById('donation-amount').innerText = donationNowAmountNumber + donatedAmountInt;

        document.getElementById('current-balance').innerText = currentBalanceInt - donationNowAmountNumber;

        document.getElementById('donation-field').value = '';

    }

})
