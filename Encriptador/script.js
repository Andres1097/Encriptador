
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

var textoEncriptado = document.getElementById("input-texto");

var btnEncriptado = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");

var msg = document.getElementById("msg");

var copy = document.getElementById("btn-copy");

textoEncriptado.focus();

function alerta(){
    alert("Texto Invalido! Intentelo nuevamente");
}

function validar(){
    var validar = true;     // bandera

    var texto = textoEncriptado.value;
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
    var texto = textoEncriptado.value;
    if(validar()){
        var traduccion = texto
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");
        
        msg.value = traduccion;
    } else alerta();
}

function desencriptar(){
    var texto = textoEncriptado.value;
    if(validar()){
        var traduccion = texto
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");

        msg.value = traduccion;
    } else alerta();
}

function copiar(){
    var aCopiar = msg.value;
    navigator.clipboard.writeText(aCopiar);
}

btnEncriptado.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

copy.onclick = copiar;

