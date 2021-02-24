const producto1 = new Productos("Blend matero", "Cedron - Manzanilla - Cáscaras de naranja azucaradas", "Mejora la digestión - Desinflama zona estomacal - Regulariza el chakra del Plexo Solar");
const producto2 = new Productos("Ramillete sahumador de manzanilla", "Manzanilla secada hecha ramilletes", "Armoniza ambientes - Prosperidad del hogar - Repele malas energías");
const producto3 = new Productos("Blend de rosas (base de te rojo)", "Salvia blanca - Pétalos de Rosa - Chocolate", "Amor propio - Alineamiento del chakra del corazon - Armonia");

const producto = [producto1, producto2, producto3];


function Productos(nombreProducto, ingredientesProducto, beneficiosProducto) {
    this.nombreProducto = nombreProducto;
    this.ingredientesProducto = ingredientesProducto;
    this.beneficiosProducto = beneficiosProducto;


    this.msjProducto = "Nombre del producto: " + " " + this.nombreProducto + "\nINGREDIENTES " + this.ingredientesProducto + "\nBENEFICIOS " + this.beneficiosProducto
}


do {
    numProducto = prompt("Ingrese un numero del 1 al 3");

    if (numProducto == 1) {
        alert(producto1.msjProducto);
    } else if (numProducto == 2) {
        alert(producto2.msjProducto);
    } else if (numProducto == 3) {
        alert(producto3.msjProducto);
    } else {
        alert("El numero ingresado es incorrecto");
    }

} while (numProducto < 1 || numProducto > 3);