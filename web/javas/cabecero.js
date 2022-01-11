const navmenu= document.getElementById('controlnavmenu');
const navmenu5= document.getElementsByClassName('controlnavmenuu');

var a52=document.getElementById("cabeceroboton52");
var a=document.getElementById("controlnavmenu");
var a51=document.getElementById("cabeceroboton51");
var contadornavmenu=1;
var contadornavmenu5=1;
var contadornavmenu51=1;
var contadornavmenu52=1;
var fuera='-100vw';
var dentro='0vw';
var color='brown';

	$(document).ready(main);
function escondernavmenu() {
	$('.navmenu').animate({
                
		right: fuera
	});
	contadornavmenu = 1;
}
function expandirnavmenu() {
	$('.navmenu').animate({
              
		right: dentro
	});
	contadornavmenu = 0;
a.style.display
}
function escondernavmenu5() {
	$('.navmenu5').animate({
                
		right: fuera
	});
	contadornavmenu5 = 1;
}
function expandirnavmenu5() {
	$('.navmenu5').animate({
              
		right: dentro
	});
	contadornavmenu5 = 0;
}
function escondernavmenu51() {
	$('.navmenu51').animate({
                
		right: fuera
	});
	contadornavmenu51 = 1;
	a51.style.backgroundColor="transparent";
}
function expandirnavmenu51() {
	a51.style.backgroundColor=color;
	$('.navmenu51').animate({
              
		right: dentro
	});
	contadornavmenu51 = 0;

}
function escondernavmenu52() {
	$('.navmenu52').animate({
                
		right: fuera
	});
	contadornavmenu52 = 1;
	
      a52.style.backgroundColor="transparent";
}
function expandirnavmenu52() {
	
	
      a52.style.backgroundColor=color;
	$('.navmenu52').animate({
              
		right: dentro
	});
	contadornavmenu52 = 0;
}
function main(){
	if (window.screen.width>1023) {dentro='-0vw'
		
	}else{dentro='0vw'}
    $('#cabecerobotonmenu').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu == 1){
			expandirnavmenu();
		} else {
			escondernavmenu();
			escondernavmenu5();
			escondernavmenu51();
			escondernavmenu52();
		}

	});
	$('#cabecerobotoncompeticiones').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu5 == 1){
			expandirnavmenu5();
		} else {
			escondernavmenu51();
			escondernavmenu5();
			escondernavmenu52();
		}

	});
	$('#cabeceroboton51').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu51 == 1){
			expandirnavmenu51();
			escondernavmenu52();
		} else {
			escondernavmenu51();
		}
});
$('#cabeceroboton52').click(function(){
	// $('nav').toggle(); toggle=aparece brusco

	if(contadornavmenu52 == 1){
		expandirnavmenu52();
		escondernavmenu51();
	} else {
		escondernavmenu52();
	}
});
$('#volver1').click(function(){
	// $('nav').toggle(); toggle=aparece brusco

	
		escondernavmenu52();
		escondernavmenu51();
		escondernavmenu5()
	
});
	
};
function subcompeticiones(){

}
window.onorientationchange= function(){
	console.log("resizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    if(screen.width>1023& screen.width<screen.height) { 
		console.log("if");
		navmenu.style.right='-100vw'
		dentro='0vw'
		}
		else if(screen.width>1023){ 
			console.log("if");
			navmenu.style.right='0vw'
			dentro='0vw'
			}

		else{
			navmenu.style.right='-100vw';
			dentro='0vw'
			contadornavmenu=1}
                        }
						


