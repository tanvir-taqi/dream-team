


// ########## function for getting value from input in integer ########## 
function getValue(inputID){
const input = document.getElementById(inputID)
const inputValue = parseInt(input.value)
if(isNaN(inputValue)){
    input.value = ''
    alert("please Insert A Value")
    return getValue();
}
else{
    input.value = ''
    return inputValue;
}
}


// ############### function for setting inner text ###########
function setInnerText(elementID , value){
    const element = document.getElementById(elementID)
    element.innerText = value
}