resizeWindow();
window.addEventListener('resize', resizeWindow);
function resizeWindow(){
    if(window.innerWidth < 770){
        document.getElementById("header_cont_namepage").classList.remove("col-sm-5");
        document.getElementById("header_cont_namepage").classList.add("col-sm-10");
		document.getElementById("header_cont_namepage").classList.remove("justify-content-center");
        document.getElementById("header_cont_namepage").classList.add("justify-content-around");
    }else{
        document.getElementById("header_cont_namepage").classList.remove("col-sm-10");
        document.getElementById("header_cont_namepage").classList.add("col-sm-5");
		document.getElementById("header_cont_namepage").classList.remove("justify-content-around");
        document.getElementById("header_cont_namepage").classList.add("justify-content-center");
    }
}


const typed = new Typed('.typed', {
	stringsElement: '#knowledge_pres', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '_', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});