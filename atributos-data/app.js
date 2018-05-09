
var personajes = document.querySelectorAll(".personaje");
for (var i = 0; i < personajes.length; i++) {
  personajes[i].addEventListener("click", mostrarInfoPersonaje);
}

function mostrarInfoPersonaje(){
  // Trabaja con los atributos de cada personaje
  var nombre = this.dataset.nombre;
  var fecha = this.dataset.fecha;
  
  // Hace la concatenación de la información de los personajes de nombre y fecha de creación.
  var parrafoInfo = document.createElement("p");
  parrafoInfo.classList.add("active");
  parrafoInfo.innerText = "Su nombre es " + nombre + " y su primera aparición fue en " + fecha;

  // Aparece la información anterior reflejada en el HTML.
  var espacio = document.querySelector(".informacion");
  espacio.appendChild(parrafoInfo);
  
  // Se substituye el párrafo inicial de "Haz click sobre cualquier personaje para saber más de él" por
  // la información de cada personaje cuando se le de un click.
  var infoVisible = document.querySelector("p.active");
  infoVisible.classList.remove("active");
}
