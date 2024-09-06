const input = document.getElementById("ingresar-tareas");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTareas() {
    if (input.value) {
        //div-Tarea
        let tareaNueva = document.createElement("div");
        tareaNueva.classList.add("tarea");
        //texto ingresado por el usuario
        let texto = document.createElement("p");
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        //contenedor-iconos
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);
        //iconos
        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.addEventListener("click", completarTarea);
        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);
        //agregar los iconos al contenedor
        iconos.append(completar, eliminar);
        //agregar la tarea a la lista
        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert("Ingresa una tarea");
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode; //donde ocurrio el evento
    tarea.classList.toggle("completada"); //si la clase ya la tiene, lo va a eliminar, y si no la tiene, la va a agregar
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode; //donde ocurrio el evento
    tarea.remove();
}

boton.addEventListener("click", agregarTareas);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        agregarTareas();
    }
})