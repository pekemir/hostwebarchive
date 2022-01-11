
var numnoticia;
var max=10;/*poner maximo php*/
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const myH1=document.getElementById('h1primeranoticia2');
    const contenedortexto = document.getElementById("contenedorparatexto");
      
    const myp1=document.getElementById('p1primeranoticia2');
   
    const mypp1=document.getElementById('p2primeranoticia2');
   
    const fondo1=document.getElementById('primeranoticia2');
    var interval;
const TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;
let posicionActual = 0;
let $imagen = document.querySelector('#primeranoticia2');

let intervalo;

var cantidaddenoticias;
var noticiass=null;
var IMAGENES=[];
var noticias=null;
var valorinicio;
var numerodenoticia;

window.onload = function getGET()
{ // capturamos la url
    var loc = document.location.href;
    console.log(loc);
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        console.log(getString);
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        console.log(GET);
        var tmp = GET[0].split('=');
        numnoticia=tmp[1];     
        console.log(numnoticia);
        // recorremos todo el array de valores
       numerodenoticia=numnoticia;
       consultanoticia(numerodenoticia);

            
    }else{location.href='noticias.html';}
   
}
    
function consultanoticia(numero) {
  $.ajax({
    url: 'https://hockeysalduie78.es/php/noticia.php',
    type: 'POST',
    data: "nombre=5&pagina="+numero,
    
    
    success: function(data){
      console.log(data);
      const noticias4 = JSON.parse(data);
      noticias=noticias4;
      console.log(noticias);
      
     showNoticia(numero);
    }
  })
} 
    
   

    function showNoticia(numero) {
       
       valorinicio=numero;
        
      
       console.log(valorinicio);
       
         //array de imagenes
         var imgs=noticias.Noticias[0].imagenes.split(',');
         for (let index = 0; index < imgs.length; index++) {
          var ruta='url(imagenes/noticias/'+ imgs[index]+')';
          console.log(ruta);
          IMAGENES[index]=ruta;
          fondo1.style.backgroundImage=ruta;
         }
         myH1.textContent = noticias.Noticias[0].titulo;
          myp1.textContent = noticias.Noticias[0].noticiaentera;
var enlace;
        if (noticias.Noticias[0].enlaces!="") {
var parrafo = document.createElement("a");
          parrafo.className="p1noticias";
          enlace=noticias.Noticias[0].enlaces;
          parrafo.href=enlace;
          parrafo.innerHTML=enlace;
        contenedortexto.appendChild(parrafo);
        }
          mypp1.textContent = noticias.Noticias[0].fecha;
          
          fondo1.style.backgroundImage=IMAGENES[0];
          if (IMAGENES.length>1) {
              interval=16000/IMAGENES.length;
              if (interval<4000) {interval=4000;
                  
              }
            playIntervalo(interval);
          }
         
        }
        function playIntervalo(tiempo) {
            intervalo = setInterval(pasarFoto, tiempo);
          }
          function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        
        }
        function renderizarImagen () {
           console.log("cambio");
            $imagen.style.backgroundImage = IMAGENES[posicionActual];
            
           
        }

        function abrirnoticiasig(){
          var noticiaid=noticias.Noticias[0].id;
          console.log("id"+noticiaid);
          noticiaquequieromostrar=noticiaid;
          
          console.log(noticiaquequieromostrar+"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
         
  
               

                console.log(numero+1);
               
                if (max>noticiaid+1){
                   noticiaid=noticiaid+1;
         
                    location.href='noticia.html?noticia='+noticiaid;}
              
              
          }
          function abrirnoticiasant(){
            var noticiaid=noticias.Noticias[0].id;
            console.log("id"+noticiaid);
            noticiaquequieromostrar=noticiaid;
            
            
           
    
           

           
            var noticianumero=noticiaquequieromostrar-1;
            if (noticianumero>=0){
                numnoticia=noticianumero;
               
            location.href='noticia.html?noticia='+noticianumero;}
          
          

          }
          function abrirotrapagina(){
            location.href='https://pekemir.github.io/imagenes/noticias/'+noticias[valorinicio].imagenes[posicionActual]+'.jpg';
           
          }