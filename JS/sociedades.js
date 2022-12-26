const textos = document.querySelector("#textos");
const imagen = document.querySelector("#imagen");

const textos1 = document.querySelector("#textos1");
const imagen1 = document.querySelector("#imagen1");

const textos2 = document.querySelector("#textos2");
const imagen2 = document.querySelector("#imagen2");

const textos3 = document.querySelector("#textos3");
const imagen3 = document.querySelector("#imagen3");

const textos4 = document.querySelector("#textos4");
const imagen4 = document.querySelector("#imagen4");

imagen.addEventListener("mouseenter",()=> {
    textos.style.color= "white";
});

imagen.addEventListener("mouseleave",()=> {
    textos.style.color= "gray";
});


imagen1.addEventListener("mouseenter",()=> {
    textos1.style.color= "white";
});

imagen1.addEventListener("mouseleave",()=> {
    textos1.style.color= "gray";
});

imagen2.addEventListener("mouseenter",()=> {
    textos2.style.color= "white";
});

imagen2.addEventListener("mouseleave",()=> {
    textos2.style.color= "gray";
});

imagen3.addEventListener("mouseenter",()=> {
    textos3.style.color= "white";
});

imagen3.addEventListener("mouseleave",()=> {
    textos3.style.color= "gray";
});

imagen4.addEventListener("mouseenter",()=> {
    textos4.style.color= "white";
});

imagen4.addEventListener("mouseleave",()=> {
    textos4.style.color= "gray";
});