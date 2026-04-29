// Espera a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {

    // Mostrar todos los elementos
    window.mostrarTodos = function () {
      const items = document.querySelectorAll('#portfolio > div');
  
      items.forEach(item => {
        item.style.display = "block";
      });
    };
  
    // Filtrar por categoría
    window.filtrar = function (categoria) {
      const items = document.querySelectorAll('#portfolio > div');
  
      items.forEach(item => {
        if (item.classList.contains(categoria)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    };
  
    // Cambiar imagen dinámicamente
    window.cambiarImagen = function () {
      const img = document.getElementById("imgCambiar");
  
      if (img.src.includes("img-1.jpg")) {
        img.src = "assets/img/gallery/img-2.jpg";
      } else {
        img.src = "assets/img/gallery/img-1.jpg";
      }
    };
  
  });