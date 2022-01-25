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
                    $("#c_information p").html(data);
                    
                    $("#c_information").css({
                                            "background-color": "#DFF2BF",
                                            "color": "#4F8A10",
                                            
                    });				
                    $("#c_information").text( data.a );
                    $("#c_information").fadeIn('slow');
                    
  
             },
             
          // Cuando el formulario es enviado, mostramos un mensaje en la vista HTML 
          // En el archivo enviarcorreo.php devuelvo el valor '1' el cual es procesado con jQuery Ajax 
          // y significa que el mensaje se envio satisfactoriamente. 
          done:function (res) {                  
   
            if(res.a == "1"){
                      
              // Mostramos el mensaje 'Tu Mensaje ha sido enviado Correctamente !' 
              $("#c_information").html(res.b);                   
              $("#formulario_contacto").trigger("reset");    
   
            }  else {                                       
              $("#c_information").html(res.b); 
            }
                                                        
          },
   
          // Mensaje de error al enviar el formulario 
          fail:function (res) {                    
              $("#c_information").html(res.b);
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
