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

        const cashOutSlip= document.createElement('div');
        cashOutSlip.innerHTML=`
            <div class="mt-5 p-5 bg-amber-300 rounded-2xl text-[14px] font-bold">
                Sucessfully cash out ${cashoutAmount} taka at ${new Date()}<br>
                Now Available Balance ${newBalance} taka.
            </div>
        `
        const container=document.getElementById("history-cards");
        container.appendChild(cashOutSlip);
    }


})