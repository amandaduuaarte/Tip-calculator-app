let bill = document.getElementById('bill')
let tip;
tip = document.getElementsByTagName('button')


//PENSAR EM UM JEITO MELHOR DE FAZER :T
tip[0].addEventListener('click',()=>{
    let tipType = tip[0].value
    var operation = bill.value * (tipType/100)
     operation = operation.toFixed(2)
    alert(operation)
  });
tip[1].addEventListener('click',()=>{
    let tipType = tip[1].value
  var operation = bill.value * (tipType/100)
   operation = operation.toFixed(2)
  alert(operation)
});
tip[2].addEventListener('click',()=>{
    let tipType = tip[0].value
    var operation = bill.value * (tipType/100)
     operation = operation.toFixed(2)
    alert(operation)
  });
tip[3].addEventListener('click',()=>{
    let tipType = tip[1].value
  var operation = bill.value * (tipType/100)
   operation = operation.toFixed(2)
  alert(operation)
});
tip[4].addEventListener('click',()=>{
    let tipType = tip[1].value
  var operation = bill.value * (tipType/100)
   operation = operation.toFixed(2)
  alert(operation)
});

// -------------- Custom ---------------

let customTip = document.getElementById('tip')
customTip.addEventListener('focusout', () =>{
    type = parseInt(customTip.value);
    var operation = bill.value * (type/100)
    operation = operation.toFixed(2)
    alert(operation)
})

// ---------------- Number of people