function ira(pagina){
	console.log(pagina);
	location.href=pagina
}
/*aparecerobjetos*/
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
	elementTop <=
	(window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
	elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
	if (elementInView(el, 1.15)) {
	  displayScrollElement(el);
	} else if (elementOutofView(el)) {
	  hideScrollElement(el)
	}
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



function ponerimagen3(){
	const myH1=document.getElementById('imagencalendarios');
	var ruta="url(imagenes/obras.png)";
	myH1.style.height="100vw";
    myH1.style.backgroundImage=ruta;
}
function abrircompeticiones(posicion){
	location.href='competiciones.html?var1='+posicion;}

	function abrirequipo(posicion){
		var numeroequipo=posicion;
		location.href='equipo.html?var1='+numeroequipo;
	  
	  }
	  
	function irainicio(){
	
		location.href='index.html'
	  
	  }
	


/*//POLÍTICA DE COOKIES
//Evento clic de la etiqueta con la clase (.js-boton-cookie)
$('.js-boton-cookie').click(function() {
	//Almaceno los datos en localStorage (clave, valor)
	localStorage.setItem('salduie78', 'yes');
	//Oculto la barra que muestra la información de política de cookies
	$('.politicas-cookie').css('display', 'none');
	//Muestro un mensaje en consola
	console.log('Haz aceptado nuestra política de cookies. ☺️');
   });
   
   //Creo la variable "dev" que almacena el valor asignado que seria (yes)
   var dev = localStorage.getItem('salduie78');
   //Realizo una condición si el valor obtenido de la variable "dev" es diferente (null) quiere decir que el usuario a aceptado nuestra política de cookies
   if(dev != null){
	$('.politicas-cookie').css('display', 'none');
   }else{//De lo contrario muestro la información
	//$('.politicas-cookie').css('display', 'block');
$('.politicas-cookie').css('display', 'none');//quitar esto para que se vea
   }*/
   const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
   const botonAceptarCookies2=document.getElementById('btn-aceptar-cookies2');
   const botonAceptarCookies3=document.getElementById('btn-permitirselec-cookies');
   
   const botonconfigurarCookies = document.getElementById('btn-configurar-cookies');
   const avisoCookies = document.getElementById('aviso-cookies');
   const avisoCookies2 = document.getElementById('contenedor-seleccion-cookies');
   const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
   
   const tablero1=document.getElementById("tablero-cookie-consentimiento")
   const tablero2=document.getElementById("tablero-cookie-consentimiento-listado")
   const tablero3=document.getElementById("tablero-cookie-consentimiento-solotexto")
   
   const switchh=document.getElementById("switchid");
   const switchh1=document.getElementById("switchid1");
   dataLayer = [];
   function mostrarcookies(){
	   scrollX=0;
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
	if (localStorage.getItem('no-mostrar')) {
		switchh.checked=true;	}
	else{switchh.checked=false;};
	if (localStorage.getItem('cookies-aceptadas')) {
		switchh1.checked=true;	}
	else{switchh1.checked=false;}
	localStorage.removeItem('cookies-aceptadas');
	localStorage.removeItem('no-mostrar');
	


	
   }
   if(!localStorage.getItem('no-mostrar')){
	   avisoCookies.classList.add('activo');
	   fondoAvisoCookies.classList.add('activo');
	   switchh.checked=false;
	   switchh1.checked=false;
	   console.log("noaceptadas");
   } else if(localStorage.getItem('cookies-aceptadas')){
	   
	   dataLayer.push({'event': 'cookies-aceptadas'});
	   console.log("aceptadas");
   }
   
   botonconfigurarCookies.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   avisoCookies2.classList.add('activo');
	   
	   
   });
   botonAceptarCookies.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   fondoAvisoCookies.classList.remove('activo');
   avisoCookies2.classList.remove('activo');
	   localStorage.setItem('cookies-aceptadas', true);
	   localStorage.setItem('no-mostrar',true);
	   dataLayer.push({'event': 'cookies-aceptadas'});
   });
   botonAceptarCookies2.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   fondoAvisoCookies.classList.remove('activo');
  		 avisoCookies2.classList.remove('activo');
	   localStorage.setItem('cookies-aceptadas', true);
	   localStorage.setItem('no-mostrar',true);
	   dataLayer.push({'event': 'cookies-aceptadas'});
   });
   
   botonAceptarCookies3.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   fondoAvisoCookies.classList.remove('activo');
   avisoCookies2.classList.remove('activo');
   
   if(switchh.checked){
	   
	   localStorage.setItem('no-mostrar',true);}
	   else{
	   localStorage.removeItem('no-mostrar');};
   
   if(switchh1.checked){
	   
	   localStorage.setItem('cookies-aceptadas', true);
   dataLayer.push({'event': 'cookies-aceptadas'});}
   else{
	localStorage.removeItem('cookies-aceptadas');
   };
	   
	   
	   
   });
   
   function seleccion(id){
	   var scrollElements = document.getElementsByClassName("itemclic");
	   console.log(scrollElements);
	   scrollElements[0].classList.remove("itemclic")
	   var bot=document.getElementById(id);
	   bot.classList.add("itemclic");
	   switch (id) {
		   case "seleccion1":
			   tablero2.style.display="none";
			   tablero3.style.display="none";
			   tablero1.style.display="block";
			   break;
			   case "seleccion2":
				   tablero2.style.display="block";
			   tablero1.style.display="none";
			   tablero3.style.display="none";
			   break;
			   case "seleccion3":
				   tablero3.style.display="block";
				   tablero1.style.display="none";
				   tablero2.style.display="none";
				   break;
		   
	   
		   default:
			   break;
	   }
	   /*que mostramos*/
   }
   function box(bot){
	   console.log("box");
	   console.log(bot);
	   var bot2=document.getElementById(bot);
	   console.log(bot2.checked);
   }
  