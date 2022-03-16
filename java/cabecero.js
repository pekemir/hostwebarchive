/*aparecerobjetos*/

function reveal() {
    var reveals = document.querySelectorAll(".js-scroll");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      
      console.log(elementTop);
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  /*aparecerobjetos metodo2*/
  const header=document.getElementById('controlheader')
  const scrollElements = document.querySelectorAll(".js-scrollheader");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  return (
      (elementTop +window.innerHeight-100<=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    ))
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)||-10
    );
  };
  
  const displayScrollElement = (element) => {
    header.classList.add("headeractivo");
  };
  
  const hideScrollElement = (element) => {
    header.classList.remove("headeractivo");
  };
  
  var control=1;
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (el.getBoundingClientRect().top==0) {
       control=1 
      }
     if (elementInView(el, 1.25)&& control==1) {
        displayScrollElement(el);
        control=0;
      } else if (elementOutofView(el)&& control==1) {
        console.log("RESTOOTRO");
        hideScrollElement(el)
      }
    })
  }
  /*fin aparecer objetos metodo2*/
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
    reveal()
  });
  /*fin aparecer objetos*/
  
  /*formulariocontacto*/
  function cargaSendMail(){
   
   
    $(".c_error").remove();
  
    var filter= /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var s_email = $('#c_mail').val();
    var s_name = $('#c_name').val();    
    var s_msg = $('#c_msg').val();
    var s_spam_textbox1 = $('#c_spam_textbox1').val();
    var s_spam_textbox2 = $('#c_spam_textbox2').val();
   
    
    if (filter.test(s_email)){
    sendMail = "true";
    
    $('#c_mail').css("border-color","");   	
    } else{
      
    $('#c_mail').after("<p id='c_error_mail' class='c_error'>Ingrese e-mail valido.</p>");
    $(".c_error").css("color","Red");
    $('#c_mail').css("border-color","Red");   
    sendMail = "false";
    }
    if (s_name.length == 0 ){
    $('#c_name').after( "<p id='c_error_name' class='c_error'>Ingrese su nombre.</p>" );
    $(".c_error").css("color","Red");
    $('#c_name').css("border-color","Red");  	
    var sendMail = "false";
    } else{
    $('#c_name').css("border-color","");
    }	
    if (s_msg.length == 0 ){
    $('#c_msg').after( "<p id='c_error_msg' class='c_error'>Ingrese mensaje.</p>" );
    $(".c_error").css("color","Red");
    $('#c_msg').css("border-color","Red");
    var sendMail = "false";
    } else{
    $('#c_msg').css("border-color","");
    }		
    //Si el primer textbox se deja en blanco
    if (s_spam_textbox1.length == 0 ){
        var s_Bot1 = "false";
    } 
    //Si el segundo textbox no se modifica
    if (s_spam_textbox2 == "http://" ){
        var s_Bot2 = "false";
    }
    if (s_Bot1 == "false" && s_Bot2 == "false"){
        spamBot = "false";
    }
    else { spamBot = "true"; }
  
    
    
    if(sendMail == "true" && spamBot == "false" ){
     
     var datos = {
  
            "nombre" : $('#c_name').val(),
  
            "email" : $('#c_mail').val(),
             
            "url" : $('#c_url').val(),
                          
            "telefono" : $('#c_telefono').val(),
  
            "mensaje" : $('#c_msg').val(),
            
            "cenviar" : $('#c_enviar').val()
             
     };
  
     $.ajax({
  
             data:  datos,
             // hacemos referencia al archivo mail.php
             url:  'php/mail.php',
  
             type:  'post',
  
             beforeSend: function (data) {
                    console.log(datos);
                    $("#c_enviar").val("Enviando...");
                    $("#c_information p").html(data);
  
             },
  
             success:  function (data) {
  console.log(data);
  console.log(data.a);
  console.log(data[0].b);
                    $('form')[0].reset(); 
                    $("#c_enviar").val("Enviar Mensaje");
                    $("#c_information p").html();
                    
                    $("#c_information").css({
                                            "background-color": "#DFF2BF",
                                            "color": "#4F8A10",
                                            
                    });				
                    $("#c_information").text( "hola" );
                    $("#c_information").fadeIn('slow');
                    
  
             },
             
          // Cuando el formulario es enviado, mostramos un mensaje en la vista HTML 
          // En el archivo enviarcorreo.php devuelvo el valor '1' el cual es procesado con jQuery Ajax 
          // y significa que el mensaje se envio satisfactoriamente. 
          done:function (res) {                  
   
            if(res.a == "1"){
                      
              // Mostramos el mensaje 'Tu Mensaje ha sido enviado Correctamente !' 
              $("#c_information").html("res.b");                   
              $("#formulario_contacto").trigger("reset");    
   
            }  else {                                       
              $("#c_information").html("res.b"); 
            }
                                                        
          },
   
          // Mensaje de error al enviar el formulario 
          fail:function (res) {                    
              $("#c_information").html("res.b");
          }
     
     });
  
    }else{
      $("#c_information").css({
        "background-color": "#DFF2BF",
        "color": "#4F8A10",
        
  });				
  
    }
  
  }
  /*fin formulariodecontacto*/

  function mostrarmastexto(idtexto) {
    const mostrartexto=document.getElementById(idtexto);
    if ( mostrartexto.style.display=='block') {
      mostrartexto.style.display='none';
    } else {mostrartexto.style.display='block';
     }
   }
