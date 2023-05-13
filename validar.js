/* Esperemos a que la hoja este cargada antes de ejecutar el archivo validar.js */
$(document).ready(function () { 
    /* Cuando el usuario envía el formulario, ejecutar esta funcion */
    $("#form-cliente").submit(function (event) {
       /*  cancela detiene que el formulario se envie automaático (evento) */
        event.preventDefault();
        // Obtener valores ingresados en el formulario
        let xnombre = $("#txtnombre").val();
        let xapellido = $("#txtapellido").val();
        let xcorreo = $("#txtcorreo").val();
        let xgenero = $("#txtgenero").val();
        let xfechaNacimiento = $("#dfecha-nacimiento").val();

         /* Validar campos por las variables de cada campo */ 
        if (xnombre == "" || xnombre.length > 50 || xnombre.length <2) {
            alert("Es obligatorio que ingrese su nombre correctamente.");
            return; 
        }
        if (xapellido == "" || xnombre.length > 80 || xnombre.length <2) {
            alert("Es obligatorio que ingrese su apellido correctamente.");
            return; 
        }
        if (xcorreo == "" || xcorreo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            alert("Es obligatorio que ingrese su correo correctamente.");
            return; 
        }
        if (xgenero == "") {
            alert("Es obligatorio que ingrese su genero correctamente.");
            return; 
        }
        if (xfechaNacimiento == "") {
            alert("Es obligatorio que ingrese su fecha de Nacimiento correctamente.");
            return; 
        }
        /* Muestra un mensaje Confirmar que el usuario va a enviar los datos */
        if (!confirm("¿Está de acuerdo de enviar los datos?")) {
            return;
        }
       /*  Mostrar un mensaje de alerta que se envió el formulario con los datos ingresados*/
        alert("El formulario ha sido enviado..");
    })
})