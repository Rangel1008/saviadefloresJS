/* class Producto {
    constructor(datos) {
        this.nombreProducto = datos.nombreProducto;
        this.ingProducto = datos.ingProducto;
        this.beneficiosProducto = datos.beneficiosProducto;
    }
};
let listaProductos = []; */
/* let pruebaProductos = new Productos(catalogo[0]); */

/* let miBoton = document.getElementById("btnPrueba");
console.dir(miBoton);
miBoton.onclick = () => {
    alert("Respuesta al click");
} */


let padre = document.getElementById("gridContainer");

for (let dato of catalogo) {
    crearElemento(dato);
}

function crearElemento(dato) {
    let card = document.createElement("div");
    card.id = "card";
    card.innerHTML = `<p class="titutlosProductos">${dato.nombreProducto}</p>
                  <hr>
                  <ul class="cardIngredientes">
                  <li>Ingredientes</li>
                        <br>
                        <li>${dato.ingProducto}</li>
                        <br>
                        <ul class="cardBeneficios">
                        <li>Beneficios</li>
                        <br>
                        <li>${dato.beneficiosProducto}</li>
                    </ul>
                    <button id="${dato.id}">COMPRAR</button>`;
    padre.appendChild(card);
    let boton = document.getElementById(dato.id);
    boton.onclick = () => {
        alert("Comprar:" + " " + dato.nombreProducto)
    }
}