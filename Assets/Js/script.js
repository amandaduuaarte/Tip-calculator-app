let bill = document.getElementById('bill')
let tip = document.getElementsByName('tipValue')
let numberOfPeople = document.getElementById('people')
let tipAmountNumber = document.getElementById('tipPeople')
let tipAmountAlone = document.getElementById('tipAlone')
let customTip = document.getElementById('tip')
let operation

function amount(arrayTip){
  let tipType = arrayTip.value
  operation = bill.value * (tipType/100)
  operation = operation.toFixed(2)  
  let calculated = numberOfPeople.value != 0 && numberOfPeople.value >1
  if (calculated) {
  tipAmountNumber.innerHTML = operation 
  }else{
    tipAmountAlone.innerHTML = operation 
  }
}

tip[0].addEventListener('click',()=>{
    amount(tip[0])
  });
  
tip[1].addEventListener('click',()=>{
    amount(tip[1])
});
tip[2].addEventListener('click',()=>{
    amount(tip[2])
  });
tip[3].addEventListener('click',()=>{
   amount(tip[3])
});
tip[4].addEventListener('click',()=>{
    amount(tip[4])
});

// -------------- Custom ---------------
customTip.addEventListener('focusout', () =>{
    type = parseInt(customTip.value);
     operation = bill.value * (type/100)
    //  console.log(typeof(operation))
     tipAmountNumber.innerHTML = operation 
})