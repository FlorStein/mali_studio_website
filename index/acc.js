
'use strict'
const header       =   document.getElementById('header')
const accordionDiv =   document.querySelectorAll('.accordion-div')
const services     =   document.querySelectorAll('.services')
const cartel       =   document.querySelectorAll('.hidden-cartel')
const divider      =   document.getElementById('divider')
const divisor      =   document.getElementById('divisor')

const bgr0         =   document.getElementById('bgr0')
const bgr1         =   document.getElementById('bgr1')
const bgr2         =   document.getElementById('bgr2')
const bgr3         =   document.getElementById('bgr3')
const bgr4         =   document.getElementById('bgr4')
const bgr5         =   document.getElementById('bgr5')

const card0        =   document.getElementById('card0')
const card1        =   document.getElementById('card1')
const card2        =   document.getElementById('card2')
const card3        =   document.getElementById('card3')
const card4        =   document.getElementById('card4')
const card5        =   document.getElementById('card5')

const cartel0       =   document.getElementById('cartel0')
const cartel1       =   document.getElementById('cartel1') 
const cartel2       =   document.getElementById('cartel2') 
const cartel3       =   document.getElementById('cartel3') 
const cartel4       =   document.getElementById('cartel4') 
const cartel5       =   document.getElementById('cartel5')  



accordionDiv.forEach( ( _cadaAccordionDiv , i )=>{
    accordionDiv[i].addEventListener('mouseenter', ()=>{

        services.forEach( ( _cadaServices, i)=>{
            services[i].classList.remove('active')

        })
        services[i].classList.add('active')
    })
    

})




accordionDiv.forEach( ( _cadaAccordionDiv , i )=>{
    accordionDiv[i].addEventListener('mouseenter', ()=>{

        cartel.forEach( ( _cadaServices, i)=>{
            cartel[i].classList.remove('cartel')

        })
        cartel[i].classList.add('cartel')
    })
    
    
})
// services.addEventListener('mouseout', ()=>{
//     services.classList.remove('active')

// })




// ID FUNTIONS

bgr0.addEventListener('mouseenter',() =>{
    
    header.classList.add('bgr0')
    header.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr5')
    divider.classList.add('bgr0')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr5')


})


bgr1.addEventListener('mouseenter',() =>{
    header.classList.add('bgr1')
    header.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')
    divider.classList.add('bgr1')
    divider.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')
    divisor.classList.add('bgr1')
    divisor.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')
})

bgr2.addEventListener('mouseenter',() =>{
    header.classList.add('bgr2')
    header.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
    divider.classList.add('bgr2')
    divider.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
    divisor.classList.add('bgr2')
    divisor.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
})

bgr3.addEventListener('mouseenter',() =>{
    header.classList.add('bgr3')
    header.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
    divider.classList.add('bgr3')
    divider.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
    divisor.classList.add('bgr3')
    divisor.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
})

bgr4.addEventListener('mouseenter',() =>{
    header.classList.add('bgr4')
    header.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
    divider.classList.add('bgr4')
    divider.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
    divisor.classList.add('bgr4')
    divisor.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
})

bgr5.addEventListener('mouseenter',() =>{
    header.classList.add('bgr5')
    header.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')
    divider.classList.add('bgr5')
    divider.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')
    divisor.classList.add('bgr5')
    divisor.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')
})





card0.addEventListener('mouseenter',() =>{
    header.classList.add('bgr0')
    header.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr5')
    divider.classList.add('bgr0')
    divider.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr5')


})

card1.addEventListener('mouseenter',() =>{
    header.classList.add('bgr1')
    header.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')
    divider.classList.add('bgr1')
    divider.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')


})

card2.addEventListener('mouseenter',() =>{
    header.classList.add('bgr2')
    header.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
    divider.classList.add('bgr2')
    divider.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
})

card3.addEventListener('mouseenter',() =>{
    header.classList.add('bgr3')
    header.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
    divider.classList.add('bgr3')
    divider.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
})

card4.addEventListener('mouseenter',() =>{
    header.classList.add('bgr4')
    header.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
    divider.classList.add('bgr4')
    divider.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
})

card5.addEventListener('mouseenter',() =>{
    header.classList.add('bgr5')
    header.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')
    divider.classList.add('bgr5')
    divider.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')
})


card0.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr0')
    divisor.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr5')
})

card1.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr1')
    divisor.classList.remove('bgr0','bgr2','bgr3','bgr4','bgr5')
})

card2.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr2')
    divisor.classList.remove('bgr1','bgr0','bgr3','bgr4','bgr5')
})

card3.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr3')
    divisor.classList.remove('bgr1','bgr2','bgr0','bgr4','bgr5')
})

card4.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr4')
    divisor.classList.remove('bgr1','bgr2','bgr3','bgr0','bgr5')
})

card5.addEventListener('mouseenter',() =>{
    divisor.classList.add('bgr5')
    divisor.classList.remove('bgr1','bgr2','bgr3','bgr4','bgr0')

})















function remove(){
    header.classList.remove('bgr0','bgr1','bgr2','bgr3','bgr4','bgr5')
    divisor.classList.remove('bgr0','bgr1','bgr2','bgr3','bgr4','bgr5')
    divider.classList.remove('bgr0','bgr1','bgr2','bgr3','bgr4','bgr5')

    divider.classList.add('bgr-1')

    bgr0.classList.remove('active')
    bgr1.classList.remove('active')
    bgr2.classList.remove('active')
    bgr3.classList.remove('active')
    bgr4.classList.remove('active')
    bgr5.classList.remove('active')

    cartel0.classList.remove('cartel')
    cartel1.classList.remove('cartel')
    cartel2.classList.remove('cartel')
    cartel3.classList.remove('cartel')
    cartel4.classList.remove('cartel')
    cartel5.classList.remove('cartel')
    
}





//   divider.addEventListener('mouseleave',()=>{
//       divider.classList.remove('bgr0','bgr1','bgr2','bgr3','bgr4','bgr5')
//   })

//   divisor.addEventListener('mouseleave',()=>{
//     divisor.classList.remove('bgr0','bgr1','bgr2','bgr3','bgr4','bgr5')
// })














