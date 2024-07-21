// Funcion del boton agregar a carrito

document.addEventListener('DOMContentLoaded', () => {

    const totalProductosEl = document.querySelector('#totalProductos');
    const precioTotalEl = document.querySelector('#precioTotal');

    let totalProductos = 0;
    let precioTotal = 0;

    const actualizarTotales = () => {
        totalProductosEl.textContent = totalProductos;
        precioTotalEl.textContent = precioTotal.toFixed(2);
    };

    const manejarClick = (event) => {

        const precioProducto = parseFloat(event.target.getAttribute('data-precio'));

        totalProductos++;
        precioTotal += precioProducto;

        const resultado = confirm('Producto agregado al carrito. ¿Deseas seguir comprando?');

        if (!resultado) {

            window.location.href = './botones_enlaces/compra.html'; 
        }

        actualizarTotales();
    };

    document.querySelectorAll('.carrito').forEach(boton => {
        boton.addEventListener('click', manejarClick);
    });
});

// enlaces del footer

document.addEventListener('DOMContentLoaded', () => {

    const enlaceGeronimo = document.querySelector('#linkGeronimo');
    const enlaceVanina = document.querySelector('#linkVanina');
    const enlaceCILSA = document.querySelector('#linkCILSA');

    // Función para manejar el click
    const manejarClick = (mensaje, event) => {
        const resultado = confirm(mensaje);
        if (!resultado) {
            event.preventDefault();
        }
    };

    enlaceGeronimo.addEventListener('click', (event) => {
        manejarClick('¿Deseas visitar el perfil de Geronimo Ariel Franco?', event);
    });

    enlaceVanina.addEventListener('click', (event) => {
        manejarClick('¿Deseas visitar el perfil de Vanina Coria?', event);
    });

    enlaceCILSA.addEventListener('click', (event) => {
        manejarClick('¿Deseas visitar CILSA 2024?', event);
    });
});
