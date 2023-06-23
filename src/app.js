//для тарифа
function calculateTotal() {
    const field1Value = parseInt(document.getElementById("t-value").value) || 0;
    const field2Value = parseInt(document.getElementById("st-value").value) || 0;
    let totalValue = 0;
  
    if (field1Value >= 1) {
      if (field2Value <= 3) {
        totalValue = field2Value * 2000 * field1Value;
      } else if (field2Value <= 5) {
        totalValue = field2Value * 1800 * field1Value;
      } else {
        totalValue = field2Value * 1680 * field1Value;
      }
    }
  
    document.getElementById("sum").value = totalValue + "₸";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const field1 = document.getElementById("t-value");
    const field2 = document.getElementById("st-value");
  
    field1.addEventListener("input", function() {
      if (parseInt(field1.value) > 5) {
        field1.value = "5";
      }
      calculateTotal();
    });
  
    field2.addEventListener("input", function() {
      if (parseInt(field2.value) > 3) {
        field2.value = "3";
      }
      calculateTotal();
    });
  });
  
  

  //для заявки
const emailButton = document.getElementById("email");
const telegramButton = document.getElementById("telegram");
const emailInput = document.getElementById("email-input");
const telegramInput = document.getElementById("telegram-input");

const forEmail = () =>
 {
  emailButton.classList.add("active");
  telegramButton.classList.remove("active");
  emailInput.style.display = "flex";
  telegramInput.style.display = "none";
};

const forTelegram = () => 
{
  telegramButton.classList.add("active");
  emailButton.classList.remove("active");
  telegramInput.style.display = "flex";
  emailInput.style.display = "none";
};

emailButton.addEventListener("click", forEmail);
telegramButton.addEventListener("click", forTelegram);
