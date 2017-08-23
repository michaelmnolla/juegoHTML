var contenedor = document.querySelector("#contenedor");
var lienzo = document.querySelector("#lienzo");


function ampliar(){

	contenedor.style.width = "100%";
	contenedor.style.height = "100vh";
	contenedor.style.margin = "0";

	lienzo.style.width = "100%";
	lienzo.style.height = "100vh";
	lienzo.style.backgroundSize = "cover";
	lienzo.style.backgroundRepeat = "no-repeat";

}