
const EXR_password = / ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$ /;
const EXR_correo =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const form_loggin = document.getElementById('form_loggin');
var email = document.getElementById('email');
var password = document.getElementById('password');

//Agregar el evento sudmit al boton de form loggin
form_loggin.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(){
        console.log(correcto);
    }
    else{
        alert("Ingrese un correo valido");
    }
    
});