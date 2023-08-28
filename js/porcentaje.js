// 

// Array con los productos

const productos = [
    { producto: 'Nevera', precio: 4599999 },
    { producto: 'Computador', precio: 2999999 },
    { producto: 'Automovil', precio: 99999999 },
    { producto: 'Tablet', precio: 1500999 },
    { producto: 'Celular Android', precio: 1350000 },
    { producto: 'Lavadora', precio: 3000000 },
];

// Array con cupones activos

const cupones = [
    { name: "cincuenta", descuento: 50 },
    { name: "veinticinco", descuento: 25 },
    { name: "quince", descuento: 15 },
    { name: "diez", descuento: 10 }
];


// Mostramos los cupones disponibles

cupones.forEach(cupon => {
    let list = `
    <ul>
        <li>Codigo: <strong>${cupon.name}</strong> cupón ${cupon.descuento}%</li>
    </ul>
    `;

    document.getElementById('descuentos').innerHTML += list;
});

// Se ejecuta cuando carga la aplicación
window.addEventListener('load', function () {
    tablaProductos();
    rowsTable();
});

// Genera tabla con los productos del array

function tablaProductos() {
    for (let i = 0; i < productos.length; i++) {
        let tr = `
            <tr id='row-${i}'>
                <td id='product-${i}'>${productos[i].producto}</td>
                <td id='precio-${i}'>${productos[i].precio}</td>
                <td><input type='text' id='cupon-${i}' required /></td>
                <td><button id='btn-${i}'">Comprar</button></td>
            </tr>
        `;
        document.getElementById('contenido').innerHTML += tr;
    }
}

// retorna el valor total despues del descuento

function caja(precio, cupon = null) {

    let total = precio;
    let descuento = 0;
    let msg;

    if (cupon === null) {
        descuento = 0;
    }

    for (let i = 0; i < cupones.length; i++) {
        if (cupon === cupones[i].name) {
            descuento += cupones[i].descuento;
            total = (precio * (100 - descuento)) / 100;
        }
    }

    if (descuento === 0) {
        msg = `El cupon que ingresaste no es valido! por favor verifica, precio final sin descuentos ${total}`;
    } else {
        msg = `Total a pagar con descuento del ${descuento}% es $ ${total}`
    }

    alert(msg);

}

// comprar

// Identifica cada fila 

function rowsTable() {
    for (let i = 0; i < productos.length; i++) {
        let boton = document.getElementById(`btn-${i}`);
        boton.addEventListener('click', function () {
            let txtCupon = document.getElementById('cupon-' + i).value;
            let txtPrecio = document.getElementById('precio-' + i).textContent;
            caja(txtPrecio, txtCupon);
        });
    }
}
