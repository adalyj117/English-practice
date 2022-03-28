let wordSpanish = document.getElementById("word-Spanish");
const respuesta = document.getElementById("rpta")
const wordEnglish = document.getElementById("word-English");
let wordEng = ""
let palabra = ""

function palabraAleatoria(){
    wordEnglish.value = ""
    respuesta.innerText = ""
    const indiceAl = Math.floor(Math.random() * palabras.length);
    wordSpanish.innerHTML =  palabras[indiceAl].wordEs;
    palabra = palabras[indiceAl]
};

function comprobar(){
    wordEng = wordEnglish.value;
    
    if(palabra.wordEn == wordEng.toLowerCase() ){
        respuesta.innerText = "Correcto";
    }else{
        respuesta.innerText = "Incorrecto";
    }
}