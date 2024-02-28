const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");

//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

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

}
