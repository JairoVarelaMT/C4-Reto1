
const form_loggin = document.getElementById('form_loggin');
var EXR_correo =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const EXR_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/



form_loggin.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(EXR_correo.test($("#email").val())){
        if (EXR_password.test($('#password').val())) {
            console.log("Exito.");
            allUsers();//LAMADO DE METODO PARA MOSTRAR TODOS LOS USUARIOS.
        }
        else
            console.log("contraseña inconrrecta.")
    }
    else
        console.log("Correo incorrecto")
    
});
//SERVICIO GET PARA TRAER TODOS LOS USER DE LA BD
function allUsers(){
    $.ajax({
        url:"http://localhost:8080/api/User/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            validarUser(respuesta)//LAMADO A EL METODO PARA BUSCAR SI EXISTE EL CORREO Y LA CONTRASEÑA INGRESADAS
        }
    });
}
function validarUser(respuesta){// resive como parametro el objeto jSON que retorna el servicio GET
    let ingreso = 0;
    for (i=0; i<respuesta.length; i++){
        if (respuesta[i].email == $('#email').val()) {
            ingreso++;
        }
        if (respuesta[i].password == $('#password').val()) {
            ingreso++;
        }
    }
    if(ingreso == 2){
        alert(" SI El usuario existe.")
    }
    else
        alert('No existe');  
}
