//Increment Decrement Function

function handleTicketChange(whatTicket, isIncrease) {
    const ClassInput = document.getElementById(whatTicket + 'ClassQuantity');
    const ClassCount = parseInt(ClassInput.value);
    let ClassNewCount = ClassCount;
    if (isIncrease == true) {
        ClassNewCount = ClassCount + 1;

    }
    if (isIncrease == false && ClassCount > 0) {
        ClassNewCount = ClassCount - 1;
    }
    ClassInput.value = ClassNewCount;
     calculateTotal();

}


//Total Sub Total Vat Function
function setTexTotHtml(value, id) {
  document.getElementById(id).innerText = value;
}
function calculateTotal() {
  const firstClassCost =
    parseInt(document.getElementById("firstClassQuantity").value) * 150;
  const economyClassCost =
    parseInt(document.getElementById("economyClassQuantity").value) * 100;

    const subTotal = firstClassCost + economyClassCost;
    const vat = subTotal * 0.1;//10% vat =10/100=0.1
    const grandTotal = subTotal + vat;

    setTexTotHtml(subTotal, "subTotal");
    setTexTotHtml(vat, "vat");
    setTexTotHtml(grandTotal, "total");
}
//Validation With Another Page Return
function booking() {
  const valid = parseInt(document.getElementById("subTotal").innerText);
      if (valid < 1) {
        alert("Please select minimum 1 ticket");
        return false;
      }
  document.getElementById("bookVanish").style.display = "none";
  document.getElementById("welcome_area").style.display = "block";
}
// Home Page to Welcome Page
const returnHome = document
    .getElementById("returnHome")
    .addEventListener("click", function () {
      document.getElementById("bookVanish").style.display = "block";
      document.getElementById("welcome_area").style.display = "none";
  });