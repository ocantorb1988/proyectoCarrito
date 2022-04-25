// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");

// Eventos
cargarEventListener();
function cargarEventListener() {
  //Cuando agrega un curso si presiono "Agregar Al Carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
  console.log(curso);
}
