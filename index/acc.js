
'use strict'
const header       =   document.getElementById('header')
const accordionDiv =   document.querySelectorAll('.accordion-div')
const services     =   document.querySelectorAll('.services')
const cartel       =   document.querySelectorAll('.hidden-cartel')

const info0         =   document.getElementById('info0')
const info1         =   document.getElementById('info1')
const info2         =   document.getElementById('info2') 
const info3         =   document.getElementById('info3')
const info4         =   document.getElementById('info4')
const info5         =   document.getElementById('info5')

const divider      =   document.getElementById('divider')
const divisor      =   document.getElementById('divisor')

const title        =   document.getElementById('title2') 

const bgr0         =   document.getElementById('bgr0')
const bgr1         =   document.getElementById('bgr1')
const bgr2         =   document.getElementById('bgr2')
const bgr3         =   document.getElementById('bgr3')
const bgr4         =   document.getElementById('bgr4')
const bgr5         =   document.getElementById('bgr5')

const cartel0       =   document.getElementById('cartel0')
const cartel1       =   document.getElementById('cartel1') 
const cartel2       =   document.getElementById('cartel2') 
const cartel3       =   document.getElementById('cartel3') 
const cartel4       =   document.getElementById('cartel4') 
const cartel5       =   document.getElementById('cartel5')  


bgr0.addEventListener('click', ()=>{
    bgr0.classList.add('active')
    cartel0.classList.add('cartel')
    divisor.classList.add('bgr0')
    divider.classList.add('bgr0')
    bgr1.style.display = 'none'
    bgr2.style.display = 'none'
    bgr3.style.display = 'none'
    bgr4.style.display = 'none'
    bgr5.style.display = 'none'
    title.classList.add('slidetitle')
    info0.classList.add('display')
    

        bgr0.addEventListener('wheel',()=>{
            bgr0.classList.remove('active')
            cartel0.classList.remove('cartel')
            divisor.classList.remove('bgr0')
            divider.classList.remove('bgr0')
            bgr1.style.display ='flex'
            bgr2.style.display ='flex'
            bgr3.style.display ='flex'
            bgr4.style.display ='flex'
            bgr5.style.display ='flex'
            title.classList.remove('slidetitle')
            info0.classList.remove('display')
            
        })

})



bgr1.addEventListener('click', ()=>{
    bgr1.classList.add('active')
    cartel1.classList.add('cartel')
    divisor.classList.add('bgr1')
    divider.classList.add('bgr1')
    bgr0.style.display = 'none'
    bgr2.style.display = 'none'
    bgr3.style.display = 'none'
    bgr4.style.display = 'none'
    bgr5.style.display = 'none'
    title.classList.add('slidetitle')
    info1.classList.add('display')
    

        bgr1.addEventListener('wheel',()=>{
            bgr1.classList.remove('active')
            cartel1.classList.remove('cartel')
            divisor.classList.remove('bgr1')
            divider.classList.remove('bgr1')
            bgr0.style.display ='flex'
            bgr2.style.display ='flex'
            bgr3.style.display ='flex'
            bgr4.style.display ='flex'
            bgr5.style.display ='flex'
            title.classList.remove('slidetitle')
            info1.classList.remove('display')
            
        })
})

bgr2.addEventListener('click', ()=>{
    bgr2.classList.add('active')
    cartel2.classList.add('cartel')
    divisor.classList.add('bgr2')
    divider.classList.add('bgr2')
    bgr1.style.display = 'none'
    bgr0.style.display = 'none'
    bgr3.style.display = 'none'
    bgr4.style.display = 'none'
    bgr5.style.display = 'none'
    title.classList.add('slidetitle')
    info2.classList.add('display')
    

        bgr2.addEventListener('wheel',()=>{
            bgr2.classList.remove('active')
            cartel2.classList.remove('cartel')
            divisor.classList.remove('bgr2')
            divider.classList.remove('bgr2')
            bgr1.style.display ='flex'
            bgr0.style.display ='flex'
            bgr3.style.display ='flex'
            bgr4.style.display ='flex'
            bgr5.style.display ='flex'
            title.classList.remove('slidetitle')
            info2.classList.remove('display')

            
        })

})

bgr3.addEventListener('click', ()=>{
    bgr3.classList.add('active')
    cartel3.classList.add('cartel')
    divisor.classList.add('bgr3')
    divider.classList.add('bgr3')
    bgr1.style.display = 'none'
    bgr2.style.display = 'none'
    bgr0.style.display = 'none'
    bgr4.style.display = 'none'
    bgr5.style.display = 'none'
    title.classList.add('slidetitle')
    info3.classList.add('display')
    

        bgr3.addEventListener('wheel',()=>{
            bgr3.classList.remove('active')
            cartel3.classList.remove('cartel')
            divisor.classList.remove('bgr3')
            divider.classList.remove('bgr3')
            bgr1.style.display ='flex'
            bgr2.style.display ='flex'
            bgr0.style.display ='flex'
            bgr4.style.display ='flex'
            bgr5.style.display ='flex'
            title.classList.remove('slidetitle')
            info3.classList.remove('display')
            
        })

})

bgr4.addEventListener('click', ()=>{
    bgr4.classList.add('active')
    cartel4.classList.add('cartel')
    divisor.classList.add('bgr4')
    divider.classList.add('bgr4')
    bgr1.style.display = 'none'
    bgr2.style.display = 'none'
    bgr3.style.display = 'none'
    bgr0.style.display = 'none'
    bgr5.style.display = 'none'
    title.classList.add('slidetitle')
    info4.classList.add('display')
    

        bgr4.addEventListener('wheel',()=>{
            bgr4.classList.remove('active')
            cartel4.classList.remove('cartel')
            divisor.classList.remove('bgr4')
            divider.classList.remove('bgr4')
            bgr1.style.display ='flex'
            bgr2.style.display ='flex'
            bgr3.style.display ='flex'
            bgr0.style.display ='flex'
            bgr5.style.display ='flex'
            title.classList.remove('slidetitle')
            info4.classList.remove('display')
            

        })

})

bgr5.addEventListener('click', ()=>{
    bgr5.classList.add('active')
    cartel5.classList.add('cartel')
    divisor.classList.add('bgr5')
    divider.classList.add('bgr5')
    bgr1.style.display = 'none'
    bgr2.style.display = 'none'
    bgr3.style.display = 'none'
    bgr4.style.display = 'none'
    bgr0.style.display = 'none'
    title.classList.add('slidetitle')
    info5.classList.add('display')
    

        bgr5.addEventListener('wheel',()=>{
            bgr5.classList.remove('active')
            cartel5.classList.remove('cartel')
            divisor.classList.remove('bgr5')
            divider.classList.remove('bgr5')
            bgr1.style.display ='flex'
            bgr2.style.display ='flex'
            bgr3.style.display ='flex'
            bgr4.style.display ='flex'
            bgr0.style.display ='flex'
            title.classList.remove('slidetitle')
            info5.classList.remove('display')
           
        })

})
