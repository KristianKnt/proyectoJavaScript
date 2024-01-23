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

        if(resultadoValidacion.esValido){
            this.removerErroresCampo();
            this.prepararEnvioDatos(datosFormulario);
        }else{
            this.removerErroresCampo();
            this.resaltarCamposConErrores(resultadoValidacion.resultado);
        }
    }

    obtenerDatosFormulario(){
        return {
            nombre : this.nombre.value,
            email : this.email.value,
            telefonoMoivl: this.telefonoMovil.value,
            edad: this.edad.value,
            profesion: this.profesion.value,
            experiencia: parseInt(document.querySelector('input[name="expetiencia"]:checked').value),
            expectativas: this.expectativas.value
            

        }
    }

    removerErroresCampo(){
        this.nombre.parentElement.classList.remove('has-error');
        this.email.parentElement.classList.remove('has-error');
        this.telefonoMovil.parentElement.classList.remove('has-error');
        his.edad.parentElement.classList.remove('has-error');
        this.profesion.parentElement.classList.remove('has-error');
        this.experiencia.parentElement.classList.remove('has-error');
        
    }

    resaltarCamposConErrores(resultado){
        if(!resultado.nombre){
            this.nombre.parentElement.classList.add('has-error');
        }
        if(!resultado.email){
            this.email.parentElement.classList.add('has-error');
        }
        if(!resultado.telefonoMoivl){
            this.telefonoMovil.parentElement.classList.add('has-error');
        }
        if(!resultado.edadd){
            this.edad.parentElement.classList.add('has-error');
        }
        if(!resultado.profesion){
            this.profesion.parentElement.classList.add('has-error');
        }
        if(!resultado.experiencia){
            this.experiencia.parentElement.classList.add('has-error');
        }
    }

    prepararEnvioDatos(datosFormulario){
        this.registrarEvento.classList.add('hidden');
        this.indicadorCarga.classList.remove('hidden');
        
    }
}