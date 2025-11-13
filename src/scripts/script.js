// ===============================================
// 🔧 RJVS DIYTech Solutions - Servicios Dinámicos
// ===============================================

// --- CATEGORÍAS Y SERVICIOS ---
const categorias = [
  {
    titulo: "Mantenimiento de Software",
    servicios: [
      [
        "Instalación de aplicaciones",
        "250 - 1,250",
        "Instalación de software profesional, desde suites de ofimática hasta programas de diseño y arquitectura.",
        [
          "servicios/software/instalacion_aplicaciones_01.jpg",
          "servicios/software/instalacion_aplicaciones_02.jpg",
          "servicios/software/instalacion_aplicaciones_03.png",
        ],
      ],
      [
        "Optimización del sistema",
        "350 - 500",
        "Aceleramos tu equipo al máximo: limpieza de procesos, arranque rápido y eliminación de archivos innecesarios.",
        [
          "servicios/software/optimizacion_sistema_01.jpg",
          "servicios/software/optimizacion_sistema_02.jpg",
          "servicios/software/optimizacion_sistema_03.jpg",
        ],
      ],
      [
        "Eliminación de virus + Antivirus",
        "300 - 600",
        "Limpieza profunda, protección en tiempo real y optimización de seguridad.",
        [
          "servicios/software/eliminacion_virus_01.jpg",
          "servicios/software/eliminacion_virus_02.jpg",
          "servicios/software/eliminacion_virus_03.jpg",
        ],
      ],
      [
        "Recuperación de contraseña",
        "100 - 350",
        "Restauración de contraseñas locales o de cuenta Microsoft.",
        [
          "servicios/software/recuperacion_contraseña_01.jpg",
          "servicios/software/recuperacion_contraseña_02.jpg",
        ],
      ],
      [
        "Instalación de Office / Activación Windows",
        "100 - 200",
        "Instalación de Office LTSC o activación segura del sistema.",
        [
          "servicios/software/office_windows_01.jpg",
          "servicios/software/office_windows_02.png",
        ],
      ],
    ],
  },
  {
    titulo: "Mantenimiento de Hardware",
    servicios: [
      [
        "Limpieza superficial",
        "250 - 300",
        "Limpieza externa profesional sin abrir el equipo.",
        [
          "servicios/hardware/limpieza_superficial_01.jpg",
          "servicios/hardware/limpieza_superficial_02.jpg",
          "servicios/hardware/limpieza_superficial_03.jpg",
        ],
      ],
      [
        "Limpieza interna",
        "300 - 500",
        "Eliminación de polvo, mantenimiento preventivo y mejora térmica.",
        [
          "servicios/hardware/limpieza_interna_01.jpg",
          "servicios/hardware/limpieza_interna_02.jpg",
          "servicios/hardware/limpieza_interna_03.jpg",
        ],
      ],
      [
        "Cambio de componentes",
        "400 - 1,500",
        "Instalación o reemplazo de piezas (RAM, SSD, GPU, etc.).",
        [
          "servicios/hardware/cambio_componentes_01.png",
          "servicios/hardware/cambio_componentes_02.jpg",
        ],
      ],
      [
        "Cambio de pasta térmica",
        "300 - 500",
        "Renovación de pasta térmica para evitar sobrecalentamientos.",
        [
          "servicios/hardware/cambio_pasta_termica_01.jpg",
          "servicios/hardware/cambio_pasta_termica_02.jpg",
        ],
      ],
      [
        "Mantenimiento electrónico general",
        "400 - 900",
        "Limpieza y diagnóstico de placas, fuentes y periféricos.",
        [
          "servicios/hardware/mantenimiento_electronico_01.jpg",
          "servicios/hardware/mantenimiento_electronico_02.jpg",
          "servicios/hardware/mantenimiento_electronico_03.jpg",
        ],
      ],
    ],
  },
  {
    titulo: "Desarrollo de Software",
    servicios: [
      [
        "Apps de escritorio con Electron + Node.js",
        "500 - 10,000",
        "Desarrollo de sistemas personalizados: inventarios, cobros, reproductores multimedia o apps a medida.",
        [
          "servicios/desarrollo/electron_app_01.jpg",
          "servicios/desarrollo/electron_app_02.jpg",
          "servicios/desarrollo/electron_app_03.jpg",
        ],
      ],
      [
        "Sitios web profesionales",
        "400 - 3,000",
        "Diseño y desarrollo de páginas web responsivas con HTML, CSS, JS y Node.js.",
        [
          "servicios/desarrollo/sitio_web_01.jpg",
          "servicios/desarrollo/sitio_web_02.jpg",
          "servicios/desarrollo/sitio_web_03.jpg",
        ],
      ],
      [
        "Sistemas administrativos personalizados",
        "1,500 - 10,000",
        "Desarrollo de sistemas para control de inventario, ventas y usuarios.",
        [
          "servicios/desarrollo/sistema_admin_01.jpg",
          "servicios/desarrollo/sistema_admin_02.jpg",
        ],
      ],
    ],
  },
  {
    titulo: "Manualidades con LEDs",
    servicios: [
      [
        "Lámparas personalizadas",
        "250 - 750",
        "Diseños únicos en MDF con efectos luminosos.",
        [
          "servicios/manualidades/lampara_personalizada_01.jpg",
          "servicios/manualidades/lampara_personalizada_02.jpg",
        ],
      ],
      [
        "Cuadros gamer o anime",
        "200 - 500",
        "Decoraciones con tus personajes favoritos.",
        [
          "servicios/manualidades/cuadros_gamer_anime_01.jpg",
          "servicios/manualidades/cuadros_gamer_anime_02.jpg",
        ],
      ],
      [
        "Decoraciones para hogar",
        "100 - 450",
        "Iluminación cálida y moderna para cualquier ambiente.",
        [
          "servicios/manualidades/decoracion_hogar_01.jpg",
          "servicios/manualidades/decoracion_hogar_02.jpg",
        ],
      ],
      [
        "Decoraciones para oficina",
        "200 - 570",
        "Diseños minimalistas con toque profesional.",
        [
          "servicios/manualidades/decoracion_oficina_01.jpg",
          "servicios/manualidades/decoracion_oficina_02.jpg",
        ],
      ]
    ],
  },
];

