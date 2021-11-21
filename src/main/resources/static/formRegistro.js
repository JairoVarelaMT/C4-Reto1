
const EXR_correo =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const form_registro = document.getElementById('form_registro');
var email2 = document.getElementById('email');
var password2 = document.getElementById('password');
var name = document.getElementById('name');
$(document).ready(function(){
    $("#ventana_loggin").hide();

})

//Agregar el evento sudmit al boton de form loggin
form_registro.addEventListener('submit', (event) =>{
    event.preventDefault();
        if(EXR_correo.test(email2.value)){
            if(validarInput(password2) & validarInput(name))
                agregarUsuario();
            else
                console.log("Password no valido");
        }
        else{
            alert("Correo no valido.");
        }
    
});

function validarInput(valor) {
    let validar = true;
    if(valor.value.length > 4){
        return validar
    }
    else
        return validar = false;
}
function agregarUsuario(){
    var datos = {
        email:$("#email2").val(),
        password:$("#password2").val(),
    };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/user/new",
       
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Categoria guardada con exito");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload(e)
            alert("No se guardo correctamente");
            console.log(e);
        }
        });
}