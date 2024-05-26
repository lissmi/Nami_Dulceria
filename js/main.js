(function ($) {
    "use strict";
    
    // Desplazamiento suave en los enlaces de la barra de navegación
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    // Botón para volver al inicio
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Video modal
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Carrusel de servicios y equipo
    $(".service-carousel").owlCarousel({
        autoplay: false, // No reproducir automáticamente
        smartSpeed: 1500, // Velocidad de transición
        margin: 30, // Margen entre elementos
        dots: false, // No mostrar puntos de navegación
        loop: true, // Activar bucle para repetir elementos
        nav : true, // Mostrar botones de navegación
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1 // Mostrar 1 elemento en pantallas pequeñas
            },
            576:{
                items:1 // Mostrar 1 elemento en pantallas medianas
            },
            768:{
                items:2 // Mostrar 2 elementos en pantallas grandes
            },
            992:{
                items:3 // Mostrar 3 elementos en pantallas extra grandes
            }
        }
    });

    // Carrusel del equipo
    $(".team-carousel").owlCarousel({
        autoplay: false, // No reproducir automáticamente
        smartSpeed: 1500, // Velocidad de transición
        margin: 30, // Margen entre elementos
        dots: true, // Mostrar puntos de navegación
        loop: false, // Desactivar bucle para evitar repeticiones
        nav : true, // Mostrar botones de navegación
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1 // Mostrar 1 elemento en pantallas pequeñas
            },
            576:{
                items:1 // Mostrar 1 elemento en pantallas medianas
            },
            768:{
                items:2 // Mostrar 2 elementos en pantallas grandes
            },
            992:{
                items:2 // Mostrar 2 elementos en pantallas extra grandes
            }
        }
    });

    // Carrusel de productos
    $(".product-carousel").owlCarousel({
        autoplay: false, // No reproducir automáticamente
        smartSpeed: 1500, // Velocidad de transición
        margin: 30, // Margen entre elementos
        dots: false, // No mostrar puntos de navegación
        loop: true, // Activar bucle para repetir elementos
        nav : true, // Mostrar botones de navegación
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1 // Mostrar 1 elemento en pantallas pequeñas
            },
            576:{
                items:2 // Mostrar 2 elementos en pantallas medianas
            },
            768:{
                items:3 // Mostrar 3 elementos en pantallas grandes
            },
            992:{
                items:4 // Mostrar 4 elementos en pantallas extra grandes
            }
        }
    });

    // Isótopo y filtro del portafolio
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item', // Selector de elementos del portafolio
        layoutMode: 'fitRows' // Modo de diseño de filas ajustadas
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active'); // Eliminar clase activa de todos los filtros
        $(this).addClass('active'); // Añadir clase activa al filtro seleccionado

        portfolioIsotope.isotope({filter: $(this).data('filter')}); // Filtrar elementos del portafolio
    });

    // Carrusel de testimonios
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, // Reproducir automáticamente
        smartSpeed: 1500, // Velocidad de transición
        dots: true, // Mostrar puntos de navegación
        loop: true, // Activar bucle para repetir elementos
        items: 1 // Mostrar 1 elemento a la vez
    });
    
})(jQuery);
