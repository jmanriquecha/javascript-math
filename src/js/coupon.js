const txtPrice = document.getElementById('price');
const txtCoupon = document.getElementById('coupon');
const result = document.getElementById('result');
const btnVerify = document.getElementById('verify');

btnVerify.addEventListener('click', inputs);
txtPrice.addEventListener('blur', inputs);
txtCoupon.addEventListener('blur', inputs);


// Coupons
const couponsList = [];

couponsList.push({
    name: 'quince',
    discount: 15
});

couponsList.push({
    name: 'treinta',
    discount: 30
});


// valdida que el cupon exista
function isCouponInArray(element) {
    return element.name === txtCoupon.value;
};


// verifica cupones

function box() {
    const couponInArray = couponsList.find(isCouponInArray); // Retorna {name, discount}
    let price = Number(txtPrice.value);
    let disc;

    if (couponInArray) {
        disc = couponInArray.discount;
    } else {
        result.innerText = "El cupón no es valido!";
        return
    }

    // Calcula precio final aplicando el respectivo descuento 
    let res = (price * (100 - disc)) / 100;

    result.innerText = `Precio final aplicando ${disc}% es $${res}`;
}

// Validación de inputs

function inputs() {

    let inputTrue = false;

    if (txtPrice.value === '') {
        emptyBoxes(txtPrice);
    } else if (txtCoupon.value === '') {
        emptyBoxes(txtCoupon);
    } else {
        fullBoxes(txtPrice);
        fullBoxes(txtCoupon);
        inputTrue = true;
    }

    if (inputTrue) {
        box();
    }
}

// Se ejecuta cuando los inputs esten vacios
function emptyBoxes(input) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.focus();
    result.innerText = null;
}

// Se ejecuta cuando los inputs no esten vacios
function fullBoxes(input) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}