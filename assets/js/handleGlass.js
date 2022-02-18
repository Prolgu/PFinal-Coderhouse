//=====================================================================
// funcion para conseguir el ancho de pagina
// al llegar a <= 500px agrega la clase fake-div al elemento cont
const cont = document.getElementById("cont");
const welc = document.getElementById("welcome");

const winSizeCss = () => {
    let pageWidth = document.documentElement.clientWidth
    if (pageWidth <= 500) {
        cont.classList.add('fake-glass');
        welc.classList.add('fake-glass');
        // console.log(w)
    } else {
        cont.classList.remove('fake-glass');
        welc.classList.remove('fake-glass');
    }
}
//=====================================================================
// consulto  alcarcar el script
winSizeCss();
// listener para saber consultar en resize window <= '500px'
window.addEventListener("resize", winSizeCss);
