// Diccionario con las URLs originales exactas (incluyendo el ?itok=...)
const todasLasCamaras = {
    "Avda. Vicente Hipólito 1": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C23F2.jpg?itok=nepIAtOg",
    "Avda. Costablanca 1": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C44M2.jpg?itok=W9g50DjL",
    "Avda. Naciones": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C44M1.jpg?itok=vGm55tNu",
    "Avda. de las Naciones": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C38F2.jpg?itok=U9YORs9e",
    "Avda. De Oviedo": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C38F3.jpg?itok=gOUn6Lo4",
    "Caja de Ahorros - Playas": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C42F2.jpg?itok=XfTmE5Hz",
    "Villajoyosa - Sol Naciente": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C46M1.jpg?itok=YQoeb2Du",
    "Villajoyosa - Pl. Isleta": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C46M2.jpg?itok=N8ld6sCH",
    "Avda. Vicente Hipólito 2": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C38F5.jpg?itok=YI7t6VKF",
    "Avda. Pintor Pérez Gil": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C38F4.jpg?itok=vYzqV4tR",
    "Caja de Ahorros - Av. Denia": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C42F1.jpg?itok=oeMlifAA",
    "Avda. Costablanca 2": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C05M1.jpg?itok=dCzcU4gm",
    "Avda. Condomina": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C05F2.jpg?itok=CR2iiMAu",
    "C/ Caja de Ahorros": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C23M1.jpg?itok=rrjwrwai",
    "Av. Denia - Av. Villajoyosa": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C30F2.jpg?itok=7cuPqaGB",
    "Avda. Juan Bautista Lafora": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C30F3.jpg?itok=Zw9owqJS",
    "Entrada Ciudad": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C26F1.jpg?itok=cTd9qFxW",
    "Salida Ciudad": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C26F4.jpg?itok=ADbf32qa",
    "Avda. de Denia 1": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C04F5.jpg?itok=PcYuQWfJ",
    "Avda. Denia 2": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C14M4.jpg?itok=vVPQ5iM8",
    "Avda. Denia 3": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C30M4.jpg?itok=owqHBUSg",
    "Av. A. Ramos Carratalá": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C04F3.jpg?itok=kfZg2JBp",
    "Avda. Padre Esplá": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C06M3.jpg?itok=G2KMEudZ",
    "Avda. Pintor Xavier Soler": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C14M2.jpg?itok=ZR5d3AgV",
    "Avda. Denia - Acceso A-70": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C49M3.jpg?itok=JMBk5Gjl",
    "Av. Denia - Torres de la huerta": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C49M2.jpg?itok=x3Bm8RRQ",
    "Avda. de Denia - Santa Faz": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C48M1.jpg?itok=wK6rhew2",
    "Av. Martires de la libertad": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C03M2.jpg?itok=K8SAt93P",
    "Salida Puerto": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C03M4.jpg?itok=oS2tpsEr",
    "Av. Juan Bautista Lafora 2": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C03M3.jpg?itok=zUlMYPpA",
    "Vía Parque - Jaime I": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C37F3.jpg?itok=_PnWFp8X",
    "Avda. Universidad": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C37F4.jpg?itok=5hfmDvX9",
    "Avda. Novelda": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C25M4.jpg?itok=vPOv8212",
    "Avda Aguilera": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C01F4.jpg?itok=5bER9ZLG",
    "Oscar Esplá": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C02F5.jpg?itok=ic65iwAY",
    "B. P. Galdós - Gral. Marvá": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C36F4.jpg?itok=5H7SXW0F",
    "Avda. Jijona": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C09M4.jpg?itok=BkuxrdGk",
    "Salamanca - Estación": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C35F4.jpg?itok=MpgZFZVp",
    "Rambla de Méndez Núñez": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C16F2.jpg?itok=VdNERR6t",
    "Avda. Maisonnave": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C01F2.jpg?itok=DEuQ1vIh",
    "Avda. Alfonso X El Sabio": "https://movilidad.alicante.es/sites/default/files/styles/upload_fotograma_big/public/camara/C15F2.jpg?itok=dMvADY21"
};

// Rutas actualizadas con los nombres exactos
const misRutas = {
    "playa_a_centro": [
        "Avda. Costablanca 1",
        "Villajoyosa - Sol Naciente",
        "Av. Denia - Av. Villajoyosa",
        "Avda. Juan Bautista Lafora"
    ],
    "centro_a_universidad": [
        "Avda. Alfonso X El Sabio",
        "B. P. Galdós - Gral. Marvá",
        "Vía Parque - Jaime I",
        "Avda. Universidad"
    ],
    "acceso_norte": [
        "Avda. de Denia - Santa Faz",
        "Av. Denia - Torres de la huerta",
        "Avda. Denia - Acceso A-70",
        "Avda. de Denia 1"
    ],
    "centro_ciudad": [
        "Avda Aguilera",
        "Avda. Maisonnave",
        "Avda. Alfonso X El Sabio",
        "Rambla de Méndez Núñez"
    ]
};

const selector = document.getElementById('selectorRuta');
const visor = document.getElementById('visorCamaras');
const botonActualizar = document.getElementById('btnActualizar');

function cargarRuta() {
    const rutaElegida = selector.value;
    visor.innerHTML = '';

    if (rutaElegida === "nada") {
        visor.innerHTML = '<p class="mensaje-vacio">Selecciona una ruta en el menú superior para cargar las cámaras.</p>';
        return;
    }

    const camarasDeRuta = misRutas[rutaElegida];
    const tiempoActual = new Date().getTime(); 

    camarasDeRuta.forEach(nombreCamara => {
        const urlBase = todasLasCamaras[nombreCamara];
        
        if (!urlBase) return; 

        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-camara';

        const titulo = document.createElement('h3');
        titulo.textContent = nombreCamara;

        const imagen = document.createElement('img');
        
        // ¡LA CLAVE ESTÁ AQUÍ! Como la URL ya tiene el ?itok=..., usamos un & para añadir el tiempo
        imagen.src = `${urlBase}&t=${tiempoActual}`;
        imagen.alt = `Tráfico en ${nombreCamara}`;
        
        imagen.onerror = function() {
            this.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23eee'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16px' fill='%23999'%3ECámara no disponible%3C/text%3E%3C/svg%3E";
        };

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(imagen);
        visor.appendChild(tarjeta);
    });
}

selector.addEventListener('change', cargarRuta);
botonActualizar.addEventListener('click', cargarRuta);

setInterval(() => {
    if(selector.value !== "nada"){
        cargarRuta();
    }
}, 15000);

cargarRuta();