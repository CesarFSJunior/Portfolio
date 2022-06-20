const menuMobileCheckbox = document.querySelector('#menu-mobile-checkbox')
const menuMobile = document.querySelector('#menu-mobile')
const menuMobileLabel = document.querySelector('#menu-mobile-area')
const header = document.querySelector('header')
const headerNavUl = document.querySelector('#header-nav-ul')
const headerNavLength = headerNavUl.childElementCount
const headerNavHeight = (headerNavLength * 49) + 68

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
const scrollable = document.documentElement.innerHeight - window.innerHeight

document.addEventListener('scroll', () => {
    
    window.innerHeight
    const logo = document.querySelector("#logo")
    
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

        } else if(scrollYAntigoAtualizado < scrollYAntigo) {

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


    
})
setInterval(() => {
    scrollYAntigoAtualizado = scrollYAntigo

},500)
