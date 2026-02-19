document.getElementById('transfer-btn').addEventListener('click', function(){
    const userAcc=inputValue('user-acc-number');
    const transferBalance=inputValue('transferred-amount');
    const pinNumber=inputValue('transfer-pin');
    const curBalance=currentBalance('available-balance');

    if(userAcc.length !== 11){
        alert("Invalid User Account");
        return;
    }

    if(curBalance < 0){
        alert("Insufficient Balance");
        return;
    }

    if(pinNumber !== "2@26"){
        alert("Invalid Pin Number");
        return;
    }
    else{
        const availableBalance= curBalance - Number(transferBalance);
        document.getElementById('available-balance').innerText= availableBalance;
        alert("Successfully Transferred Money"); 
    }


})