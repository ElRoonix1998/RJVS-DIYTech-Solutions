const categorias = [
    { titulo:"⚙️ Mantenimiento y Reparación", servicios:[
        ["Limpieza interna de PC",300,"Eliminación de polvo, ventiladores y mejora térmica."],
        ["Mantenimiento completo (hardware + software)",450,"Revisión general, limpieza física y optimización."],
        ["Cambio de pasta térmica",250,"Reemplazo profesional para mejor disipación térmica."],
        ["Instalación o cambio de SSD",400,"Instalación, clonación y migración de sistema."],
        ["Reparación de pantalla de laptop",800,"Cambio de display compatible y calibrado."],
        ["Flasheo de PC / BIOS",350,"Actualización o restauración de firmware dañado."],
        ["Cambio de teclado o touchpad",600,"Reemplazo completo con piezas nuevas."]
      ]},
      { titulo:"📱 Servicio Técnico Móvil", servicios:[
        ["Flasheo Android / iPhone",400,"Restauración del sistema o eliminación de bloqueos."],
        ["Cambio de display / batería",500,"Reemplazo de pantallas o baterías dañadas."],
        ["Recuperación de contraseña",200,"Restablecimiento de contraseñas olvidadas o BIOS."],
        ["Instalación de apps y limpieza de virus",150,"Optimización completa del sistema móvil."]
      ]},
      { titulo:"🧠 Software y Sistemas", servicios:[
        ["Instalación de Windows + drivers",350,"Configuración completa y optimización inicial."],
        ["Instalación de Office / Antivirus",200,"Instalación segura y licencias confiables."],
        ["Recuperación básica de archivos",300,"Recuperación de datos eliminados."],
        ["Configuración de arranque dual",400,"Windows + Linux sin pérdida de información."],
        ["Optimización de rendimiento",250,"Limpieza y ajustes de procesos."]
      ]},
      { titulo:"🌐 Redes y Periféricos", servicios:[
        ["Configuración Wi-Fi / repetidor",300,"Mejor cobertura y seguridad de red doméstica."],
        ["Instalación de impresoras / escáneres",250,"Instalación local o en red."],
        ["Configuración de cámaras IP",600,"Vigilancia y acceso remoto seguro."],
        ["Diagnóstico de red lenta",150,"Análisis y optimización de conexión."]
      ]},
      { titulo:"💻 Soporte Remoto", servicios:[
        ["Asistencia remota (AnyDesk / RustDesk)",150,"Soluciones rápidas sin salir de casa."],
        ["Instalación remota de software",200,"Instalación segura vía conexión remota."],
        ["Optimización remota",250,"Limpieza y mantenimiento desde internet."]
      ]},
      { titulo:"🚀 Servicios Especiales", servicios:[
        ["Asesoría en compra de equipo",200,"Te ayudo a elegir la mejor PC o laptop según tu uso."],
        ["Recuperación avanzada de datos",700,"Archivos dañados, USB o discos duros corruptos."],
        ["Reballing / reparación de tarjeta madre",900,"Solución profesional a fallos de GPU/CPU."],
        ["Ensamblado de PC personalizada",500,"Diseño y armado según tus necesidades."]
    ]}
];

const lista = document.getElementById("lista-categorias");
const modal = document.getElementById("modal");
const titulo = document.getElementById("modal-titulo");
const descripcion = document.getElementById("modal-descripcion");
const precio = document.getElementById("modal-precio");

categorias.forEach(cat=>{
    const div = document.createElement("div");
    div.className = "categoria";
    div.innerHTML = `<h2>${cat.titulo}</h2>`;
    cat.servicios.forEach(s=>{
    const item = document.createElement("div");
    item.className = "servicio";
    item.innerHTML = `<strong>${s[0]}</strong><span>$${s[1]}</span><p style='font-size:0.9em;color:#555;'>${s[2]}</p>`;
    item.onclick = ()=>mostrarModal(s[0],s[2],s[1]);
    div.appendChild(item);
    });
    lista.appendChild(div);
});

function mostrarModal(nombre,desc,precioMXN){
    titulo.textContent = nombre;
    descripcion.textContent = desc;
    precio.textContent = precioMXN;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function cerrarModal(){
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(e){
    if(e.target == modal) cerrarModal();
}