


//First Class Function Start
function handleTicketChange(isIncrease){
const firstClassInput= document.getElementById('firstClassQuantity');
const firstClassCount=parseInt(firstClassInput.value);
let firstClassNewCount=firstClassCount;
if(isIncrease == true){
firstClassNewCount=firstClassCount + 1;

}if(isIncrease == false && firstClassCount >0){
firstClassNewCount=firstClassCount - 1;
}
firstClassInput.value=firstClassNewCount;
calculateTotal();

}

//Economy Class Function Start
function handleEconomyTicketChange(isIncrease){
const economyClassInput= document.getElementById('economyClassQuantity');
const economyClassCount=parseInt(economyClassInput.value);
let economyClassNewCount=economyClassCount;
if(isIncrease == true){
economyClassNewCount=economyClassCount + 1;

}if(isIncrease == false && economyClassCount >0){
economyClassNewCount=economyClassCount - 1;
}
economyClassInput.value=economyClassNewCount;
calculateTotal();

}
function setTextHtml(value, id){
document.getElementById(id).innerText = value;
}

function calculateTotal(){
const firstClassCost= parseInt(document.getElementById('firstClassQuantity').value)*150;
const economyClassCost= parseInt(document.getElementById('economyClassQuantity').value)*100;

const subTotal = firstClassCost + economyClassCost;
const vat = subTotal * 0.1;
const grandTotal = subTotal + vat;

setTextHtml(subTotal, "subTotal")
setTextHtml(vat, "vat")
setTextHtml(grandTotal, "total")
}

document.getElementById('bookBtn').addEventListener('click',function () {
   bookVanish.style.display="none"
  nav.style.display="none"
   welcome_area.style.display="block"
    
})
function myFunction() {
  var txt;
  if (confirm("Are You Sure!You Wanna Buy This Ticket")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}