

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