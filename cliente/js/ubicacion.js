function incializarMap(){
    let mapa = new google.maps.Map(document.getElementById('mapaUbicacionEvento'),{
        zoom: 15,
        center:{lat:4.60971,lng:-74.08175}
    });

    let marcador = new google.maps.Marker({
        map:mapa,
        draggable:true,
        animation: google.maps.Animation.Drop,
        position: {lat:4.60971,lng:-74.08175}
    });

    marcador.addListener('click',()=>{
        ventanaInformacion.open(mapa, marcador);
    });

    let ventanaInformacion = new google.maps.InfoWindow({
        content: 'El evento se realizara en Bogotá Colombia.'
    });

    ventanaInformacion.open(mapa,marcador);

}


window.addEventListener('load',()=>{
    const scriptMapa = document.createElement('script');
    //const llaveApi='AIzaSyCmwPkEWnEftq1p9dXiJguxvF7feZsNIls';
    const llaveApi='AIzaSyD46P_2n8SeyON0C3rKacJfNCfyI_ovo54';
    scriptMapa.src = `https://maps.googleapis.com/maps/api/js?key=${llaveApi}&callback=incializarMap`;
    document.body.appendChild(scriptMapa);
})