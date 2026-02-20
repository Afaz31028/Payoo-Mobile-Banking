
//Retutn Available balance
function currentBalance(id){
    const available=document.getElementById(id);
    const balance= available.innerText;
    // console.log(Number(balance));
    return Number(balance);

}

//Return Input value
function inputValue(id){
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}

function selection(id){
    const select=document.getElementById(id);
    
    const addMoney= document.getElementById('add-money-form');
    addMoney.classList.add("hidden");
    const cashOut= document.getElementById('cashout-form');
    cashOut.classList.add("hidden");
    const sendMoney= document.getElementById('send-money-form');
    sendMoney.classList.add("hidden");
    const getBonus= document.getElementById('get-bonus-form');
    getBonus.classList.add("hidden");
    const payBill= document.getElementById('pay-bill-form');
    payBill.classList.add("hidden");
    const trasactions= document.getElementById('history-container');
    trasactions.classList.add("hidden");

    select.classList.remove("hidden");


    
}