document.getElementById('cashout-btn').addEventListener('click',function(){
    const agentNumber=document.getElementById('agent-number');
    const number=agentNumber.value;
    console.log(number);
    if(number.length !== 11){
        alert('Invalid Agent Number');
        return;
    }

    const withdrawalAmout=document.getElementById('Withdrawal-amount');
    const amount=withdrawalAmout.value;
    // console.log(amount);

    const availableBalance= document.getElementById('available-balance');
    const balance=availableBalance.innerText;
    // console.log(balance);

    const newBalance= Number(balance) - Number(amount);
    if(newBalance < 0){
        alert('Insufficient Balance');
        return;
    }
    const userPin=document.getElementById('pin-Number');
    const myPin=userPin.value;
    console.log(myPin);
    if(myPin !== '2@26'){
        alert('Invalid Pin Number');
        return;
    }
    else{
        alert('Successfully Cash Out');
        // console.log(newBalance);
        availableBalance.innerText=newBalance;
    }


})