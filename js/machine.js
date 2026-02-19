
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