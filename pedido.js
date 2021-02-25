const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos1 = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')

cargarEventos();

function cargarEventos() {
    productos1.addEventListener('click', (e) => { carro.comprarProducto(e) });
    carrito.addEventListener('click', (e) => { carro.eliminarProducto(e) });
    vaciarCarritoBtn.addEventListener('click', (e) => { carro.vaciarCarrito(e) });
}