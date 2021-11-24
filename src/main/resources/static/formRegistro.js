
var EXR_correo2 =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const form_registro = document.getElementById('form_registro');
var EXR_password2 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

//Agregar el evento sudmit al boton de form loggin
form_registro.addEventListener('submit', (event) =>{
    event.preventDefault();
        if(EXR_correo2.test($('#email2').val())){
            if(EXR_password2.test($("#password2").val()))
                agregarUser();
            else
                alert("Password2 no valido");
        }
        else{
            alert("Correo2 no valido.");
        }
});


function agregarUser(){
    var datos = {
        email:$("#email2").val(),
        password:$("#password2").val(),
        name:$('#name').val()
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