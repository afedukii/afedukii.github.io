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
const typed2 = new Typed('.typed2', {
	stringsElement: '#knowledge_pres_es', // ID del elemento que contiene cadenas de texto a mostrar.
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
const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) => {
	const requesJson = await fetch('https://afedukii.github.io/languages/'+language+'.json');
	const texts = await requesJson.json();
	for(const textToChange of textsToChange){
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;
		textToChange.innerHTML = texts[section][value];
	}
};


window.onload = function () {
    var flagsElements = document.querySelectorAll('.flags')
    for (i = 0; i < flagsElements.length; i++) {
    	flagsElements[i].addEventListener("click",(e)=>{
			changeLanguage(e.target.parentElement.dataset.language);
			if(e.target.parentElement.dataset.language == "gb"){
				document.getElementById('i-es').style.display = 'none';
				document.getElementById('i-en').style.display = 'block';
			}else{
				document.getElementById('i-en').style.display = 'none';
				document.getElementById('i-es').style.display = 'block';
			}
    	});
    }
}

