
document.getElementById('bonus-btn').addEventListener('click', function(){

    const curBalance=currentBalance('available-balance');
    const coupon=inputValue('coupon-code');
    if(coupon.startsWith('PB') && coupon.length===6){
        document.getElementById('available-balance').innerText=curBalance+500;
        alert("You got 500 taka bonus");
    }
    else{
        alert("Invalid Coupon Code");
        return;
    }

});