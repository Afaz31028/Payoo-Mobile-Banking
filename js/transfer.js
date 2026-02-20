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

        const sendMoneySlip= document.createElement('div');
        sendMoneySlip.innerHTML=`
            <div class="mt-5 p-5 bg-amber-300 rounded-2xl text-[14px] font-bold">
                Sucessfully send ${transferBalance} taka to Acc. No. ${userAcc}
                at ${new Date()}. Your available balance ${availableBalance} taka
            </div>
        `
        const container=document.getElementById("history-cards");
        container.appendChild(sendMoneySlip);
    }


})