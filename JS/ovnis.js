/*galeria de imagenes izquierda*/
const izquierda= document.querySelector("#izquierda");
const boton= document.querySelector("#boton");

const imagenes = [
    "ovni1.jpg",
    "ovni2.jpg",
    "ovni3.jpg",
    "ovni4.jpg",
    "ovni5.jpg",
    "ovni6.PNG",
    "ovni7.jpg",
    "ovni8.jpg",
    "ovni9.jpg",
    "ovni10.png"
];

boton.addEventListener("click" , () => {
    const nueva_img = document.createElement("img");
    let pos = Math.floor(Math.random()*imagenes.length);
    nueva_img.setAttribute("src","Imagenes/" +imagenes[pos]);
    nueva_img.setAttribute("class","image");
    izquierda.appendChild(nueva_img);
 
});


/*galeria imagen derecha*/
const derecha= document.querySelector("#derecha");
const boton2= document.querySelector("#boton2");

const imagenes2 = [
    "ovni11.jpg",
    "ovni12.jpg",
    "ovni13.jpg",
    "ovni14.jpg",
    "ovni15.jpg",
    "ovni16.jpg",
    "ovni17.png",
    "ovni18.jpg",
    "ovni19.jpg",
    "ovni20.jpg",
    "ovni21.jpg",
    "ovni22.jpg"
];

boton2.addEventListener("click" , () => {
    const nueva_img2 = document.createElement("img");
    let pos2 = Math.floor(Math.random()*imagenes2.length);
    nueva_img2.setAttribute("src","Imagenes/" +imagenes2[pos2]);
    nueva_img2.setAttribute("class","image");    
    derecha.appendChild(nueva_img2);
});
