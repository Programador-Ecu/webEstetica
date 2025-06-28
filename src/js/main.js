

// -------- MENÚ MÓVIL (hamburguesa) --------
const menu = document.querySelector('.menu');
const toggleBtn = document.querySelector('#menu-toggle');
const closeBtn = document.querySelector('.cerrar-menu');

// Mostrar menú
toggleBtn.addEventListener('click', () => {
  menu.classList.add('activo');
  closeBtn.classList.remove('oculto');
});

// Ocultar menú
closeBtn.addEventListener('click', () => {
  menu.classList.remove('activo');
  closeBtn.classList.add('oculto');
});

// -------- SUBMENÚ MÓVIL --------
const desplegablesMovil = document.querySelectorAll('.desplegable');

desplegablesMovil.forEach(desplegable => {
  desplegable.addEventListener('click', function (e) {
    e.preventDefault();
    const submenu = this.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('activo');
      console.log('Submenú móvil activado/desactivado');
    }
  });
});

// -------- SUBMENÚ ESCRITORIO --------
const desplegablesEscritorio = document.querySelectorAll('.desplegable-escritorio');

desplegablesEscritorio.forEach(desplegable => {
  desplegable.addEventListener('click', function (e) {
    e.preventDefault();
    const submenu = this.querySelector('.submenu-escritorio');
    if (submenu) {
      submenu.classList.toggle('activo');
      console.log('Submenú escritorio activado/desactivado');
    }
  });
});


/*
const nombres = ["cristian","lucho", "nicole"];
nombres.forEach(nombre=>{
  console.log(nombre);
});

function mostrarNombre(nombre){
  console.log(nombre);
}

const mostrarNombre = nombre =>{
  console.log(nombre);
}

const nombres = ["cristian", "mario", "angel"];
nombres.forEach(mostrarNombre);


const nombres = ["miguel","diego","naruto"];
const lista =document.getElementById("lista");
nombres.forEach(nombre=>{
const li= document.createElement("li");
li.textContent=nombre;
lista.appendChild(li);
});

--------------------------
const productos =[
  { nombre: "celular", precio: 280 },
  { nombre: "pantalon", precio: 20},
  { nombre: "case", precio:75}
];

const contenedorProductos= document.getElementById("productos")

productos.forEach(producto=>{
  const parrafo = document.createElement("p");
  parrafo.textContent =`Su producto es ${producto.nombre} - $${producto.precio}` ;
  contenedorProductos.appendChild(parrafo);
});


/*
/*const personas = [
  {nombre:"Cristian", edad:17},
  {nombre:"luis", edad:22},
  {nombre:"naruto", edad: 17},
  {nombre:"mario", edad:25},
  {nombre:"juan",edad:30}
];

const lista = document.getElementById("lista-mayores");


personas.forEach(persona=>{
  const edad =persona.edad;
  if (edad>=18){
    const li = document.createElement("li");
    li.textContent = `Tiene el nombre ${persona.nombre} y la edad ${persona.edad} `;
    lista.appendChild(li);
  }
}) 
-------------------------------------------------*/
/*
const productos = [
  {nombre:"celular", precio:280},
  {nombre:"pantalon", precio:20},
  {nombre:"case", precio:75},
  {nombre:"cable usb", precio:15}
]
const lista = document.getElementById("productos-mayores");

productos.forEach(producto=>
{
  if(producto.precio>50){
    const li = document.createElement("li");
    li.textContent =`${producto.nombre} - $ ${producto.precio}`;
    lista.appendChild(li);
  }

})*/
/*
const alumnos = [
  {nombre:"cristian", nota: 8.5},
  {nombre:"diego", nota: 6},
  {nombre:"mario", nota:8},
  {nombre:"angel", nota:8},
  {nombre:"alex", nota:5}
];

const aprobados = document.getElementById("aprobados");

alumnos.forEach(alumno=>
{
  if(alumno.nota>=6){
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} - ${alumno.nota} aprobado`;
    aprobados.appendChild(li);
  }
});*/