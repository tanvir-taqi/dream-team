

// ################### creating player name list #################### 

const selectBtns = document.getElementsByClassName('select-btn')

for(let btn of selectBtns){
    btn.addEventListener("click", function(e){
       const playerName = e.target.value  //palyers name 
      
       const ol = document.getElementById('ol')
      if(ol.childElementCount > 4){   // validation 
        alert("You Already Added 5 Players In The List")
        return;
      }else{
        const li = document.createElement('li')  // creating list element
        li.innerText = playerName;
        
        ol.appendChild(li)
        e.target.setAttribute('disabled', true) // adding disabled attribute
      }
       
    })
}


// ###### calculating  player expenses ############
document.getElementById('player-total-btn').addEventListener('click', function(){
    const playerPrice = getValue('player-price-input'); //getting price input
    const ol = document.getElementById('ol'); 
    const olLength = ol.childElementCount;
    
    playerPriceTotal = playerPrice * olLength; //player total expenses
    let playerPriceOutput;
    playerPriceOutput = setInnerText('player-expense-output', playerPriceTotal);
})


// ########### calculating total cost ########## 

document.getElementById('total-cost-btn').addEventListener('click', function(){
    const managerCost = getValue('manager-cost'); 
    const coachCost = getValue('coach-cost');
    const playerCostELement = document.getElementById('player-expense-output');
    const playerCost = parseInt(playerCostELement.innerText);  // total player cost in integer
    const totalCost = managerCost + coachCost + playerCost; // total expenses
    let setTotalExpenses;
    setTotalExpenses =   setInnerText('total-expense-output', totalCost);

})