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