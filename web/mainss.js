const datas3= {"Noticias":[{"total":5},{"id":5,"titulo":"Campeonato de Arag\u00f3n de Hockey Sala\",\t","noticiacorta":"Este Domingo 19 de Diciembre dar\u00e1 comienzo la liga aragonesa de ...","imagenes":"noticia5.jpg","fecha":"17\/12\/2021"},{"id":4,"titulo":"Acuerdo cooperaci\u00f3n con Chocolates Lacasa,\r\n\t\t\t","noticiacorta":"Recientemente se ha cerrado un acuerdo de cooperaci\u00f3n con Chocolates...,\r\n\t\t\t","imagenes":"noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg","fecha":"01\/10\/2021"},{"id":3,"titulo":"Resultados fin de semana","noticiacorta":"Este fin de semana se ha disputado la segunda jornada de los JJEE de Arag\u00f3n...,\r\n\t\t\t","imagenes":"noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg","fecha":"22\/11\/2021"},{"id":2,"titulo":"Segunda Jornada JJEE","noticiacorta":"Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Arag\u00f3n...\t","imagenes":"noticia2.jpg,noticia2f1.jpg","fecha":"19\/11\/2021"}]};
const datas={"Noticias":[{"total":5,"respuesta":"1"},{"id":4,"titulo":"Acuerdo cooperaci\u00f3n con Chocolates Lacasa,\r\n\t\t\t","noticiacorta":"Recientemente se ha cerrado un acuerdo de cooperaci\u00f3n con Chocolates...,\r\n\t\t\t","imagenes":"noticia4.jpg,noticia4f1.jpg,noticia4f2.jpg","fecha":"01\/10\/2021"},{"id":3,"titulo":"Resultados fin de semana","noticiacorta":"Este fin de semana se ha disputado la segunda jornada de los JJEE de Arag\u00f3n...,\r\n\t\t\t","imagenes":"noticia3.jpg,noticia3f1.jpg,noticia3f2.jpg","fecha":"22\/11\/2021"},{"id":2,"titulo":"Segunda Jornada JJEE","noticiacorta":"Este domingo 21 se disputara en el PDE la segunda jornada de los JJEE de Arag\u00f3n...\t","imagenes":"noticia2.jpg,noticia2f1.jpg","fecha":"19\/11\/2021"},{"id":1,"titulo":"Fin de la primera vuelta","noticiacorta":"Con la disputa de la 5\u00aa jornada y a falta de disputar el partido aplazado contra...\r\n\t\t\t","imagenes":"noticia1.jpg,noticia1f1.jpg","fecha":"14\/11\/2021"}]};
const header = document.querySelector('header');
const section = document.querySelector('section');
var controlpagina=0;
var cantidaddenoticias;
const datal=JSON.stringify( datas);
const noticias22 = JSON.parse(datal);
var noticias= null;
var noticiasmostradas=4;
var noticiaquequieromostrar=0;
const myH1=document.getElementById('h1primeranoticia');
      const myH2=document.getElementById('h1segundanoticia');
      const myH3=document.getElementById('h1terceranoticia');
      const myH4=document.getElementById('h1cuartanoticia');
      const myp1=document.getElementById('p1primeranoticia');
      const myp2=document.getElementById('p1segundanoticia');
      const myp3=document.getElementById('p1terceranoticia');
      const myp4=document.getElementById('p1cuartanoticia');
      const mypp1=document.getElementById('p2primeranoticia');
      const mypp2=document.getElementById('p2segundanoticia');
      const mypp3=document.getElementById('p2terceranoticia');
      const mypp4=document.getElementById('p2cuartanoticia');
      const fondo1=document.getElementById('primeranoticia');
      const fondo2=document.getElementById('segundanoticia');
      const fondo3=document.getElementById('terceranoticia');
      const fondo4=document.getElementById('cuartanoticia');
