class Libro {
    constructor(id, titulo, autor, genero, precio) {
        this.id = id;
        this.titulo = titulo.toUpperCase();
        this.autor = autor.toUpperCase();
        this.genero = genero.toUpperCase();
        this.precio = precio;
        this.cantidad = 1;
    }
    addCantidad() {
        this.cantidad += this.cantidad
        // return this.cantidad
    }
    incId() {
        return 0
    }
}
//NOTE: "DB" para tener data para trabajar
const LISTA_LIBROS = [new Libro(1, 'El alquimista', 'H.P.Lovecraft', 'Horror', 200),
new Libro(2, 'El Extraño', 'H.P.Lovecraft', 'Horror', 200),
new Libro(3, 'Celephais', 'H.P.Lovecraft', 'Horror', 150),
new Libro(4, '1984', 'G.Orwell', 'Ficcion', 300),
new Libro(5, 'Yo, Robot', 'I.Asimov', 'Antologia', 650),
new Libro(6, 'Cuentos completos I', 'I.Asimov', 'C.Ficcion', 750),
new Libro(7, 'Cuentos completos II', 'I.Asimov', 'C.Ficcion', 750),
new Libro(8, 'Cuentos completos', 'E.A.Poe', 'Antologia', 1250),
new Libro(9, 'Hamlet', 'W.Shakespeare', 'Tragedia', 250),
new Libro(10, 'Romeo & Julieta', 'W.Shakespeare', 'Tragedia', 250),
new Libro(11, 'A imagen y semejanza', 'M.Benedetti', 'Antologia', 250),
new Libro(12, 'La metamorfosis', 'F.Kafka', 'Novela', 250),
new Libro(13, 'Lovecraft: Narrativa completa I', 'H.P.Lovecraft', 'Antologia', 2350),
new Libro(14, 'Lovecraft: Narrativa completa II', 'H.P.Lovecraft', 'Antologia', 2450),
new Libro(15, 'Lovecraft: Colaboraciones', 'H.P.Lovecraft', 'Antologia', 1850),
new Libro(16, 'El conde de Montecristo', 'Dumas', 'Novela', 600),
new Libro(17, 'EL Golem', 'G.Meyrink', 'Misterio', 650),
new Libro(18, 'EL Principito', 'Saint-Exupery', '', 250),
new Libro(19, 'El retrato de Dorian Gray', 'O.Wilde', '', 250),]

//tabla
let table = document.getElementById("table");
//para el carro
let addToCartBtn = document.getElementsByClassName('btn-cart-add')
let remFromCartBtn = document.getElementsByName('btn-cart-del')
let cartCounter = document.getElementById('counter')
cartCounter.innerHTML = JSON.parse(localStorage.getItem('Contador')) || 0;
let counter = 0 || JSON.parse(localStorage.getItem('Contador'));
const cart = [];
//busqueda
const searchForm = document.getElementById("search-form");
const searchTerm = searchForm.children[0];
const arrForPrint = [];

//TODO: Eliminar al final
//==================================
//NOTE: Prueba para formateo del css, creada como funcion para llamarla desde la consola
function printExample() {
    cleanTableUI()
    LISTA_LIBROS.forEach((libro) => {
        printTableUI([libro.titulo, libro.autor, libro.genero, libro.precio])
    })
}
printExample()
//==================================





saveCart()

searchForm.addEventListener('submit', (e) => {
    //limpiamos antes de imprimir
    cleanTableUI()
    // si no esta vacio realiza la busqueda, de lo contrario nada
    let searchVal = !searchTerm.value == "" ? search(LISTA_LIBROS, searchTerm.value) : [];
    console.log(searchVal);

    searchVal.forEach((libro) => {
        printTableUI([libro.titulo, libro.autor, libro.genero, libro.precio])
    })

    // tableUI([libro.titulo, libro.autor, libro.genero, libro.precio])
    e.preventDefault();
})


//NOTE: funcion de busqueda
function search(array, searchParam) {
    searchParam = searchParam.toUpperCase();
    let arrayRetorno = array.filter(array => {
        return array.autor.includes(searchParam) || array.titulo.includes(searchParam) || array.genero.includes(searchParam)
    })
    // console.log(arrayRetorno);
    return arrayRetorno;
}

//NOTE: salva el carrito y el contador
function saveCart() {
    localStorage.setItem('Contador', counter);
}

//NOTE: suma los numeros al carro
function addToCart() {
    counter++
    cartCounter.innerHTML = counter;
    saveCart()
}

//NOTE: Limpia el carrito
function cleanCart() {
    cartCounter.innerHTML = 0;
    localStorage.clear();
}

//NOTE: Crea la tabla
function printTableUI(arrToPrint) {
    let tableRow = document.createElement('tr')
    let sendToCart = `
        <button id="btn-cart" class="btn btn-mini btn-cart-add" >
        <span class="iconify" data-icon="bi:cart-plus"></span>
        </button>`

    let delFromCart = `
        <button id="btn-cart" class="btn btn-mini btn-cart-del" >
        <span class="iconify" data-icon="bi:cart-plus"></span>
        </button>`

    tableRow.innerHTML += `<td class="table-data">${arrToPrint[0]}</td>
                        <td class="table-data">${arrToPrint[1]}</td> 
                        <td class="table-data">${arrToPrint[2]}</td>
                        <td class="table-data">$${arrToPrint[3]}</td>
                        <td>${sendToCart}</td>`
    table.append(tableRow)
    // <td><button class="delete-btn">X</button></td>`
}
//NOTE: funcion para limpiar la tabla
function cleanTableUI() {
    table.innerHTML = "";
}

for (const boton of addToCartBtn) {
    boton.addEventListener('click', addToCart)
}


