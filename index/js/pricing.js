$(document).ready(function() {
    var $item = 0,
      $itemNo = $(".hero figure").length;
    var $autoTransition;
    var isDesktop = window.innerWidth >= 1024;
    
    function transitionSlide() {
      $item++;
      if ($item > $itemNo - 1) {
        $item = 0;
      }
      $(".hero figure").removeClass("on");
      $(".hero figure")
        .eq($item)
        .addClass("on");
    }
    
    // Solo iniciar auto-transición en desktop
    if (isDesktop) {
      $autoTransition = setInterval(transitionSlide, 3500);
    } else {
      // En mobile, cerrar todas las secciones excepto la primera
      $(".hero figure").removeClass("on");
      $(".hero figure").first().addClass("on");
    }
  
    $(".hero figure").click(function() {
      var clickedFigure = $(this);
      
      if (isDesktop) {
        // Comportamiento desktop: mantener abierto
        clearInterval($autoTransition);
        $item = $(this).index();
        $(".hero figure").removeClass("on");
        clickedFigure.addClass("on");
      } else {
        // Comportamiento mobile/tablet: toggle accordion
        if (clickedFigure.hasClass("on")) {
          // Si ya está abierto, cerrarlo
          clickedFigure.removeClass("on");
        } else {
          // Si está cerrado, cerrar todos y abrir este
          $(".hero figure").removeClass("on");
          clickedFigure.addClass("on");
        }
      }
    });
    
    // Manejar cambios de tamaño de ventana
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        var wasDesktop = isDesktop;
        isDesktop = window.innerWidth >= 1024;
        
        // Si cambiamos de mobile a desktop
        if (!wasDesktop && isDesktop) {
          clearInterval($autoTransition);
          $(".hero figure").removeClass("on");
          $(".hero figure").first().addClass("on");
          $autoTransition = setInterval(transitionSlide, 3500);
        }
        // Si cambiamos de desktop a mobile
        else if (wasDesktop && !isDesktop) {
          clearInterval($autoTransition);
          $(".hero figure").removeClass("on");
          $(".hero figure").first().addClass("on");
        }
      }, 250);
    });
  });


  