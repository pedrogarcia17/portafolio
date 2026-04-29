// ===============================
// DATOS REUTILIZABLES
// ===============================
const proyectos = [
    {
      titulo: "Sistema Dental",
      descripcion: "CRUD con odontograma",
      color: "primary"
    },
    {
      titulo: "Portafolio Web",
      descripcion: "Sitio personal responsive",
      color: "success"
    },
    {
      titulo: "Landing Page",
      descripcion: "Diseño moderno",
      color: "danger"
    }
  ];
  
  // ===============================
  // COMPONENTE REUTILIZABLE
  // ===============================
  // Esta función genera dinámicamente una tarjeta utilizando Bootstrap
  function crearComponente(proyecto) {
    return `
      <div class="col-md-4">
        <div class="card mb-4 border-${proyecto.color}">
          <div class="card-body text-center">
            <h5 class="card-title">${proyecto.titulo}</h5>
            <p class="card-text">${proyecto.descripcion}</p>
  
            <!-- Botón para cambiar texto dinámicamente -->
            <button class="btn btn-${proyecto.color}" onclick="toggleTexto(this)">
              Ver más
            </button>
  
            <!-- Botón para cambiar color dinámicamente -->
            <button class="btn btn-dark mt-2" onclick="toggleColor(this)">
              Cambiar color
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  // ===============================
  // RENDERIZAR COMPONENTES
  // ===============================
  // Inserta las tarjetas en el contenedor del HTML
  function renderizarComponentes() {
    const contenedor = document.getElementById("contenedorComponentes");
  
    // Evita errores si el partial aún no ha cargado
    if (!contenedor) return;
  
    // Limpia el contenido para evitar duplicados
    contenedor.innerHTML = "";
  
    // Genera cada componente dinámicamente
    proyectos.forEach(proyecto => {
      contenedor.innerHTML += crearComponente(proyecto);
    });
  }
  
  // ===============================
  // ESPERAR A QUE CARGUEN LOS PARTIALS
  // ===============================
  // Se usa un pequeño delay porque el contenido se carga dinámicamente
  setTimeout(renderizarComponentes, 800);
  
  // ===============================
  // FUNCIONES DINÁMICAS
  // ===============================
  
  // Cambia el texto del botón (Ver más / Ocultar)
  function toggleTexto(btn) {
    btn.textContent = btn.textContent === "Ver más" ? "Ocultar" : "Ver más";
  }
  
  // Cambia el color del borde de la tarjeta
  function toggleColor(btn) {
    const card = btn.closest(".card");
  
    if (card.classList.contains("border-primary")) {
      card.classList.replace("border-primary", "border-success");
    } else {
      card.classList.replace("border-success", "border-primary");
    }
  }