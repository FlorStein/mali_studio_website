'use strict'

$(document).ready(function(){


    $('body').on({'mousemove' : function ( e ) { 
        console.log(e)
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left': (clientX - 40) + 'px',
            'top' : (clientY - 40) + 'px'
        })
     }})
     
     
     $('.nav-li').on({
        'mouseover' : function () {
             $('#cursor').addClass('mini')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('mini')
          
        },       
      });

      $('#since').on({
        'mouseover' : function () {
             $('#cursor').addClass('maxi')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('maxi')
          
        }
     
     
    })

    $('#hero_img').on({
        'mouseover' : function () {
             $('#cursor').addClass('eye')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('eye')
          
        }
     
     
    })

    $('#card-div').on({
        'mouseover' : function () {
             $('#cursor').addClass('maxi')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('maxi')
          
        }
     
     
    })

    $('#webdesign').on({
        'mouseover' : function(){
            $('#cursor').addClass('prices')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('prices')
          
        }
    })

    $('#fotog').on({
        'mouseover' : function(){
            $('#cursor').addClass('fotog')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('fotog')
          
        }
    })

    $('#fotop').on({
        'mouseover' : function(){
            $('#cursor').addClass('fotop')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('fotop')
          
        }
    })

    $('#branding').on({
        'mouseover' : function(){
            $('#cursor').addClass('branding')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('branding')
          
        }
    })



})

console.clear()