//Haz tú validación en javascript acá


const formulario = document.querySelector("#formulario");

let $nombre = document.querySelector("#nombre");
let $correo = document.querySelector("#correo");
let $asunto = document.querySelector("#asunto");
let $mensaje = document.querySelector("#mensagem");

formulario.onsubmit = evento =>{
    evento.preventDefault();
    const nombre = $nombre.value;
    const correo = $correo.value;
    const asunto = $asunto.value;
    const mensaje = $mensaje.value;
    
    let regNombre = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i;
    let regCorreo =/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(nombre === "" || correo ==="" || asunto ==="" || mensaje ===""){
        alert("Todos los campos son obligatorios")
       
    }else if(!regNombre.test(nombre)){
        alert("El nombre solo puede contener letras")
        return;
    }else if(nombre.length > 30){
        alert("El nombre es demasiado largo")
        return;
    }else if(nombre.length < 3){
        alert("El nombre es demasiado corto")
        return;
    }else if(!regCorreo.test(correo)){
        alert("El correo no es válido")
        return;
    }else if(asunto.length >50){
        alert("El asunto es demasiado largo")
        return;
    }else if(asunto.length < 5){
        alert("El asunto es demasiado corto")
        return;
    }else if(mensaje.length < 5){
        alert("El mensaje es demasiado corto")
        return;
    }
    
    
     
     
}