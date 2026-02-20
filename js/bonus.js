
document.getElementById('bonus-btn').addEventListener('click', function(){

    const curBalance=currentBalance('available-balance');
    const coupon=inputValue('coupon-code');
    if(coupon.startsWith('PB') && coupon.length===6){
        const totalBal=curBalance+500;
        document.getElementById('available-balance').innerText=totalBal;
        alert("You got 500 taka bonus");

        const bonusSlip= document.createElement('div');
        bonusSlip.innerHTML=`
            <div class="mt-5 p-5 bg-amber-300 rounded-2xl text-[14px] font-bold">
                You have got 500 taka bonus at ${new Date()}.  Your available Balance ${totalBal} taka.
            </div>
        `
        const container=document.getElementById("history-cards");
        container.appendChild(bonusSlip);
    }
    else{
        alert("Invalid Coupon Code");
        return;
    }

});