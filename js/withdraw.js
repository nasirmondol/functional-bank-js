document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInputValue = getInputValueById('input-withdraw');
    const withdrawText = getDepositElementById('withdraw-text');
    const totalWithdraw = withdrawInputValue + withdrawText;
    setValueInNewDepositTotal('withdraw-text', totalWithdraw);

    const previousBalanceTotal = getDepositElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal - withdrawInputValue;
    setValueInNewDepositTotal('balance-total', newBalanceTotal)
})