
//=====================================================================
const arrw = document.getElementById("arrowUp")

const arrowUp = (a = false) => {
    if (a === true) {
        arrw.classList.add('arrow-up')
        arrw.style.visibility = "visible"
    } else {
        arrw.style.visibility = "hidden"
        arrw.classList.remove('arrow-up')
    }
}

const scrollPosPerc = () => {
    //cursor actual
    let scrollTop = window.scrollY
    // cursor total
    let docHeight = document.body.offsetHeight
    // let winHeight = window.innerHeight;// total de la ventana
    //redondeo del scroll actual
    let scrollPercent = Math.round(scrollTop / docHeight * 100)
    scrollPercent >= 60 ? arrowUp(true) : arrowUp()
}

//=====================================================================
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-mnu")

function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}
//=====================================================================
// para empezar sin ver la flecha
arrowUp()
//listener para el scroll
window.addEventListener("scroll", scrollPosPerc)
//evento para el menu hamburguesa
if (hamburger) hamburger.addEventListener("click", mobileMenu)









