/* RELOJ */
let dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
];

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
    let fecha_dia = new Date();

    const dia_semana=document.querySelector("#dia_semana");
    const dia_mes=document.querySelector("#dia_mes");
    const mes=document.querySelector("#mes");
    const anio=document.querySelector("#anio");
    
    const hora=document.querySelector("#hora");
    const minutos=document.querySelector("#minutos");
    const segundos=document.querySelector("#segundos");
    
    dia_semana.textContent=dias[fecha_dia.getDay()];
    dia_mes.textContent=fecha_dia.getDate();
    mes.textContent=meses[fecha_dia.getMonth()];
    anio.textContent=fecha_dia.getFullYear();
    
    const reloj=()=>{
        let fecha=new Date();
    
        hora.textContent=fecha.getHours();
        minutos.textContent=fecha.getMinutes();
        segundos.textContent=fecha.getSeconds();   
    }  
    setInterval(reloj,1000);

    /* FIN DE RELOJ */
    
    /*ALERTA INICIO DE SESION*/
     
    setTimeout('confirm("¿Deseas registrarte?")' ,5000);


    
    

               
            
            
           
    