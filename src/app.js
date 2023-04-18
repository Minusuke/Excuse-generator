function GenerarExcusa() {
  let Pronombre = ["Un", "El"];
  let Sujeto = [
    "depresivo",
    "mapache",
    "borracho",
    "duende",
    "marciano",
    "fantasma",
    "vampiro",
    "monstruo",
  ];
  let Accion = [
    "se llevó mi",
    "tomó mi",
    "robó mi",
    "rompió mi",
    "destruyó mi",
  ];
  let Posesion = [
    "tarea",
    "blackcard",
    "dinero",
    "salud mental",
    "peluche de chilemorron",
    "celular",
  ];
  let Donde = [
    "en internet",
    "en el peral",
    "en mi propia casa juan lorenzo",
    "en la luna",
    "en el infierno",
    "en otro universo",
  ];

  let proIndx = Math.floor(Math.random() * Pronombre.length);
  let sujIndx = Math.floor(Math.random() * Sujeto.length);
  let accIndx = Math.floor(Math.random() * Accion.length);
  let posIndx = Math.floor(Math.random() * Posesion.length);
  let donIndx = Math.floor(Math.random() * Donde.length);

  return (
    Pronombre[proIndx] +
    " " +
    Sujeto[sujIndx] +
    " " +
    Accion[accIndx] +
    " " +
    Posesion[posIndx] +
    " " +
    Donde[donIndx]
  );
}

window.onload = function() {
  let quoteElement = document.querySelector("#Respuesta");
  let buttonElement = document.querySelector("#Boton");

  buttonElement.addEventListener("click", () => {
    quoteElement.innerHTML = GenerarExcusa();
  });
};
