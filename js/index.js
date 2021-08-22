//event handler for button
const eightGbMemory = document.getElementById('memory-8gb');
const sixteenGbMemory = document.getElementById('memory-16gb');
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const freeDeliver = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('delivery-charge');

//event handler for price
let extraMemory = document.getElementById('extra-memory-cost');
let extraStorage = document.getElementById('extra-storage-cost');
let extraDElivery = document.getElementById('extra-delivery-cost');
const bestPriceField = document.getElementById('best-price');
//total price event handler
const totalPrice = document.getElementById('total-price');


//add total price
function updateTotalPrice() {
    const extraMemoryCost = Number(extraMemory.innerText);
    const extraStorageCost = Number(extraStorage.innerText);
    const extraDeliveryCharge = Number(extraDElivery.innerText);
    const bestPrice = Number(bestPriceField.innerText);
    totalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCharge + bestPrice;
    promoPrice.innerText = totalPrice.innerText;
}

//memory
eightGbMemory.addEventListener('click', function () {
    extraMemory.innerText = '0';
    updateTotalPrice()

})
sixteenGbMemory.addEventListener('click', function () {
    extraMemory.innerText = '180';
    updateTotalPrice()
})

//storage
storage256Gb.addEventListener('click', function () {
    extraStorage.innerText = '0';
    updateTotalPrice()
})
storage512Gb.addEventListener('click', function () {
    extraStorage.innerText = '100';
    updateTotalPrice()
})
storage1Tb.addEventListener('click', function () {
    extraStorage.innerText = '180';
    updateTotalPrice()
})

//delivery
freeDeliver.addEventListener('click', (function () {
    extraDElivery.innerText = '0';
    updateTotalPrice()
}))

deliveryCharge.addEventListener('click', function () {
    extraDElivery.innerText = '20';
    updateTotalPrice()
})


//promo 
let promoField = document.getElementById('promo-field');
let promoPrice = document.getElementById('promo-price');
const promoButton = document.getElementById('promo-button');

promoButton.addEventListener('click', function () {
    if (promoField.value == "stevekaku") {
        promoDiscountPrice = Number(totalPrice.innerText) * 0.8; 
        promoPrice.innerText = promoDiscountPrice;

    }
    //clear promo
    promoField.value = '';

})