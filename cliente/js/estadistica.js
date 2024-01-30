class Estadisticas{
    constructor() {
        this.indicadorCarga = document.querySelector('#indicadorCarga');
        this.errorCarga = document.querySelector('#errorCarga');
        
        this.tabsEstadisticas = document.querySelector('#tabsEstadisticas');
        this.tabProfesion = document.querySelector('#tabProfesion');
        this.tabExperiencia = document.querySelector('#tabExperiencia');
        this.tabEdad = document.querySelector('#tabEdad');
        
        this.areaEstadisticas = document.querySelector('#areaEstadisticas');
        this.graficoProfesion = document.querySelector('#graficoProfesion');
        this.graficoExperiencia = document.querySelector('#graficoExperiencia');
        this.graficoEdad = document.querySelector('#graficoEdad');

        this.datosEstadisticas;
        this.cargarDatosEstadisticas();
        this.agregarEventListeners();
    }

    cargarDatosEstadisticas(){

    }

    agregarEventListeners(){
        
    }
}