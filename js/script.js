var contenedor = document.querySelector("#contenedor");
var lienzo = document.querySelector("#lienzo");
var btnAmpliar = document.querySelector("#btnAmpliar");


function ampliar(){

	contenedor.style.width = "100%";
	contenedor.style.height = "100vh";
	contenedor.style.margin = "0";

	lienzo.style.width = "100%";
	lienzo.style.height = "100vh";
	lienzo.style.backgroundSize = "cover";
	lienzo.style.backgroundRepeat = "no-repeat";


	btnAmpliar.innerHTML = "Reducir";
	btnAmpliar.style.position = "fixed";
	btnAmpliar.style.top ="10px";
	btnAmpliar.style.left = "10px";
	btnAmpliar.style.zIndex = "1";

	btnAmpliar.setAttribute("onClick" , "Reducir()");
}

function Reducir(){

	contenedor.style.width = "1000px";
	contenedor.style.height = "500px";
	contenedor.style.margin = "5vh auto";

	lienzo.style.width = "1000px";
	lienzo.style.height = "500px";

	btnAmpliar.innerHTML = "ampliar";
	btnAmpliar.style.position = "relative";
	btnAmpliar.style.top ="0";
	btnAmpliar.style.left = "0";
	btnAmpliar.style.zIndex = "0";

	btnAmpliar.setAttribute("onClick" , "ampliar()");
	

	}