const menuMobileCheckbox = document.querySelector('#menu-mobile-checkbox')
const menuMobile = document.querySelector('#menu-mobile')
const menuMobileLabel = document.querySelector('#menu-mobile-area')
const header = document.querySelector('header')
const headerNavUl = document.querySelector('#header-nav-ul')
const headerNavLength = headerNavUl.childElementCount
const headerNavHeight = (headerNavLength * 49) + 68
const projetosCard = document.querySelectorAll('.projetos-card')
const frontEnd = document.querySelector('#projetos-card-front')
const backEnd = document.querySelector('#projetos-card-back')
const reveal = document.querySelectorAll('.reveal')

menuMobileCheckbox.addEventListener('change', () => {
    header.style.height = `${headerNavHeight}px`

    if (header.classList == 'aparece') {
        header.style.height = ''
    }
    
    menuMobile.classList.toggle('fecha')
    header.classList.toggle('aparece')
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        menuMobile.classList.remove('fecha')
        header.classList.remove('aparece')
        menuMobile.removeAttribute('style')
        menuMobileLabel.removeAttribute('style')
        logo.removeAttribute('style')
        headerNavUl.removeAttribute('style')
        header.removeAttribute('style')

    }
})

window.addEventListener('scroll', () => {
    if (window.innerWidth > 900) {
        menuMobile.classList.remove('fecha')
        header.classList.remove('aparece')

    }
})



var scrollYAntigo = ''
var scrollYAntigoAtualizado = ''
document.addEventListener('scroll', () => {
    
    window.innerHeight
    const logo = document.querySelector("#logoPrincipal")
    
    if(window.innerWidth < 900) {


        if(scrollYAntigoAtualizado > scrollYAntigo  && header.style.height != '68px') 
        {
            header.removeAttribute('style')
            menuMobile.removeAttribute('style')
            menuMobileLabel.removeAttribute('style')
            menuMobileCheckbox.removeAttribute('style')
            logo.removeAttribute('style')
            headerNavUl.removeAttribute('style')
            header.removeAttribute('style')

        } else if(scrollYAntigoAtualizado < scrollYAntigo && scrollY > 80) {

            header.style.height = `0px`
            menuMobile.style.display = "none"
            menuMobileLabel.style.display = "none"
            menuMobileCheckbox.style.display = "none"
            logo.style.display = "none"
            headerNavUl.style.display = "none"
            header.style.paddingTop = "0px"

        }       
        
    }
    scrollYAntigo = scrollY

    
    for (let i = 0; i < reveal.length; i++) {
        
        var windowHeight = window.innerHeight
        var altura = reveal[i].getBoundingClientRect().top
        var apearPoint = 200

        if(altura < windowHeight - apearPoint) {
            reveal[i].classList.add('apear')
        }else {
            reveal[i].classList.remove('apear')
        }
     }
    
})
setInterval(() => {
    scrollYAntigoAtualizado = scrollYAntigo
    
},500)

function projetoChange(value) {

    for (let i = 0; i < projetosCard.length; i++) {
        if(projetosCard[i].id == value) {
            projetosCard[i].removeAttribute('style')
        } else {
            projetosCard[i].style.display = 'none'
        }
    }

}

for (let i = 0; i < projetosCard.length; i++) {
    if([i] > 0) {
        projetosCard[i].style.display = "none"
    }
}

 for(let i = 0; i < reveal.length; i++) {
    reveal[i].classList.add('check')
    console.log(reveal[i])
}
// console.log(reveal)