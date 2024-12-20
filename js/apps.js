const buttons = document.getElementsByTagName("button");

function updateTotal() {
  const basePrice = 1299;
  const memoryCost = parseInt(
    document.getElementById("memory-cost").textContent
  );
  const storageCost = parseInt(
    document.getElementById("storage-cost").textContent
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").textContent
  );
  return basePrice + memoryCost + storageCost + deliveryCost;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id === "8gb-memory") {
      customizationPrice("memory-cost", 0);
    } else if (buttons[i].id === "16gb-memory") {
      customizationPrice("memory-cost", 150);
    } else if (buttons[i].id === "256gb-storage") {
      customizationPrice("storage-cost", 0);
    } else if (buttons[i].id === "512gb-storage") {
      customizationPrice("storage-cost", 100);
    } else if (buttons[i].id === "1tb-storage") {
      customizationPrice("storage-cost", 200);
    } else if (buttons[i].id === "late-delivery") {
      customizationPrice("delivery-cost", 0);
    } else if (buttons[i].id === "early-delivery") {
      customizationPrice("delivery-cost", 20);
    } else {
      promocode();
    }
  });
}

function customizationPrice(id, cost) {
  const now = document.getElementById(id);
  now.textContent = cost;
  const totalCost = updateTotal();
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = totalCost;
  const finalPay = document.getElementById("user-payment");
  finalPay.textContent = totalCost;
}

function promocode() {
  const wrongPromo = document.getElementById("wrong-promo-sms");
  const applyButton = document.getElementById("apply-btn");
  const promo = document.getElementById("input-field");
  const promoInput = promo.value;
  if (promoInput === 'Ostad') {
    const finalPrice = document.getElementById("user-payment");
    const currentPrice = parseFloat(finalPrice.textContent);
    const paymentUser = currentPrice - (currentPrice * 0.1);
    finalPrice.textContent = paymentUser.toFixed(2);
    applyButton.disabled = true;
    applyButton.textContent = 'Promo Code Applied';
    wrongPromo.textContent = '';
  } else {
    wrongPromo.textContent = 'Wrong Promo Code';
  }
}