$(document).ready( function () {
    console.log(noticiaquequieromostrar+"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    
    showNoticias(1);
     });
function consultalistData(numero) {

      $.ajax({
        url: 'https://hockeysalduie78.es/php/noticias.php',
        type: 'POST',
        data: "nombre=5&pagina="+numero,
        
        
        success: function(data){
          console.log(data);
        const noticias4= JSON.parse(data);
        
         noticias=noticias4;
       
        
         nname();
        }
      })
      
    }
      function showNoticias(numero) {
        consultalistData(numero);
        controlpagina=numero;
/*if numero=1 se muestran: cantidad de noticias existentes que hay desde el final
  si numero =2 o mas se muestran:cantidad de noticias existentes que hay desde el final -4xnumero-1*/
     
       }
     function nname () {cantidaddenoticias=noticias.Noticias[0].total;
        console.log("cantidad de noticias total es: "+cantidaddenoticias);
          
            
            console.log(noticias);
            var mydiv=document.getElementById('inicioarticuloclass');
            mydiv.scrollTop=0;
            llenarnoticias();
         
       }
/*Muestra las 4 noticias*/
       function llenarnoticias() {
         valorinicio=4;
        myH1.textContent = noticias.Noticias[valorinicio-3].titulo;
        myp1.textContent = noticias.Noticias[valorinicio-3].textocorto;
        mypp1.textContent = noticias.Noticias[valorinicio-3].fecha;
        var array = noticias.Noticias[valorinicio-3].imagenes.split(',',1);
        var ruta="url(imagenes/noticias/"+ array[0]+")";
        fondo1.style.backgroundImage=ruta;

       myH2.textContent = noticias.Noticias[valorinicio-2].titulo;
        myp2.textContent = noticias.Noticias[valorinicio-2].textocorto;
        mypp2.textContent = noticias.Noticias[valorinicio-2].fecha;
        var array = noticias.Noticias[valorinicio-2].imagenes.split(',',1);
        var ruta="url(imagenes/noticias/"+ array[0]+")";
        fondo2.style.backgroundImage=ruta;

         myH3.textContent = noticias.Noticias[valorinicio-1].titulo;
        myp3.textContent = noticias.Noticias[valorinicio-1].textocorto;
        mypp3.textContent = noticias.Noticias[valorinicio-1].fecha;
        var array = noticias.Noticias[valorinicio-1].imagenes.split(',',1);
       var ruta="url(imagenes/noticias/"+ array[0]+")";
        fondo3.style.backgroundImage=ruta;     
       
        myH4.textContent = noticias.Noticias[valorinicio].titulo;
        myp4.textContent = noticias.Noticias[valorinicio].textocorto;
        mypp4.textContent = noticias.Noticias[valorinicio].fecha;
        var array = noticias.Noticias[valorinicio].imagenes.split(',',1);
       var ruta="url(imagenes/noticias/"+ array[0]+")";
        fondo4.style.backgroundImage=ruta;
       }

      function abrirnoticia(posicion){

        var noticiaid=noticias.Noticias[posicion].id;
        console.log("id"+noticiaid);
        noticiaquequieromostrar=noticiaid;
        
        console.log(noticiaquequieromostrar+"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        location.href='noticia.html?noticia='+noticiaid;

      
      }
      function primerapagina(){
        showNoticias(1)
      }
      function ultimapagina(){
        var pagina=Math.round( (cantidaddenoticias/noticiasmostradas)+0.5);
        console.log('paginaaaaaaaaaaaaaaaaaaaaa'+pagina);
        showNoticias(pagina);
      }
      function paginasiguiente(){
        
        console.log(cantidaddenoticias);
        var pagina=Math.round( (cantidaddenoticias/noticiasmostradas)+0.5);
        console.log(pagina);
        if (controlpagina<pagina){
          controlpagina=controlpagina+1
        }
        console.log(pagina);
        showNoticias(controlpagina)
      }
      function paginaanterior(){
        var pagina=1;
        if (controlpagina>1){
          pagina=controlpagina-1
        }
        showNoticias(pagina)
      
      }
      
