var form = document.getElementById("form")
var error_email = document.getElementById("error_email")
var msgError_email = document.getElementById("msgError_email")
var error_password = document.getElementById("error_password")
var msgError_password = document.getElementById("msgError_password")
var alerta_error = document.getElementById("alerta_error")
var entrar = false



form.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log("has dado click en el boton");
    var datos = new FormData(form)
    // console.log(datos.get("email"));
    var email = datos.get("email");
    var password = datos.get("password");
    var entrar = false

    /**Reset de mensajes */

    /**email */
    error_email.classList.remove("is-invalid")
    msgError_email.classList.remove('invalid-feedback')
    msgError_email.innerHTML = ""

    /**Mensajes finales */
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""
    
    /**password */
    error_password.classList.remove('is-invalid')
    msgError_password.classList.remove('invalid-feedback')
    msgError_password.innerHTML = ""
    

    if (email ==="") {
        error_email.classList.add('is-invalid')
        msgError_email.classList.add('invalid-feedback')
        msgError_email.innerHTML = "Ingresa tu usuario o correo"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">Faltan datos</p>`
        entrar = true
    }
    if (password ==="") {
        error_password.classList.add('is-invalid')
        msgError_password.classList.add('invalid-feedback')
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">Faltan datos</p>`
        entrar = true
    }
    if(!entrar){
        console.log("todo lleno");
    }
    


})