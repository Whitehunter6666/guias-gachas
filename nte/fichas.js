// Fichas de Espers (NTE) — arte oficial + descripción
const FICHAS = {
  "chaos": {
    "nombreCompleto": "Chaos",
    "faccion": "Buró de Control de Anomalías (ETD-6)",
    "desc": "Esper Lakshana rango S y miembro de la División Táctica de Ejecución 6 (ETD-6). DPS centrado en ataques básicos y definitiva que llena su medidor 'Crime' para potenciar el daño y aplica 'Warrant' a los enemigos.",
    "img": "../assets/nte/Chaos_Portrait-15a95e41.webp"
  },
  "lacrimosa": {
    "nombreCompleto": "Lacrimosa",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Esper de Chaos de la ETD-4. DPS de daño en el tiempo (DoT) que copia y lanza habilidades enemigas; brilla en equipos de pesadilla/DoT gracias a su mecánica Nightmare.",
    "img": "../assets/nte/Lacrimosa_Portrait-d7628fb1.webp"
  },
  "hotori": {
    "nombreCompleto": "Hotori",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Cosmos de apoyo/buff que puede detener el tiempo y grabar los ataques de sus compañeros para amplificar el daño del equipo, con potencial de daño explosivo.",
    "img": "../assets/nte/Hotori_Portrait-e1e3f04e.webp"
  },
  "nanally": {
    "nombreCompleto": "Nanally",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Anima rango S y cabeza de la Familia Coluccis. Chica-gato y principal DPS al lanzamiento, con ataques de seguimiento automáticos que se activan aun estando fuera de campo.",
    "img": "../assets/nte/Nanally_Portrait-d39ebf4a.webp"
  },
  "daffodill": {
    "nombreCompleto": "Daffodill",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Chaos rango S. DPS de tipo Break-Burst que acumula intensidad de ruptura y castiga a los enemigos al alcanzar el umbral de Break; destaca en equipos de reacción Discord.",
    "img": "../assets/nte/Daffodill_Portrait-8c8fef6a.webp"
  },
  "baicang": {
    "nombreCompleto": "Baicang",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Capitán de la División Táctica de Ejecución 4 (ETD-4). DPS de Incantation que usa 'Palabras de Poder' para infligir gran daño; descrito como el capitán menos 'capitán' de la ETD-4.",
    "img": "../assets/nte/Baicang_Portrait-d84c3c6c.webp"
  },
  "jiuyuan": {
    "nombreCompleto": "Jiuyuan",
    "faccion": "Sterry Express",
    "desc": "Esper Anima, mensajera de élite y gerente en funciones de Sterry Express. DPS principal o secundario cuyo atractivo es su mejora del Ciclo Blossom, que duplica los Blossom en el campo.",
    "img": "../assets/nte/Jiuyuan_Portrait-37d45996.webp"
  },
  "hathor": {
    "nombreCompleto": "Hathor",
    "faccion": "Sterry Express",
    "desc": "Esper Lakshana rango S y operativa de Sterry Express, de cabello plateado y ala de ángel. DPS y una de las pocas Espers capaces de conducir motocicleta.",
    "img": "../assets/nte/Hathor_Portrait-688dc8a4.webp"
  },
  "chiz": {
    "nombreCompleto": "Chiz",
    "faccion": "Familia Dvořák",
    "desc": "Esper Cosmos de la Familia Dvořák y gerente del banco Pink Paws. DPS en campo que escala con 'Grain': lo gasta con su habilidad y lo recupera con básicos. Se desbloquea gratis al llegar a nivel 18 de City Tycoon.",
    "img": "../assets/nte/Chiz_Portrait-4231740e.webp"
  },
  "zero": {
    "nombreCompleto": "Esper Zero",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Protagonista jugable, un Esper clase S de elemento Cosmos hallado sin memoria en el epicentro del desastre del Hipervórtice. Percibe la verdadera esencia de las anomalías y puede comunicarse con ellas; está bajo tutela del Buró de Control de Anomalías.",
    "img": "../assets/nte/Esper_Zero_Male_Portrait-274dcfc2.webp"
  },
  "sakiri": {
    "nombreCompleto": "Sakiri",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper S de Incantation y miembro de la Tienda Eibon. Chica de cabello blanco con un cuerno de oni, acompañada por un fantasma tuerto llamado Kiroumaru; da apoyo agrupando y controlando enemigos y potenciando al equipo.",
    "img": "../assets/nte/Sakiri_Portrait-8965e6b7.webp"
  },
  "fadia": {
    "nombreCompleto": "Fadia",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Enigmática Esper S de Psyche del ETD-4, apodada la 'Apóstol del Amor y la Muerte'. De naturaleza vampírica, redirige a sí misma parte del daño de sus aliados y se cura con habilidades basadas en sangre.",
    "img": "../assets/nte/Fadia_Portrait-158baa1a.webp"
  },
  "skia": {
    "nombreCompleto": "Skia",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Teniente del ETD-4 y Esper A de elemento Lakshana. Imponente canino de pelaje oscuro con una cicatriz sobre el ojo izquierdo, vestido como agente táctico de élite; actúa como DPS principal.",
    "img": "../assets/nte/Skia_Portrait-d9afe958.webp"
  },
  "mint": {
    "nombreCompleto": "Mint",
    "faccion": "Buró de Control de Anomalías (CSU-2)",
    "desc": "Esper A de elemento Anima, una vivaz chica-gato de cabello turquesa que lucha con dobles cuchillas y ataques de torbellino como DPS cuerpo a cuerpo veloz con fuerte daño en área.",
    "img": "../assets/nte/Mint_Portrait-bf308618.webp"
  },
  "aurelia": {
    "nombreCompleto": "Aurelia",
    "faccion": "Asociación de Vecinos de la Calle Tamamochi",
    "desc": "Esper A de Psyche muy móvil; DPS principal que comanda un banco de medusas para infligir daño Psyche sostenido mientras se desplaza a gran velocidad. Su nombre viene de la medusa luna (Aurelia aurita).",
    "img": "../assets/nte/Aurelia_Portrait-aba87663.webp"
  },
  "haniel": {
    "nombreCompleto": "Haniel",
    "faccion": "Sterry Express",
    "desc": "Esper A de Psyche y miembro de Sterry Express. Apoyo muy versátil que despliega su altavoz portátil Hootie para aumentar el ATQ del equipo y desencadenar efectos en cadena de Ensamble mientras causa daño Psyche.",
    "img": "../assets/nte/Haniel_Portrait-7ef3b0a0.webp"
  },
  "adler": {
    "nombreCompleto": "Alois V. Alder",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper A de Incantation y el mayordomo perfecto de la Tienda Eibon. Apoyo de tipo escudo cuyo daño y protección escalan con la DEF, gestionando acumulaciones de Karma para proteger y debilitar enemigos.",
    "img": "../assets/nte/Adler_Portrait-6293c9bf.webp"
  },
  "edgar": {
    "nombreCompleto": "Edgar",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper A de elemento Cosmos y miembro de la Tienda Eibon, de aire sereno y estética refinada en tonos azul claro. Apoyo de media distancia centrado en la curación: sus habilidades y su definitiva sanan aliados mientras dañan a los enemigos.",
    "img": "../assets/nte/Edgar_Portrait-fe2ba350.webp"
  },
  "shinku": {
    "nombreCompleto": "Shinku",
    "faccion": "Buró de Control de Anomalías (Unidad de Contención 2)",
    "desc": "Esper Cosmos rango S del Buró de Control de Anomalías (Containment Strike Unit 2), lanzada el 8-jul-2026 en la versión 1.2 con el banner 'Before the Dawn'. Main DPS de arma Condensate con mecánica de doble postura y una Definitiva que la lleva al estado Rising Crimson para ráfagas de daño. Cabello negro con mechones carmesí, dos cuernos rojos, ojos rubí y una larga cola negra y rosa.",
    "img": "../assets/nte/Shinku_Portrait-c8bd937a.webp"
  },
  "zankou": {
    "nombreCompleto": "Zankou (alias «Bella»)",
    "faccion": "La Carta Escarlata (The Scarlet Letter)",
    "desc": "Esper Encantamiento rango S de arma Gas, lanzada el 19-ago-2026 en la versión 1.3 con el banner «Sombras seductoras». Miembro de La Carta Escarlata, hija (adoptiva según la wiki ES) de Inanna, hermana menor de Daffodill y mayor de Poinsette; su habilidad Esper es «El Ojo del Delirio». Main DPS de ataques de seguimiento con dos formas (real e ilusoria) que aplica y propaga daño prolongado y potencia la Quemadura del equipo. Nivel 80: 14 234 PS · 577 ATQ · 834 DEF.",
    "img": "../assets/nte/Zankou_Portrait-9362e7f6.webp"
  },
  "linko": {
    "nombreCompleto": "Linko",
    "faccion": "Buró de Control de Anomalías (ETD-6)",
    "desc": "Esper Anima rango S de arma Plasma, lanzada el 9-sep-2026 en la versión 1.3 con el banner «Surfing All Channels!». Miembro de la División Táctica de Ejecución 6 (ETD-6) del Buró, cumple años el 14 de febrero y combate junto a su Anomalía compañera Xiaozhen; su habilidad Esper es la telepatía. Sub-DPS de ráfaga y ataques de seguimiento: llama a sus aliados a realizar Golpes sincronizados, reduce resistencias elementales y potencia la reacción Hexed. La wiki ES la nombra «Lingke»/«Lingko», pero su cita oficial en español dice «Linko».",
    "img": "../assets/nte/Linko_Portrait-58eeb2f8.webp"
  },
  "blackbird": {
    "nombreCompleto": "Blackbird, «La Bruja»",
    "faccion": "Corte de Yggash (Yggash Court; nombre ES por confirmar)",
    "desc": "PRELIMINAR. Esper Psyche rango S de arma Gas, anunciada para el 30-sep-2026 (versión 1.4, banner «Foretold Finale»). Hoy es la bruja de la Casa de la Bruja en Bridge Crossings, donde lee la fortuna y atiende las Piedras oráculo. Kit no publicado.",
    "img": "../assets/nte/Blackbird_Portrait-483eb1f2.webp"
  },
  "akane-rin": {
    "nombreCompleto": "Akane Rin",
    "faccion": "StarSign (Señal Estelar); antes LINES / The Whoots!!!!",
    "desc": "PRELIMINAR. Esper Lakshana rango S de arma Liquid, anunciada para la versión 1.4 (según la wiki, 21-oct-2026, banner «Dazzling Star»). Camarera de StarSign; formó parte de LINES, banda musical y grupo de cazadoras de Anomalías junto a Aurelia y Suzuha. Kit no publicado.",
    "img": "../assets/nte/Akane_Rin_Portrait-9aeda745.webp"
  },
  "iroi": {
    "nombreCompleto": "Oneiroi «Iroi» (Teana, apodo de Mint)",
    "faccion": "Buró de Control de Anomalías (CSU-2)",
    "desc": "Esper Anima rango S de arma Liquid, lanzada el 29-jul-2026 en la versión 1.2 (Fase 2) con el banner «Hilo de vida»; su disco insignia «La puerta equivocada» llegó en el programa de discos Dreamgate Special. Miembro de la Unidad de Contención 2 del Buró junto a Mint y Shinku, voluntaria en la Isla Solardiente; cumple años el 21 de diciembre y su habilidad Esper es «Sueño infantil». Apoyo sanador que invoca corderos (Morpheus, Icelos, Phantasos), acumula Imaginación, transforma en ovejas a los aliados caídos (Regresión) y duplica los Vita Bud del Blossom. Nivel 80: 10 394 PS · 371 ATQ · 549 DEF.",
    "img": "../assets/nte/Iroi_Portrait-3283ec35.webp"
  }
};
