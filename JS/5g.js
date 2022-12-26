/* Cambiar Imagen al pasarpor encima */

const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");
const imagen4 = document.querySelector("#imagen4");

imagen1.addEventListener("mouseenter",()=> {
    imagen1.src="Imagenes/5g8.jpg";
});

imagen1.addEventListener("mouseleave",()=> {
    imagen1.src="Imagenes/5g1.jpeg";
});

imagen2.addEventListener("mouseenter",()=> {
    imagen2.src="Imagenes/5g9.jpg";
});

imagen2.addEventListener("mouseleave",()=> {
    imagen2.src="Imagenes/5g2.jpg";
});

imagen3.addEventListener("mouseenter",()=> {
    imagen3.src="Imagenes/5g6.jpg";
});

imagen3.addEventListener("mouseleave",()=> {
    imagen3.src="Imagenes/5g3.jpg";
});

imagen4.addEventListener("mouseenter",()=> {
    imagen4.src="Imagenes/5g5.jpg";
});

imagen4.addEventListener("mouseleave",()=> {
    imagen4.src="Imagenes/5g4.jpg";
});



/*Cambiar texto*/
const more1 = document.querySelector("#more1");
const texto1 = document.querySelector("#texto1");
const marco= document.querySelector("#marco");

more1.addEventListener("mousedown", () => {
    texto1.textContent=
    " Otras personas también están diciendo que el 5G tiene que ver con el COVID19, que tiene relación y que nos ocultan lo que realmente ocurre.    " + 
    "Tambien hace poco salió a la luz un video de un supuesto tecnico de instalaciones de torres 5G, en el que enseñaba una placa base sacada del kit que los mandaban instalar, "+
    " en el que se podía ver que estaba escrito 'COV19'. Realmente no sabemos si es falso o es real porque no se ha podido verificar nada aún, ya que nadie más ha abierto esos kit para comprobarlo."+
    " Dicen que el COVID empezó cuando empezaron las instalaciones de las torres 5G en WUHAN, que fue el país en tener el primer brote en todo el mundo."+
    "Se han llegado a compartir dos mapas de EEUU, en los que afirmaban que los mayores brotes de COVID eran donde mayor numero de torres 5G había instaladas. "+
    "También en China se ha podido ver videos de gente desmayandose en mitad de la calle cerca de torres 5G, lo que hace pensar que esté relacionado. Tambien, "+
    "se ha podido ver grandes numeros de palomas muertas y volando sin rumbo cerca de las torres 5G.";
    
    marco.style.border="2px solid white";
});

more1.addEventListener("mouseup", () => {
    texto1.textContent="El 5G se desarrollo por primera vez por la compañia ERICSSON, pero no quiso llevarlo a cabo por los presuntos efectos secundarios  que llevaría si se instalase el 5G."+
    "Pero a día de hoy se esta llevando a cabo el instalamiento del 5G, sin ser 100% seguro de si es seguro para la salud. En suiza este mismo año se han instalado más de 2000 antenas, a principio la gente se sentía muy confrome y contenta con la nueva"+
    "tecnologia, pero unos meses después han empezado a decir que se retirasen, llegando incluso a hacer manifestaciones para que se retiren esas torres 5G"+
   "Aquí en España se estan empezando a implantar las torres 5G sin ni si quiera avisar de que lo están haciendo, consiguiendo con esto que muchisimas personas no sean ni conscientes de lo que conlleva, ya sea positivo o negativo para ellos."+                 
    "En 2018 se produjo un estudio con ratas, en el que se exponia durante nueve horas al día a la radiación del 5G."+
    "Este estudio duró dos años. Las ratas macho presentaron un tipo de tumor canceroso en el corazón. "+
    
    "Cabe recordar que todo esto solo es información sacada de internet por distintos usuarios y la expongo aquí para hacer pensar sobre ello, no tiene porque ser real. ";
     marco.style.border="2px solid gray";
});