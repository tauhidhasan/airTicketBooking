function handleTicketChange(whatTicket, isIncrease) {
  const ClassInput = document.getElementById(whatTicket + "ClassQuantity");
  const ClassCount = parseInt(ClassInput.value);
  let ClassNewCount = ClassCount;
  if (isIncrease == true) {
    ClassNewCount = ClassCount + 1;
  }
  if (isIncrease == false && economyClassCount > 0) {
    ClassNewCount = ClassCount - 1;
  }
  ClassInput.value = ClassNewCount;
  calculateTotal();
}

function setTextHtml(value, id) {
  document.getElementById(id).innerText = value;
}

// //First Class Function Start
// function handleTicketChange(isIncrease){
// const firstClassInput= document.getElementById('firstClassQuantity');
// const firstClassCount=parseInt(firstClassInput.value);
// let firstClassNewCount=firstClassCount;
// if(isIncrease == true){
// firstClassNewCount=firstClassCount + 1;

// }if(isIncrease == false && firstClassCount >0){
// firstClassNewCount=firstClassCount - 1;
// }
// firstClassInput.value=firstClassNewCount;
// calculateTotal();

// }

// //Economy Class Function Start
// function handleEconomyTicketChange(isIncrease){
// const economyClassInput= document.getElementById('economyClassQuantity');
// const economyClassCount=parseInt(economyClassInput.value);
// let economyClassNewCount=economyClassCount;
// if(isIncrease == true){
// economyClassNewCount=economyClassCount + 1;

// }if(isIncrease == false && economyClassCount >0){
// economyClassNewCount=economyClassCount - 1;
// }
// economyClassInput.value=economyClassNewCount;
// calculateTotal();

// }
// function setTextHtml(value, id){
// document.getElementById(id).innerText = value;
// }

function calculateTotal() {
  const firstClassCost =
    parseInt(document.getElementById("firstClassQuantity").value) * 150;
  const economyClassCost =
    parseInt(document.getElementById("economyClassQuantity").value) * 100;

  const subTotal = firstClassCost + economyClassCost;
  const vat = subTotal * 0.1;
  const grandTotal = subTotal + vat;

  setTextHtml(subTotal, "subTotal");
  setTextHtml(vat, "vat");
  setTextHtml(grandTotal, "total");
}

function booking() {
  const valid = parseInt(document.getElementById("subTotal").innerText);
  if (valid < 1) {
    alert("Please select minimum 1 ticket");
    return false;
  }
  document.getElementById("bookVanish").style.display = "none";
  document.getElementById("welcome_area").style.display = "block";
}

const returnHome = document
  .getElementById("returnHome")
  .addEventListener("click", function () {
    document.getElementById("bookVanish").style.display = "block";
    document.getElementById("welcome_area").style.display = "none";
  });