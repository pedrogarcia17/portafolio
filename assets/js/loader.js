/**
 * loader.js
 * Carga los partials HTML en los elementos con el atributo [data-include].
 * Uso en HTML: <div data-include="partials/navbar.html"></div>
 *
 * Después de cargar todos los partials, reinicializa los plugins de jQuery
 * (WOW, slicknav, counterUp, mixItUp, nivoLightbox, scrollingNav).
 */

async function loadPartial(el) {
  const file = el.getAttribute('data-include');
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`No se pudo cargar: ${file}`);
    const html = await response.text();
    el.innerHTML = html;
    el.removeAttribute('data-include');
  } catch (err) {
    console.error(err);
    el.innerHTML = `<p style="color:red">Error cargando ${file}</p>`;
  }
}

async function loadAllPartials() {
  const elements = document.querySelectorAll('[data-include]');
  // Cargar todos en paralelo
  await Promise.all([...elements].map(loadPartial));
  // Una vez cargados, inicializar plugins
  initPlugins();
}

function initPlugins() {
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  if (typeof $ !== 'undefined') {
    // Slicknav – menú móvil
    $('.onepage-nev').slicknav({
      prependTo: '.navbar',
      closeOnClick: true,
    });

    // Counter Up
    $('.counterUp').counterUp({ delay: 10, time: 1000 });

    // MixItUp – filtro de portfolio
    if ($('#portfolio').length) {
      $('#portfolio').mixItUp();
    }

    // Nivo Lightbox
    $('.preview').nivoLightbox({ effect: 'fade' });

    // One-page scrolling nav
    $('.onepage-nev').onePageNav({ currentClass: 'active', scrollOffset: 80 });

    // Back to top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 400);
    });
  }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadAllPartials);
