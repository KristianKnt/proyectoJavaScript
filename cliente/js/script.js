class RegistroEvento{
    constructor(){
        this.frmRegistroEvento = document.querySelector('fmrRegistroEvento');
        this.nombre = document.querySelector('#nombre');
        this.email = document.querySelector('#email');
        this.telefonoMovil = document.querySelector('#telefonoMovil');
        this.edad = document.querySelector('#edad');
        this.profesion = document.querySelector('#profesion');
        this.experiencia = document.querySelector('#experiencia');
        this.expectativas = document.querySelector('#expectativas');
        this.registrarEvento = document.querySelector('#registrarEvento');
        this.indicadorCarga = document.querySelector('#indicadorCarga');

        this.frmRegistroEvento.addEventListener('submit',evento =>{
            this.subirFormulario(evento);
        });
    }

    subirFormulario(evento){
        event.preventDefault();

        const datosFormulario = this.obtenerDatosFormulario();
        const resultadoValidacion = validarDatosRegistroEvento(datosFormulario);
    }

    obtenerDatosFormulario(){
        return {
            nombre : this.nombre.value,
            email : this.email.value,
            telefonoMoivl: this.telefonoMovil.value,
            edad: this.edad.value,
            profesion: this.profesion.value,
            experiencia: this.experiencia.value,
            expectativas: this.expectativas.value
            

        }
    }
}