function abrirpagina(pagina) {
 
      location.href=pagina;
}

function ira(competicion) {
 
      location.href='competiciones.html?competicion='+competicion;
    
  
  
}

//menuuuuuuuuuuuuuuu
const botonmenu = document.querySelector('.menu-activador a');

(function() {

  
 botonmenu.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-abierto');
      if(contadornavmenu == 1){
        expandirnavmenu();
      } else {
        escondernavmenu();
        escondernavmenu5();
        escondernavmenu51();
        escondernavmenu52();
      }
  })

}());




const menu52=document.getElementById("controlnavmenu52");
const menu0=document.getElementById("controlnavmenu0");
const menu51=document.getElementById("controlnavmenu51");
const menu2=document.getElementById("controlnavmenu2")
const menu5=document.getElementById("controlnavmenu5")
var contadornavmenu=1;
var contadornavmenu5=1;
var contadornavmenu51=1;
var contadornavmenu52=1;
var contadornavmenu2=1;


	$(document).ready(main);
  
function escondernavmenu() {
	menu0.classList.add("fuera");
  menu0.classList.remove("dentro");
	contadornavmenu = 1;
}
function expandirnavmenu() {
  menu0.classList.add("dentro");
  menu0.classList.remove("fuera");           
	contadornavmenu = 0;

}
function escondernavmenu2() {
  console.log("fuera");
  menu2.classList.remove("dentro"); 
  menu2.classList.add("fuera");
 
	contadornavmenu2 = 1;
}
function expandirnavmenu2() {
  menu2.classList.remove("fuera");
	menu2.classList.add("dentro");
   
	contadornavmenu2 = 0;
}
function escondernavmenu5() {
  menu5.classList.add("fuera");
  menu5.classList.remove("dentro"); 
	contadornavmenu5 = 1;
}
function expandirnavmenu5() {
  menu5.classList.add("dentro");
  menu5.classList.remove("fuera"); 
	contadornavmenu5 = 0;
}
function escondernavmenu51() {
	menu51.classList.add("fuera");
  menu51.classList.remove("dentro"); 
	contadornavmenu51 = 1;
	
}
function expandirnavmenu51() {
	menu51.classList.add("dentro");
  menu51.classList.remove("fuera"); 
	contadornavmenu51 = 0;

}
function escondernavmenu52() {
  menu52.classList.add("fuera");
  menu52.classList.remove("dentro"); 
	contadornavmenu52 = 1;
	
}
function expandirnavmenu52() {
	menu52.classList.add("dentro");
  menu52.classList.remove("fuera"); 
		
	contadornavmenu52 = 0;
}

function main(){
	
  $('#cabecerobotonhistoria').click(function(){
		console.log("click");
    if(contadornavmenu2 == 1){
			expandirnavmenu2();
      if (contadornavmenu5==0) {
        escondernavmenu5();
        escondernavmenu51();
        escondernavmenu52();
      }
		} else {
			
			escondernavmenu2();
		}

	});
	$('#cabecerobotoncompeticiones').click(function(){
		if(contadornavmenu5 == 1){
			expandirnavmenu5();
      if (contadornavmenu2==0) {
        escondernavmenu2();
        
      }
		} else {
		
			escondernavmenu5();
      if (contadornavmenu51==0) {
        escondernavmenu51();
      }
      if (contadornavmenu52==0) {
        escondernavmenu52();
      }
      
		
		}

	});
	$('#cabeceroboton51').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu51 == 1){
			expandirnavmenu51();
      if (contadornavmenu52==0) {
        escondernavmenu52();
      }
		} else {
			escondernavmenu51();
		}
});
$('#cabeceroboton52').click(function(){
	// $('nav').toggle(); toggle=aparece brusco

	if(contadornavmenu52 == 1){
		expandirnavmenu52();
    if (contadornavmenu51==0) {
      escondernavmenu51();
    }
	
	} else {
		escondernavmenu52();
	}
});
$('#volver1').click(function(){
	escondernavmenu52();
		escondernavmenu51();
		escondernavmenu5()
	
});
$('#volver2').click(function(){
	escondernavmenu2();
});
	
};



                        //*coooookies*/
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
	
	localStorage.setItem('no-mostrar',true);};

if(switchh1.checked){
	
	localStorage.setItem('cookies-aceptadas', true);
dataLayer.push({'event': 'cookies-aceptadas'});};
	
	
	
});

function seleccion(id){
    var scrollElements = document.getElementsByClassName("itemclic");
    
    scrollElements[0].classList.remove("itemclic")
    var bot=document.getElementById(id);
    bot.classList.add("itemclic");
    switch (id) {
        case "seleccion1":
          
            tablero3.style.display="none";
            tablero1.style.display="block";
            break;
            case "seleccion2":
                
            tablero1.style.display="none";
            tablero3.style.display="none";
            break;
            case "seleccion3":
                tablero3.style.display="block";
                tablero1.style.display="none";
              
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