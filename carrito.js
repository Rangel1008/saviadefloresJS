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
        this.guardarLSProd(prod);
    }

    eliminarProducto(e) {
        e.preventDefault();
        let prod, prodID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            prod = e.target.parentElement.parentElement;
            prodID = prod.querySelector('a').getAttribute('id')
        }
        this.eliminarLSProd(prodID);
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
    }

    guardarLSProd(prod) {
        let prod1;
        prod1 = this.obtenerProdLS();
        prod1.push(prod);
        localStorage.setItem('prod1', JSON.stringify(prod1));
    }

    obtenerProdLS() {
        let prodLS;

        if (localStorage.getItem('prod1') === null) {
            prodLS = [];
        } else {
            prodLS = JSON.parse(localStorage.getItem('prod1'));
        }
        return prodLS;
    }

    eliminarLSProd(prodID) {
        let productoLS1;
        productoLS1 = this.obtenerProdLS();

        productoLS1.forEach(function(prodLS, index) {
            if (prodLS.id === prodID) {
                productoLS1.splice(index, 1);
            }
        });

        localStorage.setItem('prod1', JSON.stringify(productoLS1));
    }

}