class Carrito {
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const prod = e.target.parentElement.parentElement;
            this.leerDatosProducto(prod);
        }
    }

    leerDatosProducto(prod) {
        const infoProd = {
            titulo: prod.querySelector('p').textContent,
            precio: prod.querySelector('.precio').textContent,
            id: prod.querySelector('button').getAttribute('id'),
            cantidad: 1
        }
        this.insertarCarrito(infoProd);
    }

    insertarCarrito(prod) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${prod.titulo}</td>
        <td>${prod.precio}</td>
        <td>
                <a href="#" class="borrar-producto fas fa-times-circle" id="${prod.id} circlex"></a>
            </td>
        `;
        listaProductos.appendChild(row);
    }

    eliminarProducto(e) {
        e.preventDefault();
        let prod, prodID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            prod = e.target.parentElement.parentElement;
            prodID = prod.querySelector('a').getAttribute('id')
        }
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
    }
}