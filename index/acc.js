
'use strict'

const accordionDiv =   document.querySelectorAll('.accordion-div')
const services     =   document.querySelectorAll('.services')
// const card         =   document.querySelectorAll('.card')
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



accordionDiv.forEach( ( _cadaAccordionDiv , i )=>{
    accordionDiv[i].addEventListener('mouseover', ()=>{

        services.forEach( ( _cadaServices, i)=>{
            services[i].classList.remove('active')

        })
        services[i].classList.add('active')
    })

})


accordionDiv.forEach( ( _cadaAccordionDiv , i )=>{
    accordionDiv[i].addEventListener('mouseover', ()=>{

        cartel.forEach( ( _cadaServices, i)=>{
            cartel[i].classList.remove('cartel')

        })
        cartel[i].classList.add('cartel')
    })
    
    
})

bgr0.addEventListener('mouseover',() =>{
    divider.classList.add('bgr0')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr5')
})

bgr1.addEventListener('mouseover',() =>{
    divider.classList.add('bgr1')
    divider.classList.remove('bgr-1','bgr0','bgr2','bgr3','bgr4','bgr5')
})

bgr2.addEventListener('mouseover',() =>{
    divider.classList.add('bgr2')
    divider.classList.remove('bgr-1','bgr1','bgr0','bgr3','bgr4','bgr5')
})

bgr3.addEventListener('mouseover',() =>{
    divider.classList.add('bgr3')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr0','bgr4','bgr5')
})

bgr4.addEventListener('mouseover',() =>{
    divider.classList.add('bgr4')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr0','bgr5')
})

bgr5.addEventListener('mouseover',() =>{
    divider.classList.add('bgr5')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr0')
})

card0.addEventListener('mouseover',() =>{
    divider.classList.add('bgr0')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr5')
})

card1.addEventListener('mouseover',() =>{
    divider.classList.add('bgr1')
    divider.classList.remove('bgr-1','bgr0','bgr2','bgr3','bgr4','bgr5')
})

card2.addEventListener('mouseover',() =>{
    divider.classList.add('bgr2')
    divider.classList.remove('bgr-1','bgr1','bgr0','bgr3','bgr4','bgr5')
})

card3.addEventListener('mouseover',() =>{
    divider.classList.add('bgr3')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr0','bgr4','bgr5')
})

card4.addEventListener('mouseover',() =>{
    divider.classList.add('bgr4')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr0','bgr5')
})

card5.addEventListener('mouseover',() =>{
    divider.classList.add('bgr5')
    divider.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr0')
})


card0.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr0')
    divisor.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr5')
})

card1.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr1')
    divisor.classList.remove('bgr-1','bgr0','bgr2','bgr3','bgr4','bgr5')
})

card2.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr2')
    divisor.classList.remove('bgr-1','bgr1','bgr0','bgr3','bgr4','bgr5')
})

card3.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr3')
    divisor.classList.remove('bgr-1','bgr1','bgr2','bgr0','bgr4','bgr5')
})

card4.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr4')
    divisor.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr0','bgr5')
})

card5.addEventListener('mouseover',() =>{
    divisor.classList.add('bgr5')
    divisor.classList.remove('bgr-1','bgr1','bgr2','bgr3','bgr4','bgr0')
})















