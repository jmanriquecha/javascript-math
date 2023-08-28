const input = document.getElementById('input');
const option = document.getElementById('option');
const result = document.getElementById('result');
const btnCalcular = document.getElementById('btnCalcular');


// Muestra input necesarios
option.addEventListener('blur', inputs);

// Ejecuta las funciones
btnCalcular.addEventListener('click', function () {
    result.innerHTML = gifLoading();
    switch (Number(option.value)) {
        case 1:
            perimetroCuadrado();
            break;
        case 2:
            areaCuadrado();
            break;
        case 3:
            perimetroTriangulo();
            break;
        case 4:
            areaTriangulo();
            break;
        case 5:
            perimetroCirculo();
            break;
        case 6:
            areaCirculo();
            break;

        default:
            setTimeout(() => {
                result.innerText = ('No ha seleccionado ninguna opción!');
            }, 500);
            break;
    }
});

// Image load

function gifLoading() {
    return `<img src='./img/loading.gif' width='30px'/>`;
}

// Hallar perimetro de un cuadrado

function perimetroCuadrado() {
    return setTimeout(() => {
        result.innerText = `${Number(lcuadrado.value) * 4} cm`;
    }, 500);
}

// Hallar area de un cuadrado

function areaCuadrado() {
    return setTimeout(() => {
        result.innerHTML = `${Number(lcuadrado.value) * Number(lcuadrado.value)} cm<sup>2</sup>`;
    }, 500);
}


// Hallar perimetro de un triangulo

function perimetroTriangulo() {
    return setTimeout(() => {
        result.innerHTML = `${Number(base.value) + Number(lado1.value) + Number(lado2.value)} cm`;
    });
}

// Hallar área de un triangulo

function areaTriangulo() {
    let ladoLargo;
    if (Number(lado1.value) >= Number(lado2.value)) {
        ladoLargo = Number(lado1.value);
    } else {
        ladoLargo = Number(lado2.value);
    }

    let h = Math.pow(ladoLargo, 2);
    let b = Math.pow((Number(base.value) / 2), 2);
    let altura = Math.sqrt(h - b);

    return setTimeout(() => {
        result.innerText = `${altura} cm`;
    });
}

// Hallar perimetro de un circulo

function perimetroCirculo() {
    let perimetro = null;
    // con radio
    if (Number(diametro.value) == '') {
        perimetro = (2 * Math.PI) * Number(radio.value);
    } else {
        // Con diametro
        perimetro = Math.PI * Number(diametro.value);
    }
    return result.innerText = perimetro;
}

// Hallar area
function areaCirculo() {
    let area = Math.PI * Math.pow(Number(radio.value), 2);
    return result.innerText = area;
}

// Calcular altura de un triangulo isosceles.

function calcularAlturaTrianguloIsosceles(base, lado) {
    let altura = null;
    if (lado !== base) {
        altura = Math.sqrt((Math.pow(lado, 2) - (Math.pow(base, 2) / 4)));
    } else {
        altura = console.warn('El triángulo no es isosceles');
    }
    return altura;
}

console.log(calcularAlturaTrianguloIsosceles(3, 5, 5));


// Calcular triangulo escaleno

function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {

    // 

    let base;
    let b;
    let c;

    // La base del triángulo escaleno es la de mayor tamaño.

    if (lado1 > lado2 || lado1 > lado3) {
        base = lado1;
        b = lado2;
        c = lado3;
    }
    else if (lado2 > lado1 || lado2 > lado3) {
        base = lado2;
        b = lado1;
        c = lado3;
    } else {
        base = lado3;
        b = lado1;
        c = lado2;
    }

    // Verificamos que no hayan lados iguales

    if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
        return false;
    } else {

        /**
         * !Calculamos primero el semiperímetro
         * S = Semiperimetro
         */

        const S = (base + b + c) / 2;
        const SA = S - base;
        const SB = S - b;
        const SC = S - c;

        //Luego planteamos las ecuaciones de las alturas de cada uno

        const ha = (2 / base) * Math.sqrt(S * SA * SB * SC);
        const hb = (2 / b) * Math.sqrt(S * SA * SB * SC);
        const hc = (2 / c) * Math.sqrt(S * SA * SB * SC);

        //Renornamos la información

        return {
            'semiperimetro': Number(S.toFixed(2)),
            'Altura de a': Number(ha.toFixed(2)),
            'Altura de b': Number(hb.toFixed(2)),
            'Altura de c': Number(hc.toFixed(2))
        }
    }
}

// Genera inputs

function inputs() {
    let myInpunt = null;
    // inputs cuando es un cuadrado
    if (Number(option.value) === 1 || Number(option.value) === 2) {
        myInpunt = `
        <label for='lcuadrado'>Ingrese un valor</label>
        <input type="text" id="lcuadrado">
        `;
    } else if (Number(option.value) === 3 || Number(option.value) === 4) {
        myInpunt = `
        <label for='lado1'>Ingrese el lado 1</label>
        <input type="text" id="lado1">
        <br>
        <label for='lado2'>Ingrese el lado 2</label>
        <input type="text" id="lado2">
        <br>
        <label for='base'>Ingrese la base</label>
        <input type="text" id="base">
        `;
    } else if (Number(option.value) === 5) {
        myInpunt = `
        <label for='diametro'>Ingrese el diametro</label>
        <input type="text" id="diametro">
        <br>
        <label for='radio'>Ingrese el radio</label>
        <input type="text" id="radio">
        <br>
        `;
    } else if (Number(option.value) === 6) {
        myInpunt = `
        <label for='radio'>Ingrese el radio</label>
        <input type="text" id="radio">
        <br>
        `;
    }

    return input.innerHTML = myInpunt;
}