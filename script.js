
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var mensaje = document.querySelector("#mensaje");
var resultado = document.querySelector("#resultado");

var botonEncriptado = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");

var copy = document.querySelector(".contenedor__programa--copiar");

mensaje.focus();

function alerta(){
    alert("Texto Invalido! Intentelo nuevamente");
}

function validar(){
    var validar = true;     // bandera

    var texto = mensaje.value;
    var textoMinuscula = texto.toLowerCase();   // Transforma el texto en minusculas

    var textoEnArreglo = texto.split("");       //Transforma el texto en un arreglo
    var acentos = ["á", "é", "í", "ó", "ú"];

    for(var indiceTexto = 0; indiceTexto < textoEnArreglo.length; indiceTexto++){
        for(var indiceAcentos = 0; indiceAcentos < acentos.length; indiceAcentos++){
            if(textoEnArreglo[indiceTexto] == acentos[indiceAcentos]){  //compara cada letra del arreglo 
                validar = false;                                        // a ver si encuentra coincidencias
                break;
            }
        }
    }

    return texto == textoMinuscula && validar;
}

function encriptar(){
    var texto = mensaje.value;
    if(validar()){
        var traduccion = texto
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");
        
        resultado.value = traduccion;
    } else alerta();
}

function desencriptar(){
    var texto = mensaje.value;
    if(validar()){
        var traduccion = texto
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");

        resultado.value = traduccion;
    } else alerta();
}

function copiar(){
    var aCopiar = resultado.value;
    navigator.clipboard.writeText(aCopiar);
}

botonEncriptado.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

copy.onclick = copiar;

