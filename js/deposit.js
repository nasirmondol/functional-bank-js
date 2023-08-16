document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('input-deposit');

    const elementAmount = getDepositElementById('deposit-text');
    const totalAmount = newDepositAmount + elementAmount;

    setValueInNewDepositTotal('deposit-text', totalAmount);

    const previousBalanceTotal = getDepositElementById('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
   
    setValueInNewDepositTotal('balance-total', newBalanceTotal);
})