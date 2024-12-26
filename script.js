let modulos = [
    {
        "id": 20,
        "title": "Módulo de Química",
        "price": 4000,
        "description": "Este módulo incluye conceptos básicos de química como la estructura atómica, enlaces químicos, reacciones químicas, y estados de la materia, acompañado de ejemplos prácticos y ejercicios."
    },
    {
        "id": 30,
        "title": "Módulo de Matemáticas",
        "price": 4000,
        "description": "Incluye temas como álgebra básica, geometría, cálculo de áreas y volúmenes, y problemas matemáticos aplicados al contexto cotidiano. Ideal para reforzar habilidades matemáticas."
    },
    {
        "id": 40,
        "title": "Módulo de Física",
        "price": 4000,
        "description": "Explora principios fundamentales como las leyes de Newton, el movimiento, la energía, y conceptos básicos de electricidad y magnetismo. Incluye actividades prácticas y ejemplos cotidianos."
    },
    {
        "id": 50,
        "title": "Módulo de Biología",
        "price": 4000,
        "description": "Este módulo abarca temas como la célula, los sistemas del cuerpo humano, la biodiversidad, y el medio ambiente. Perfecto para entender los fundamentos de la vida en la Tierra."
    },
    {
        "id": 60,
        "title": "Módulo de Lengua",
        "price": 4000,
        "description": "Ofrece recursos para el análisis de textos, comprensión lectora, y redacción. Incluye ejercicios para mejorar la gramática, el vocabulario y la escritura creativa."
    },
    {
        "id": 70,
        "title": "Módulo de Historia",
        "price": 4000,
        "description": "Cubre eventos históricos clave, como las grandes civilizaciones, revoluciones, y los procesos que moldearon el mundo moderno. Incluye mapas y líneas de tiempo para facilitar el aprendizaje."
    },
    {
        "id": 80,
        "title": "Módulo de Geografía",
        "price": 4000,
        "description": "Incluye nociones sobre mapas, clima, recursos naturales, y la relación entre los seres humanos y el medio ambiente. Ideal para entender el mundo que nos rodea."
    }
];

let contenedorModulos = document.getElementById('modulos');
let contenedorseparado = document.createElement('div');
contenedorseparado.classList.add('contenedorseparado');
document.addEventListener("DOMContentLoaded", (Event) => {
    modulos.forEach(modulo => {
        contenedorseparado.innerHTML += `
            <div class="card">
            <form id="my_forms${modulo.id}">
                    <div>
                        <output id="nombre" name="nombre">${modulo.title}</output>
                        <br>
                        <output id="precio" name="precio">${modulo.price}</output>
                        <br>
                        <button id="btnDetalles${modulo.id}" class="button" onclick="Detalles(${modulo.id})">Descripcion</button>
                        <div id="botonera${modulo.id}">
                            <button onclick="comprar(${modulo.id})" class="button" value="Comprar">Comprar</button>
                        </div>  
                        <div>
                        <output id="description${modulo.id}" class="description">
                            ${modulo.description}
                            <br>
                                <button onclick="comprar(${modulo.id})" class="button" value="Comprar">Comprar</button>
                        </output>
                        </div>
                    </div>
            </div>
            `;
        contenedorModulos.appendChild(contenedorseparado);
    });
})
function Detalles(id) {
    event.preventDefault();
    let idx = id.toString();
    let param = 'description' + idx;
    let btnDetalles = 'botonera' + idx;
    let btnComprar = 'btnDetalles' + idx;
    let btnComprarDesc = 'comprar' + idx;

    document.getElementById(param).style.display = "block";
    document.getElementById(btnComprar).style.display = "none";
    document.getElementById(btnDetalles).style.display = "none";

}




