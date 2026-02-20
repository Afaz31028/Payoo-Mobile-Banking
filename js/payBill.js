
document.getElementById('payBill-btn').addEventListener('click', function(){
    const availableBalance= currentBalance('available-balance');
    const payAmaount = inputValue('pay-bill-amount');
    const billerAcc= inputValue('biller-number');
    const pinNumber= inputValue('payBill-pin');
    const bank= inputValue('payBill-bank');

    if(bank === 'Select a Bank'){
        alert("Please select a bank");
        return;
    }
    if(billerAcc.length !== 11){
        alert("Invalid Biller Number");
        return;
    }

    if(payAmaount < 0){
        alert("Insufficient Amount");
        return;
    }

    if(pinNumber !== '2@26'){
        alert("Invalid Pin Number");
        return;
    }
    else{
        alert("Successfully Pay Bill Completed");
        const curBal=availableBalance- Number(payAmaount);
        document.getElementById('available-balance').innerText= curBal;

        const paySlip= document.createElement('div');
        paySlip.innerHTML=`
            <div class="mt-5 p-5 bg-amber-300 rounded-2xl text-[14px] font-bold">
                Sucessfully Pay Bill completed to Biller Acc. No. ${billerAcc}
                at ${new Date()}.  Your available Balance ${curBal} taka.
            </div>
        `
        const container=document.getElementById("history-cards");
        container.appendChild(paySlip);
    }
})