// ===============================================
// 🧩 RENDER DINÁMICO DE SERVICIOS
// ===============================================
const lista = document.getElementById("lista-categorias");

categorias.forEach((cat) => {
  const div = document.createElement("div");
  div.className = "categoria";
  div.innerHTML = `<h2>${cat.titulo}</h2>`;

  cat.servicios.forEach((serv) => {
    const item = document.createElement("div");
    item.className = "servicio";
    item.innerHTML = `
      <strong>${serv[0]}</strong>
      <span class="precio">$${serv[1]} MXN</span>
      <p>${serv[2]}</p>
    `;
    item.onclick = () => mostrarModal(serv[0], serv[2], serv[1], serv[3]);
    div.appendChild(item);
  });

  lista.appendChild(div);
});

// ===============================================
// 🎞️ MODAL + CARRUSEL (usa botones del HTML)
// ===============================================
const modal = document.getElementById("modal");
const cerrarModalBtn = document.getElementById("cerrarModal");
const titulo = document.getElementById("modal-titulo");
const descripcion = document.getElementById("modal-descripcion");
const precio = document.getElementById("modal-precio");
const carousel = document.getElementById("modal-carousel");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");

let index = 0;
let slides = [];
let interval;

function mostrarModal(nombre, desc, precioMXN, imgs) {
  titulo.textContent = nombre;
  descripcion.textContent = desc;
  precio.textContent = precioMXN;

  if (!imgs || imgs.length === 0) {
    carousel.innerHTML = "<p>Sin imágenes disponibles.</p>";
  } else {
    carousel.innerHTML = imgs
      .map(
        (img, i) => `
        <div class="slide ${i === 0 ? "active" : ""}">
          <img src="assets/${img}" alt="${nombre}">
        </div>`
      )
      .join("");
    slides = carousel.querySelectorAll(".slide");
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  iniciarCarrusel();
}

function cerrarModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  detenerCarrusel();
}

cerrarModalBtn.onclick = cerrarModal;
window.onclick = (e) => {
  if (e.target === modal) cerrarModal();
};

function iniciarCarrusel() {
  if (!slides.length) return;
  index = 0;
  detenerCarrusel();
  interval = setInterval(() => cambiarSlide(1), 6000);
}

function detenerCarrusel() {
  clearInterval(interval);
}

function cambiarSlide(direccion) {
  if (!slides.length) return;
  slides[index].classList.remove("active");
  index = (index + direccion + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// Control manual con botones del HTML
prevBtn.onclick = () => {
  detenerCarrusel();
  cambiarSlide(-1);
};
nextBtn.onclick = () => {
  detenerCarrusel();
  cambiarSlide(1);
};