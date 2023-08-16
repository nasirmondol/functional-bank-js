function getInputValueById(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositInputValueString = depositInput.value;
    // console.log(depossitInputValue);
    const depositInputValue = parseFloat(depositInputValueString);
    depositInput.value = '';
    return depositInputValue;
}


function getDepositElementById(elementId) {
    const depositText = document.getElementById(elementId);
    const depositTextString = depositText.innerText;
    const depositAmount = parseFloat(depositTextString);
    // const totalDeposit = depositInputValue + depositAmount;
    // depositText.innerText = totalDeposit;
    return depositAmount;
}

function setValueInNewDepositTotal(balanceId, newDepId) {
    const textElement = document.getElementById(balanceId);
    textElement.innerText = newDepId;
}