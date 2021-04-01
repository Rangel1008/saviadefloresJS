let stockProductos;

document.addEventListener("DOMContentLoaded", () => {
    $.ajax({
        type: "GET",
        url: "productos.json",
        success: function(data) {
            stockProductos = data;
            crearElemento(stockProductos);
            darFuncionalidadBotones();
        },
        error: function() {
            console.log("Error");
        },
    });
});



let padre = document.getElementById("gridContainer");


function crearElemento(productos) {

    productos.forEach((producto) => {
        const { id, nombreProducto, ingProducto, beneficiosProducto, precioProducto } = producto;

        $("#gridContainer").append(

            `<input value="${id}" type="hidden">
        <div class="item" id="card">
        <p class="titulosProductos">${nombreProducto}</p>
    <hr>
    <ul class="cardIngredientes">
    <li>Ingredientes</li>
          <br>
          <li>${ingProducto}</li>
          <br>
          <ul class="cardBeneficios">
          <li>Beneficios</li>
          <br>
          <li>${beneficiosProducto}</li>
          <br>
          <li>Precio</li>
          <li class="precio" >${precioProducto}</li>
      </ul>
     <br>
      <button class="formularioSubmit boton agregar-carrito" id="${id}">Añadir al Carrito</button></div>`

        );

    });
}

function darFuncionalidadBotones() {
    const agregarAlCarritoDeCompras = document.querySelectorAll('.agregar-carrito');

    agregarAlCarritoDeCompras.forEach((agregarAlCarrito) => {
        agregarAlCarrito.addEventListener('click', clickAgregarAlCarrito);
    });
}


const botonComprar = document.querySelector('.comprarBoton');
botonComprar.addEventListener('click', clickBotonComprar);


const containerItemCarrito = document.querySelector('.containerItemCarrito');


function clickAgregarAlCarrito(e) {
    const button = e.target;
    const item = button.closest('.item');

    const tituloProd = item.querySelector('.titulosProductos').textContent;
    const precioProd = item.querySelector('.precio').textContent;

    agregarProdAlCarrito(tituloProd, precioProd);

}


function agregarProdAlCarrito(tituloProd, precioProd) {

    const elementoTitulos = containerItemCarrito.getElementsByClassName('tituloProdItem');

    for (let index = 0; index < elementoTitulos.length; index++) {

        if (elementoTitulos[index].innerText === tituloProd) {
            let elementoCantidad = elementoTitulos[index].parentElement.parentElement.parentElement.querySelector('.cantidad-prod-carrito');
            elementoCantidad.value++;
            actualizarTotalCarrito();
            return;
        }
    };

    const rowCarrito = document.createElement('div');
    const contenidoCarrito = `
  <div class="row textosTarot itemProductoCarrito">
        <div class="col-6">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <h4 class="textosTarot text-truncate tituloProdItem ml-3 mb-0">${tituloProd}</h4>
            </div>
        </div>
        <div class="col-2">
            <div class="precioProductoCarrito d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 precio-prod-carrito">${precioProd}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="cantidadProductoCarrito d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input cantidad-prod-carrito" type="number"
                    value="1">
                <button class="btn btn-danger formularioSubmit botonBorrar" type="button">X</button>
            </div>
        </div>
    </div>`;
    rowCarrito.innerHTML = contenidoCarrito;
    containerItemCarrito.append(rowCarrito);

    rowCarrito
        .querySelector(".botonBorrar")
        .addEventListener('click', removerCarrito);

    rowCarrito.querySelector(".cantidad-prod-carrito").addEventListener('change', cambioCantidad);

    actualizarTotalCarrito();


}

function actualizarTotalCarrito() {

    let total = 0;
    const totalCarrito = document.querySelector('.totalCarrito')

    const itemsProductosCarrito = document.querySelectorAll('.itemProductoCarrito');

    itemsProductosCarrito.forEach(itemProductoCarrito => {

        const elementoPrecioItem = itemProductoCarrito.querySelector('.precio-prod-carrito');

        const precioProdCarrito = elementoPrecioItem.textContent.replace('AR$', ' ');

        const elementoCantidadItem = itemProductoCarrito.querySelector('.cantidad-prod-carrito');

        const cantidadProdCarrito = Number(elementoCantidadItem.value);

        total = total + precioProdCarrito * cantidadProdCarrito;

    });

    totalCarrito.innerHTML = `${total.toFixed(2)} Ar$`;

};

function removerCarrito(event) {

    const botonClickeado = event.target;
    botonClickeado.closest('.itemProductoCarrito').remove();
    actualizarTotalCarrito();

};

function cambioCantidad(event) {

    const input = event.target;

    if (input.value <= 0) {
        input.value = 1;
    }
    actualizarTotalCarrito();
};

function clickBotonComprar() {

    containerItemCarrito.innerHTML = '';
    actualizarTotalCarrito();

}