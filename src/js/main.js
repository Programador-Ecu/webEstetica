

document.addEventListener('DOMContentLoaded', function () {
  // Submenús desplegables
  const toggles = document.querySelectorAll('.desplegable');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.querySelector('.submenu');
      submenu.classList.toggle('activo');
    });
  });

  // Menú hamburguesa
  const botonAbrir = document.getElementById('menu-toggle');
  const botonCerrar = document.querySelector('.cerrar-menu');
  const menu = document.querySelector('.menu');

  // Abrir menú
  botonAbrir.addEventListener('click', function () {
    menu.classList.add('activo');
    botonCerrar.style.display = 'inline-block';
    botonAbrir.style.display = 'none';
  });

  // Cerrar menú
  botonCerrar.addEventListener('click', function () {
    menu.classList.remove('activo');
    botonCerrar.style.display = 'none';
    botonAbrir.style.display = 'inline-block';
  });

  // Ocultar el botón de cerrar al inicio
  botonCerrar.style.display = 'none';
});