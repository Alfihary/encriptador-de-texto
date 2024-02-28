const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
//     Laves de encriptacion
//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//funcion para encriptar eltexto con las llaves de encriptacion

function btnEncriptar(){
    const textoEncriptar = encriptar(entradaTexto.value)
    salidaTexto.value = textoEncriptar
}

function encriptar(strEncriptado){
    let llaveEncriptacion =[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    strEncriptado = strEncriptado.toLowerCase()
    for(let i = 0; i < llaveEncriptacion.length; i++){
        if(strEncriptado.includes(llaveEncriptacion[i][0])){
            strEncriptado = strEncriptado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1])
        }

    }
    return strEncriptado

//funcion para desencriptar el texto con las llaves de encriptacion    
}
function btnDesEncriptar(){
    const textoDesEncriptar = desEncriptar(entradaTexto.value)
    salidaTexto.value = textoDesEncriptar
}

function desEncriptar(strDesEncriptar){
    let llaveDesEncriptar =[
        ["enter","e"],
        ["imes","i"],
        ["ai","a"],
        ["ober","o"],
        ["ufat","u"]
    ]
    strDesEncriptar = strDesEncriptar.toLowerCase()
    for(let i = 0;i <llaveDesEncriptar.length; i++){
        if(strDesEncriptar.includes(llaveDesEncriptar[i][0])){
            strDesEncriptar = strDesEncriptar.replaceAll(llaveDesEncriptar[i][0], llaveDesEncriptar[i][1])
        }
    }
    return strDesEncriptar
}

//funcion para copiar el contenido del texarea de salida

function copiarTexto(){
    const texAreaSalida = document.getElementsByClassName("salida-texto");
    texAreaSalida.select();

    document.execCommand("copy");

    alert("Texto copiado");

    setTimeout(() => {
        window.close();
    },2000);
}