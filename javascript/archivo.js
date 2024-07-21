// funciones de botones "Ver mas" cuenta con un alert preguntando si quiere ser redirigido o no.

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#verMasBtn`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder al catalogo?`);

        if (resultado) {

            window.location.href = `./src/catalogo.html`;
        }

    });
});

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#ver2btn`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder al perfil?`);

        if (resultado) {

            window.location.href = `./src/perfil.html`;
        }

    });
});

// acceder a crompras - cuenta con un alert preguntando si quiere ser redirigido o no.

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#compra1`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a comprar?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/compra.html`;
        }

    });
});

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#compra2`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a comprar?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/compra.html`;
        }

    });
});

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#compra3`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a comprar?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/compra.html`;
        }

    });
});

// acceder a registrarse - cuenta con un alert preguntando si quiere ser redirigido o no.

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#registro1`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a registrarse?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/registro.html`;
        }

    });
});

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#registro2`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a registrarse?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/registro.html`;
        }

    });
});

document.addEventListener(`DOMContentLoaded`, () =>{

    const boton = document.querySelector(`#registro3`);

    boton.addEventListener(`click`, () => {

        const resultado = confirm(`¿Desea acceder a registrarse?`);

        if (resultado) {

            window.location.href = `./src/botones_enlaces/registro.html`;
        }

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
