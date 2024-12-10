const btnDonate = document.getElementById('btn-donate-now').addEventListener('click', function () {
    const donationNowAmount = document.getElementById('donation-amount').value;
    const donationNowAmountNumber = parseInt(donationNowAmount);

    const newAmount = document.getElementById('new-amount').innerText
    const newAmountNumber = parseInt(newAmount);
    console.log(newAmountNumber);
    newAmount = donationNowAmountNumber.innerText;

})
