

document.addEventListener('DOMContentLoaded', function () {
  // Submenús desplegables
  const toggles = document.querySelectorAll('.desplegable');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Desplegable clicado'); // 👈 Aquí se muestra en consola cuando haces clic
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
    botonCerrar.classList.remove('oculto');
    botonAbrir.classList.add('oculto');
  });

  // Cerrar menú
  botonCerrar.addEventListener('click', function () {
    menu.classList.remove('activo');
    botonCerrar.classList.add('oculto');
    botonAbrir.classList.remove('oculto');
  });

  // Ocultar el botón de cerrar al inicio
   botonCerrar.classList.add('oculto')
});
