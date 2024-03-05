const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
const texto1 = document.getElementById("leyenda");
const texto2 =document.getElementById("leyenda1");
const btncopiar = document.querySelector(".copiar");
//     Laves de encriptacion
//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//funcion para encriptar eltexto con las llaves de encriptacion

function btnEncriptar(){
    const textoEntrada = document.querySelector(".entrada-texto");
    const contenido = textoEntrada.value;
    const patron = /^[a-z\s]+$/;

    if (patron.test(contenido)) {
        const textoEncriptar = encriptar(entradaTexto.value)
        salidaTexto.value = textoEncriptar
        entradaTexto.value ="";
        salidaTexto.style.backgroundImage ="none";
        texto1.style.visibility = "hidden";
        texto2.style.visibility = "hidden";
        btncopiar.style.visibility = "visible";

    } else{
        alert("El texto contiene caracteres no permitidos.");
    }
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
    entradaTexto.value ="";
    salidaTexto.style.backgroundImage ="none";
    texto1.style.visibility = "hidden";
    texto2.style.visibility = "hidden";
    btncopiar.style.visibility = "visible";
}

function desEncriptar(strDesEncriptar){
    let llaveDesEncriptar =[
        ["ai","a"],
        ["imes","i"],
        ["enter","e"],
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
    const textoSalida = document.getElementById("salidatexto");
    //seleccionar el texto del text area
    textoSalida.select();
    //copiar el texto al portapapeles
    document.execCommand("copy");

    salidaTexto.value ="";
    salidaTexto.style.backgroundImage ="url(resources/Muñeco.png)";
    texto1.style.visibility = "visible";
    texto2.style.visibility = "visible";
    btncopiar.style.visibility = "hidden";

    alert("Texto copiado");

}