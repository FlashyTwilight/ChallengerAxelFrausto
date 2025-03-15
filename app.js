// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Captura el valor del campo de entrada y lo agrega al array si es válido.
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que no contenga números
    if (/\d/.test(nombre)) {
        alert("No se permiten números en los nombres.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en la página
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

/**
 * Actualiza la lista de amigos en el HTML.
 */
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y mostrar los nombres en la lista
    amigos.forEach(function (amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        item.classList.add("nombre-amigo"); // Clase para estilos
        lista.appendChild(item);
    });
}

/**
 * Sortea un amigo al azar y lo resalta en la lista.
 */
function sortearAmigo() {
    let lista = document.getElementById("listaAmigos").children;

    // Validar que haya al menos un amigo para sortear
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceGanador = Math.floor(Math.random() * amigos.length);

    // Resaltar el amigo sorteado
    for (let i = 0; i < lista.length; i++) {
        lista[i].classList.remove("sorteado"); // Quitar resaltado anterior
    }
    lista[indiceGanador].classList.add("sorteado"); // Resaltar nuevo ganador

    // Mostrar resultado en la sección de sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="sorteado">🎉 ${amigos[indiceGanador]} es el ganador! 🎉</li>`;
}

/**
 * Evitar que el usuario escriba números en el campo de entrada.
 */
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (/\d/.test(event.key)) {
        event.preventDefault();
    }
});
