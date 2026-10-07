// Fichas de agentes (ZZZ) — arte oficial + descripción
const FICHAS = {
  "alice-thymefield": {
    "nombreCompleto": "Alice Thymefield",
    "faccion": "Cabaña del Terror",
    "desc": "Espadachina noble y thiren coneja de la familia Thymefield, educada en ciencia del Éter. Miembro más reciente de la Cabaña del Terror; usa una esgrima refinada acumulando energía para asaltos devastadores.",
    "img": "../assets/zzz/Agent_Alice_Thymefield_Portrait-4d513e1d.webp"
  },
  "anby-demara": {
    "nombreCompleto": "Anby Demara",
    "faccion": "Gazmoños",
    "desc": "Joven callada y de pasado misterioso, miembro de los Gazmoños con un estilo de combate muy eficiente. Le encantan las películas.",
    "img": "../assets/zzz/Agent_Anby_Demara_Portrait-ff93475e.webp"
  },
  "anton-ivanov": {
    "nombreCompleto": "Antón Ivanov",
    "faccion": "Construcciones Belobog",
    "desc": "Minero entusiasta y trabajador estrella de Belobog. Enérgico, leal y algo fanfarrón, ataca con taladros de gran potencia.",
    "img": "../assets/zzz/Agent_Anton_Ivanov_Portrait-5ca9ae6d.webp"
  },
  "aria": {
    "nombreCompleto": "Aria",
    "faccion": "Ángeles del Delirio",
    "desc": "Vocalista principal de la banda Ángeles del Delirio. DPS de Éter/Anomalía centrada en ataques cargados y en desencadenar Abloom sobre enemigos con anomalías.",
    "img": "../assets/zzz/Agent_Aria_Portrait-a4ec65e1.webp"
  },
  "astra-yao": {
    "nombreCompleto": "Astra Yao",
    "faccion": "Estrellas de Lyra",
    "desc": "La cantante más famosa de Nueva Eridu y líder de las Estrellas de Lyra. Soporte universal cuyos potenciadores benefician a todo el equipo, con protección e invulnerabilidad en su definitiva.",
    "img": "../assets/zzz/Agent_Astra_Yao_Portrait-6787a475.webp"
  },
  "banyue": {
    "nombreCompleto": "Banyue",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Agente de la Autoridad de Cumplimiento Krampus, que vigila a los miembros de TOPS. Disruptora de Ígneo que inflige daño de fuego puro acumulando 'Fuegos de Ira'.",
    "img": "../assets/zzz/Agent_Banyue_Portrait-69c3acff.webp"
  },
  "ben-bigger": {
    "nombreCompleto": "Ben Bigger",
    "faccion": "Construcciones Belobog",
    "desc": "Oso thiren imponente que trabaja como contador en Belobog. Pese a su tamaño es amable y tímido; actúa como defensor, protegiendo al equipo.",
    "img": "../assets/zzz/Agent_Ben_Bigger_Portrait-5c85f5b9.webp"
  },
  "billy-kid": {
    "nombreCompleto": "Billy Kid",
    "faccion": "Gazmoños",
    "desc": "Androide justiciero y aspirante a héroe de los Gazmoños. Alegre, teatral y optimista, combate a distancia disparando con sus dos pistolas.",
    "img": "../assets/zzz/Agent_Billy_Kid_Portrait-73da58b2.webp"
  },
  "burnice-white": {
    "nombreCompleto": "Burnice White",
    "faccion": "Hijos de Calydon",
    "desc": "Pirómana despreocupada y experta en explosivos de la banda de moteros Hijos de Calydon. Agente de Anomalía de Ígneo que incendia el campo con su combustible.",
    "img": "../assets/zzz/Agent_Burnice_White_Portrait-97de6a9d.webp"
  },
  "caesar-king": {
    "nombreCompleto": "Caesar King",
    "faccion": "Hijos de Calydon",
    "desc": "Líder carismática e imponente de la banda de moteros Hijos de Calydon. Defensora que protege y potencia al equipo con su enorme escudo y golpes contundentes.",
    "img": "../assets/zzz/Agent_Caesar_King_Portrait-a27be091.webp"
  },
  "cissia": {
    "nombreCompleto": "Cissia",
    "faccion": "División de Orden Metropolitano",
    "desc": "Miembro de la División de Orden Metropolitano de la Seguridad Pública de Nueva Eridu. Atacante de Eléctrico que consume puntos de 'Veneno' para asestar ráfagas y subir su probabilidad de crítico.",
    "img": "../assets/zzz/Agent_Cissia_Portrait-03c5a348.webp"
  },
  "corin-wickes": {
    "nombreCompleto": "Corin Wickes",
    "faccion": "Casa Victoria",
    "desc": "Sirvienta de combate de Casa Victoria, extremadamente tímida y torpe, pero letal en batalla con su enorme motosierra.",
    "img": "../assets/zzz/Agent_Corin_Wickes_Portrait-5daaf3a3.webp"
  },
  "dialyn": {
    "nombreCompleto": "Dialyn",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Representante de atención al cliente de TOPS y una de las Juezas de la Autoridad de Cumplimiento Krampus. Sarcástica y de lengua venenosa, aturdidora de Físico que castiga a quienes rompen las reglas.",
    "img": "../assets/zzz/Agent_Dialyn_Portrait-db3207dd.webp"
  },
  "ellen-joe": {
    "nombreCompleto": "Ellen Joe",
    "faccion": "Servicios Domésticos Victoria",
    "desc": "Thiren tiburón y la más reciente doncella de Servicios Domésticos Victoria. Perezosa y de bajo ánimo, aunque leal a sus compañeras.",
    "img": "../assets/zzz/Agent_Ellen_Joe_Portrait-5eff687d.webp"
  },
  "evelyn": {
    "nombreCompleto": "Evelyn Chevalier",
    "faccion": "Estrellas de Lyra",
    "desc": "Mánager y guardaespaldas de la cantante Astra Yao en las Estrellas de Lyra. De mente aguda y pasado misterioso, es letal en combate.",
    "img": "../assets/zzz/Agent_Evelyn_Chevalier_Portrait-014a50b9.webp"
  },
  "gatillo": {
    "nombreCompleto": "Gatillo",
    "faccion": "Batallón Óbolos",
    "desc": "Francotiradora del Batallón Óbolos, subunidad de la Fuerza de Defensa de Nueva Eridu. Antigua integrante del Escuadrón Lira.",
    "img": "../assets/zzz/Agent_Trigger_Portrait-587dbf67.webp"
  },
  "grace-howard": {
    "nombreCompleto": "Grace Howard",
    "faccion": "Construcciones Belobog",
    "desc": "Jefa de I+D de Construcciones Belobog, ingeniera excéntrica obsesionada con las máquinas y hermana adoptiva de la presidenta Koleda.",
    "img": "../assets/zzz/Agent_Grace_Howard_Portrait-d5e0a78e.webp"
  },
  "harumasa": {
    "nombreCompleto": "Asaba Harumasa",
    "faccion": "División N.º 6",
    "desc": "Oficial ejecutivo de la División N.º 6 de Operaciones Especiales del Hueco. Relajado y algo perezoso, pero eficaz con sus espadas gemelas.",
    "img": "../assets/zzz/Agent_Asaba_Harumasa_Portrait-476c26c9.webp"
  },
  "hugo": {
    "nombreCompleto": "Hugo Vlad",
    "faccion": "Ruiseñor",
    "desc": "Líder de la facción Ruiseñor. Elegante y letal, empuña una guadaña oculta en un maletín y se especializa en detonar a enemigos aturdidos.",
    "img": "../assets/zzz/Agent_Hugo_Vlad_Portrait-f7715a30.webp"
  },
  "jane-doe": {
    "nombreCompleto": "Jane Doe",
    "faccion": "Equipo de Respuesta de Investigación Criminal",
    "desc": "Thiren rata y especialista en conducta criminal que trabaja como consultora encubierta del Equipo de Respuesta de Investigación Criminal. Enigmática y de múltiples identidades.",
    "img": "../assets/zzz/Agent_Jane_Doe_Portrait-abf152b6.webp"
  },
  "ju-fufu": {
    "nombreCompleto": "Ju Fufu",
    "faccion": "Pináculo Yunkui",
    "desc": "Thiren tigre y discípula veterana del Pináculo Yunkui, versada en artes místicas. Combate con una enorme olla de palomitas llamada Hu Wei.",
    "img": "../assets/zzz/Agent_Ju_Fufu_Portrait-c445bfb7.webp"
  },
  "koleda": {
    "nombreCompleto": "Koleda Belobog",
    "faccion": "Construcciones Belobog",
    "desc": "Joven presidenta de Construcciones Belobog. Golpea con un martillo gigante y desata daño de fuego a través de su mecánica de Horno.",
    "img": "../assets/zzz/Agent_Koleda_Belobog_Portrait-1e03c5f7.webp"
  },
  "komano-manato": {
    "nombreCompleto": "Komano Manato",
    "faccion": "Cabaña del Terror",
    "desc": "Miembro de la Cabaña del Terror. Sus ataques escalan con su HP máxima e infligen daño de ruptura (Sheer), cumpliendo un rol disruptivo.",
    "img": "../assets/zzz/Agent_Komano_Manato_Portrait-0d17d377.webp"
  },
  "lighter": {
    "nombreCompleto": "Lighter",
    "faccion": "Hijos de Calydon",
    "desc": "Campeón de los Hijos de Calydon. Ex mercenario y boxeador curtido en la arena clandestina, especializado en aturdir enemigos.",
    "img": "../assets/zzz/Agent_Lighter_Portrait-a8929601.webp"
  },
  "lucia": {
    "nombreCompleto": "Lucia Elowen",
    "faccion": "Cabaña del Terror",
    "desc": "Miembro de la Cabaña del Terror, thiren de aspecto caprino. Auxiliar de Éter cuyo poder escala con la HP y potencia a los agentes de Ruptura.",
    "img": "../assets/zzz/Agent_Lucia_Elowen_Portrait-3acaed92.webp"
  },
  "lucy-de-montefio": {
    "nombreCompleto": "Luciana de Montefio",
    "faccion": "Hijos de Calydon",
    "desc": "Heredera de la familia de Montefio y auxiliar de los Hijos de Calydon. Comanda a sus jabalíes mascota, los Guardias, para apoyar al equipo.",
    "img": "../assets/zzz/Agent_Luciana_de_Montefio_Portrait-c0680df9.webp"
  },
  "miyabi": {
    "nombreCompleto": "Hoshimi Miyabi",
    "faccion": "Sección 6 (Operaciones Especiales del Hueco)",
    "desc": "Jefa de la Sección 6 y la Cazadora del Vacío más joven de Nueva Eridu, maestra del estilo de espada de la escuela Isshin-Muga.",
    "img": "../assets/zzz/Agent_Hoshimi_Miyabi_Portrait-0a32b4a5.webp"
  },
  "n-0-anby": {
    "nombreCompleto": "Anby Demara (Soldado 0)",
    "faccion": "Fuerza de Defensa de Nueva Eridu - Escuadrón Plateado",
    "desc": "Identidad como supersoldado de Anby Demara: la Soldado 0, capitana del ya desaparecido Escuadrón Plateado, experta en táctica y esgrima.",
    "img": "../assets/zzz/Agent_Soldier_0_-_Anby_Portrait-526025be.webp"
  },
  "n-11": {
    "nombreCompleto": "Soldado 11",
    "faccion": "Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu)",
    "desc": "Soldado de élite de la Fuerza de Defensa que empuña una espada incandescente; disciplinada en combate pero algo torpe en la vida cotidiana.",
    "img": "../assets/zzz/Agent_Soldier_11_Portrait-2119a084.webp"
  },
  "nangong-yu": {
    "nombreCompleto": "Nangong Yu",
    "faccion": "Ángeles del Delirio",
    "desc": "Capitana y bailarina principal del grupo Ángeles del Delirio, segura de sí misma y atenta con sus compañeras.",
    "img": "../assets/zzz/Agent_Nangong_Yu_Portrait-31d11ae5.webp"
  },
  "nekomata": {
    "nombreCompleto": "Nekomiya Mana",
    "faccion": "Liebres Astutas",
    "desc": "Thiren felina ágil y juguetona, miembro de la agencia de encargos Liebres Astutas que lucha con dobles cuchillas.",
    "img": "../assets/zzz/Agent_Nekomiya_Mana_Portrait-13fc2647.webp"
  },
  "nicole-demara": {
    "nombreCompleto": "Nicole Demara",
    "faccion": "Liebres Astutas",
    "desc": "Líder de las Liebres Astutas, astuta y algo estafadora; apoya al equipo debilitando enemigos con su maletín-cañón etéreo.",
    "img": "../assets/zzz/Agent_Nicole_Demara_Portrait-0dcf844b.webp"
  },
  "orfia-y-magas": {
    "nombreCompleto": "Orfia Magnusson y Magas",
    "faccion": "Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu)",
    "desc": "Dúo de artillera y capitana del Escuadrón Óbolo: Orfia es el cuerpo (una constructo inteligente) y Magas, su alma alojada en el arma.",
    "img": "../assets/zzz/Agent_Orphie_Magnusson___Magus_Portrait-3ba639b5.webp"
  },
  "pan-yinhu": {
    "nombreCompleto": "Pan Yinhu",
    "faccion": "Cumbre Yunkui",
    "desc": "Chef principal y administrador financiero de la Cumbre Yunkui; un defensor físico que potencia a sus aliados de Rotura.",
    "img": "../assets/zzz/Agent_Pan_Yinhu_Portrait-75663c8f.webp"
  },
  "piper-wheel": {
    "nombreCompleto": "Piper Wheel",
    "faccion": "Hijos de Calydon",
    "desc": "Joven conductora de la banda Hijos de Calydon que provoca anomalías físicas con el látigo-cadena de su camión.",
    "img": "../assets/zzz/Agent_Piper_Wheel_Portrait-9e22d2f5.webp"
  },
  "promeia": {
    "nombreCompleto": "Promeia",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Una de las Juezas de la Autoridad de Cumplimiento Krampus; especialista en anomalías de hielo como DPS principal.",
    "img": "../assets/zzz/Agent_Promeia_Portrait-1990747a.webp"
  },
  "pulchra-fellini": {
    "nombreCompleto": "Pulchra Fellini",
    "faccion": "Hijos de Calydon",
    "desc": "Thiren recolectora de información de los Hijos de Calydon; para ella amigos y enemigos son solo papeles temporales según el trabajo.",
    "img": "../assets/zzz/Agent_Pulchra_Fellini_Portrait-64564f9a.webp"
  },
  "qingyi": {
    "nombreCompleto": "Qingyi",
    "faccion": "Sección de Investigación Criminal (Seguridad Pública de Nueva Eridu)",
    "desc": "Androide del Equipo de Respuesta Especial de Investigación Criminal, aturdidora eléctrica que combate con un bastón extensible.",
    "img": "../assets/zzz/Agent_Qingyi_Portrait-c2c47b0a.webp"
  },
  "remielle-dan": {
    "nombreCompleto": "Remielle Dan",
    "faccion": "Alianza de Dayat",
    "rol": "Agonista de la vacuidad (1.ª generación)",
    "desc": "Agonista de la vacuidad de la primera generación y exteniente coronel de la Guardia de Bastones, estrenada en la 3.1 junto al nuevo atributo Lumiflujo. Anómala de soporte: sincroniza su atributo con el del siguiente agente del equipo y amplifica las anomalías aliadas mediante la Refringencia.",
    "img": "../assets/zzz/Agent_Remielle_Dan_Portrait-629f5699.webp"
  },
  "rina": {
    "nombreCompleto": "Alexandrina Sebastiane",
    "faccion": "Casa Victoria",
    "desc": "Ama de llaves principal de la Casa Victoria; una Thiren elegante que apoya al equipo controlando a sus dos marionetas eléctricas.",
    "img": "../assets/zzz/Agent_Alexandrina_Sebastiane_Portrait-eb9033ef.webp"
  },
  "seed": {
    "nombreCompleto": "Sporos",
    "faccion": "Escuadrón Óbolo",
    "desc": "Agente eléctrica de élite del Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu), especialista en armas pesadas que combate junto a su meca de apoyo con potentes ataques eléctricos de área.",
    "img": "../assets/zzz/Agent_Seed_Portrait-f4bca8b2.webp"
  },
  "seth": {
    "nombreCompleto": "Seth Lowell",
    "faccion": "Seguridad Pública de Nueva Eridu",
    "desc": "Joven agente thiren (lince) del Equipo de Respuesta Especial de Investigación Criminal, entusiasta y protector de sus compañeros.",
    "img": "../assets/zzz/Agent_Seth_Lowell_Portrait-2114c988.webp"
  },
  "soukaku": {
    "nombreCompleto": "Soukaku",
    "faccion": "Sección 6",
    "desc": "Espadachina oni de la Sección 6 (Operaciones Especiales del Hueco), siempre hambrienta; apoya al equipo con mejoras de hielo y de ataque.",
    "img": "../assets/zzz/Agent_Soukaku_Portrait-63fd35dc.webp"
  },
  "sunna": {
    "nombreCompleto": "Sunna",
    "faccion": "Ángeles del Delirio",
    "desc": "Compositora del grupo de ídolos virtuales Ángeles del Delirio; agente de apoyo que potencia a atacantes y anómalos marcando enemigos con Mirada de gato mediante su compañera Bubblegum.",
    "img": "../assets/zzz/Agent_Sunna_Portrait-109cc38c.webp"
  },
  "ukinami-yuzuha": {
    "nombreCompleto": "Ukinami Yuzuha",
    "faccion": "Cabaña del Terror",
    "desc": "Fundadora del grupo de la Cabaña del Terror en la península de Waifei; antigua sujeto del Proyecto Hoja Nueva que canaliza su trauma en la narración de historias.",
    "img": "../assets/zzz/Agent_Ukinami_Yuzuha_Portrait-40910274.webp"
  },
  "vivian": {
    "nombreCompleto": "Vivian Banshee",
    "faccion": "Ruiseñor",
    "desc": "Aprendiz de Hugo y ladrona en formación del sindicato de ladrones fantasma Ruiseñor; posee el don sobrenatural de presentir la muerte de las personas.",
    "img": "../assets/zzz/Agent_Vivian_Banshee_Portrait-1b8b0c8b.webp"
  },
  "von-lycaon": {
    "nombreCompleto": "Von Lycaon",
    "faccion": "Casa Victoria",
    "desc": "Elegante mayordomo thiren lobo de Casa Victoria; letal en combate con ataques de hielo pese a sus modales refinados.",
    "img": "../assets/zzz/Agent_Von_Lycaon_Portrait-8ed53b21.webp"
  },
  "yanagi": {
    "nombreCompleto": "Tsukishiro Yanagi",
    "faccion": "Sección 6",
    "desc": "Subdirectora de la Sección 6 que combate con una katana y domina la electricidad; disciplinada y leal a Miyabi.",
    "img": "../assets/zzz/Agent_Tsukishiro_Yanagi_Portrait-a6fe896f.webp"
  },
  "ye-shunguang": {
    "nombreCompleto": "Ye Shunguang",
    "faccion": "Cumbre Yunkui",
    "desc": "Portadora actual de la espada Qingming y cazadora del Vacío de la Cumbre Yunkui; hermana menor de Ye Shiyuan.",
    "img": "../assets/zzz/Agent_Ye_Shunguang_Portrait-000509b4.webp"
  },
  "yidhari": {
    "nombreCompleto": "Yidhari Murphy",
    "faccion": "Cabaña del Terror",
    "desc": "Thiren pulpo de la Cabaña del Terror que empuña un pesado martillo y ataca con hielo; de presencia inquietante y habla pausada.",
    "img": "../assets/zzz/Agent_Yidhari_Murphy_Portrait-525d5bc6.webp"
  },
  "yixuan": {
    "nombreCompleto": "Yixuan",
    "faccion": "Cumbre Yunkui",
    "desc": "Maestra de la Cumbre Yunkui que domina la Tinta áurica, combatiendo con técnicas marciales y caligrafía espiritual.",
    "img": "../assets/zzz/Agent_Yixuan_Portrait-d3ed32df.webp"
  },
  "zhao": {
    "nombreCompleto": "Zhao",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Thiren coneja de rasgos animales marcados y miembro de alto rango de la Autoridad de Cumplimiento Krampus (subsidiaria de TOPS); defensora con atributo de hielo.",
    "img": "../assets/zzz/Agent_Zhao_Portrait-2b522b6b.webp"
  },
  "zhu-yuan": {
    "nombreCompleto": "Zhu Yuan",
    "faccion": "Seguridad Pública de Nueva Eridu",
    "desc": "Oficial del Equipo de Respuesta Especial de Investigación Criminal; atacante de éter que combate con armamento pesado.",
    "img": "../assets/zzz/Agent_Zhu_Yuan_Portrait-29082a78.webp"
  },
  "billy-estelar": {
    "nombreCompleto": "Billy Estelar (Starlight - Billy Kid)",
    "faccion": "Gazmoños",
    "desc": "«¡Solo soy un Caballero Estelar de paso!». Versión heroica de Billy Kid tras unirse al programa Starlight: el androide justiciero de los Gazmoños hecho Disruptivo Físico, que convierte sus PV máx. en Fuerza bruta y cuyo daño bruto ignora la DEF enemiga.",
    "img": "../assets/zzz/Agent_Starlight_-_Billy_Kid_Portrait-e9a13e0e.webp"
  },
  "pyrois": {
    "nombreCompleto": "Pyrois",
    "faccion": "Faetón",
    "desc": "Ente etéreo y avatar de combate de Faetón en Roscaelifer, con forma de jinete llameante. Primer agente de rango especial «I», gratuito al avanzar la historia de la versión 3.0 junto a su motor Sol exuvia; atacante Etéreo que encadena varias definitivas.",
    "img": "../assets/zzz/Agent_Pyrois_Portrait-e7b38e9f.webp"
  },
  "velina-airgid": {
    "nombreCompleto": "Velina Airgid",
    "faccion": "Departamento de Planificación Exterior",
    "desc": "Directora administrativa del Departamento de Planificación Exterior de Roscaelifer y tu anfitriona en la ciudad. Elegante y de origen desconocido, es la primera agente de atributo Aéreo (Viento): anómala que invoca ciclones (Vórtice) y aporta muchísimo aturdimiento.",
    "img": "../assets/zzz/Agent_Velina_Airgid_Portrait-670e28e8.webp"
  },
  "norma-hollowell": {
    "nombreCompleto": "Norma Hollowell",
    "faccion": "Departamento de Planificación Exterior",
    "desc": "Técnica jefa del Departamento de Planificación Exterior de Roscaelifer, prodigio excéntrica de la Academia Aurelia obsesionada con los bangbús. Aturdidora Ígnea fuera de campo que despliega torretas Ehn Na, misiles y su sombrero de copa acompañante.",
    "img": "../assets/zzz/Agent_Norma_Hollowell_Portrait-d66d86d3.webp"
  },
  "claret-flint": {
    "nombreCompleto": "Claret Flint",
    "faccion": "Taller Flint",
    "rol": "Directora administrativa · jefa de la familia Flint",
    "desc": "Actual cabeza de la familia Flint, dueña del Taller Flint y legendaria forjadora de alealumen (Porcelloy), la mayor acreedora de Roscaelifer. Primera agente de la especialidad Armero, estrenada en la 3.2: atacante Eléctrica cuyo daño de Filo escala con la DEF, acumula Gash con su hacha de sangre y lo consume para provocar Maim.",
    "img": "../assets/zzz/Agent_Claret_Flint_Portrait-8844f752.webp"
  },
  "roxy-ifrita-pryce": {
    "nombreCompleto": "Roxy Ifrita Pryce",
    "faccion": "Taller Flint",
    "rol": "Asistente suprema de Claret",
    "desc": "La asistente «que vale por diez» de Claret Flint: meticulosa, de origen desconocido y con iniciales R.I.P. Aturdidora de atributo Aéreo (Viento) de la 3.2 (fase 2): genera tornados y Ojos del huracán con su martillo, purifica la Contaminación y reparte Daño crít al equipo según su propia Prob. crít.",
    "img": "../assets/zzz/Agent_Roxy_Ifrita_Pryce_Portrait-d87d8fe7.webp"
  }
};
