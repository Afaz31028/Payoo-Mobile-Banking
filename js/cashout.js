document.getElementById('cashout-btn').addEventListener('click',function(){

    const availableBalance=currentBalance('available-balance');
    const agentNumber=inputValue('agent-number');
    const cashoutAmount=inputValue('Withdrawal-amount');
    const pinNumber=inputValue('pin-Number');

     if(agentNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }
    const newBalance= availableBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert('Insufficient Balance');
        return;
    }
    if(pinNumber !== '2@26'){
        alert('Invalid Pin Number');
        return;
    }
    else{
        alert('Successfully Cash Out');
        document.getElementById('available-balance').innerText=newBalance;
    }


})