// handel deposit button event

function getInputValue(inputId)
{
    const inptuField = document.getElementById(inputId);
    const inputAmountText = inptuField.value;
    const amountValue = parseFloat(inputAmountText);
    inptuField.value = '';
    return amountValue;

}

function updateTotlaField(totalFieldID, amount)
{
    const total = document.getElementById(totalFieldID);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + amount;
}

function getCurrentBalance()
{
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}

function updateBalance(amount, isAdd)
{
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    const previousbalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousbalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function ()
{
    // const depositInput = document.getElementById('diposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);


    // get current deposit 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;


    //update total balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal + depositAmount;



    // clear input filed 
    // depositInput.value = '';

    const depositAmount = getInputValue('diposit-input');
    if (depositAmount > 0) {
        updateTotlaField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handel witdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function ()
{
    // const withdrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawInputText);



    // get corrent withdraw balance 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;



    // update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal - withdrawAmount;



    // clear input filed 
    // withdrawInput.value = '';

    const withdrawAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotlaField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

});
