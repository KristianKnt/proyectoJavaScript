function validarDatosRegistroEvento(datosFormulario){
    const resultado = {
        nombre : validarNombre(datosFormulario.nombre),
        email : validarEmail(datosFormulario.email),
        telefonoMoivl: validarTelefonoMovil(datosFormulario.telefonoMoivl),
        edad: validarEdad(datosFormulario.validarEdad),
        profesion: validarProfesion(datosFormulario.profesion),
        experiencia: validarExperiencia(datosFormulario.experiencia)        
    }

    let campo;
    let esValido = true;

    for(campo in resultado){
        esValido = esValido && resultado[campo];

    }
    return {
        esValido,
        resultado
    };
}


function validarNombre(nombre){
    return nombre.length > 3;
}

function validarEmail(email){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
}

function validarTelefonoMovil(telefonoMoivl){
    const regexTelefonoMovil = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    return regexTelefonoMovil.test(telefonoMoivl);
}

function validarEdad(edad){
    return edad >= 10 && edad <= 50;
}

function validarProfesion(profesion){
    const profesionesDisponibles =['estudiantes', 'desarrollador','ingeniero','otro'];
    return profesionesDisponibles.indexOf(profesion) > -1;
}

function validarExperiencia(experiencia){
    return experiencia >=1 && experiencia <= 3;
}
