

// ################### creating player name list #################### 

const selectBtns = document.getElementsByClassName('select-btn')

for(let btn of selectBtns){
    btn.addEventListener("click", function(e){
       const playerName = e.target.value  //palyers name 
       e.target.setAttribute('disabled', true) // adding disabled attribute
       const ol = document.getElementById('ol')
      if(ol.childElementCount > 4){   // validation 
        console.log(ol.childElementCount);
        return;
      }else{
        const li = document.createElement('li')
        li.innerText = playerName;
        
        ol.appendChild(li)
      }
       
    })
}


// ###### calculating  player expenses ############
document.getElementById('player-total-btn').addEventListener('click', function(){
    const playerPrice = getValue('player-price-input')
    const ol = document.getElementById('ol')
    const olLength = ol.childElementCount
    
    playerPriceTotal = playerPrice * olLength;
    let playerPriceOutput;
    playerPriceOutput = setInnerText('player-expense-output', playerPriceTotal)
})


// ########### calculating total cost ########## 

document.getElementById('total-cost-btn').addEventListener('click', function(){
    const managerCost = getValue('manager-cost');
    const coachCost = getValue('coach-cost');
    const playerCostELement = document.getElementById('player-expense-output');
    const playerCost = parseInt(playerCostELement.innerText);
    const totalCost = managerCost + coachCost + playerCost;
    let setTotalExpenses;
    setTotalExpenses = setInnerText('total-expense-output', totalCost);

})