let inp = document.getElementById('inp') ;
let Encode = document.getElementById('Encode') ;
let code = document.getElementById('code') ;
// code.value = "Aditya"
Encode.onclick = function () {
    let data = inp.value ;
    data = btoa(data) ;
    code.value = data ;
} ;