$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.menuprincipal').addClass("cambio-menu");
       } else {
        $(".menuprincipal").removeClass("cambio-menu");
       }
    });
});
$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.nav-link').addClass("cambio-color");
       } else {
        $(".nav-link").removeClass("cambio-color");
       }
    });
});
$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('.logo-pagina').attr('src','imagenes/Icono-Teo-OSCURO.svg')
        }
        if($(this).scrollTop() < 100) {        
         $('.logo-pagina').attr('src','imagenes/icono-pagina.png');   
        }
    });
});