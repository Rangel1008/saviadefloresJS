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

let miFormulario = document.getElementById("formulario");
miFormulario.onsubmit = (e) => {
    e.preventDefault();
    let tag = {
        nombre: e.target.children[1].value,
        mail: e.target.children[3].value,
        coment: e.target.children[6].value
    }
    console.log(tag.nombre);
    console.log(tag.mail);
    console.log(tag.coment);
};

let padre = document.getElementById("gridContainer");

for (let dato of catalogo) {
    crearElemento(dato);
};




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
                        <br>
                        <li >Precio</li>
                        <li class="precio" >${dato.precioProducto}</li>
                    </ul>
                   <br>
                    <button class="formularioSubmit agregar-carrito" id="${dato.id}">Comprar</button>`;
    padre.appendChild(card);
    let boton = document.getElementById(dato.id);
    boton.onclick = () => {
        alert("Agregar:" + " " + dato.nombreProducto + " " + "al carrito")
    }
}