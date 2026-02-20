
document.getElementById('addMoney-btn').addEventListener('click',function(){

    const availableBalance=currentBalance('available-balance');
    const bankName=inputValue('bank-name');
    const accountNum=inputValue('personal-account-number');
    const addMoney=inputValue('added-amount');
    const pinNum=inputValue('pin-number');

    if(bankName === 'Select a Bank'){
        alert("Please Select A BanK");
        return;
    }

    if(accountNum !== '2021831028' || accountNum.length!==10){
        alert("Invalid Account Number");
        return;
    }
    else if(pinNum!=='2@27'){
        alert("Invalid Pin Number");
        return;
    }
    else{
        alert("Successfully Added Money");
        const currentBal=availableBalance+ Number(addMoney);
        document.getElementById('available-balance').innerText= currentBal;

        const cashInSlip= document.createElement('div');
        cashInSlip.innerHTML=`
            <div class="mt-5 p-5 bg-amber-300 rounded-2xl text-[14px] font-bold">
                Sucessfully Added money ${addMoney} taka on your acc. no. ${accountNum}
                at ${new Date()}. Your Current Balance ${currentBal} taka.
            </div>
        `
        const container=document.getElementById("history-cards");
        container.appendChild(cashInSlip);
    }
   
})