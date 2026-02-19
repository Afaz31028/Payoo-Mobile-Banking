
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
        document.getElementById('available-balance').innerText= availableBalance+ Number(addMoney);
    }
   
})