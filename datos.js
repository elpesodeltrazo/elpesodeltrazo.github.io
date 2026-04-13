// ============================================================
// DATOS.JS — EL PESO DEL TRAZO
// Fuente única de verdad. Cambia aquí y se actualiza en toda la web.
// ============================================================

const RESENAS = [
  {
    id: 'arrugas',
    titulo: 'Arrugas',
    autor: 'Paco Roca',
    editorial: 'Astiberri',
    año: 2007,
    pais: 'España',
    pais_key: 'españa',
    imagen: 'img/arrugas.jpg',
    imagen_posicion: 'center 45%',
    vinetas: [
      'img/arrugas-vineta.jpg',
      // 'img/arrugas-vineta2.jpg'
    ],
  
    te_gustara: 'Si te interesan las historias sobre memoria, vejez y dignidad. Te llegará especialmente si tienes relación cercana con la enfermedad.',
    extracto: 'Una de las miradas más lúcidas sobre el Alzheimer en el cómic español. Paco Roca desarrolla magistralmente en sus páginas una historia sobre el olvido y la identidad.',
    premio: 'Premio Nacional del Cómic 2008',
    goodreads: '4.32',
    metricas: { guion: 4, dibujo: 4, lenguaje: 5, originalidad: 5, impacto: 4 },
    cuerpo: `<p> Hay cómics que te dejan un brochazo en el corazón despues de leerlos, y años despues, los recuerdas por esa sensación que dejaron. <em>Arrugas</em> es uno de ellos. Paco Roca construye con un trazo aparentemente sencillo, casi naif, una de las miradas más lúcidas y compasivas sobre el Alzheimer que ha dado el cómic español. </p>
    <p>La historia arranca con Emilio, un antiguo banquero que comienza a perder la memoria. Su hijo lo ingresa en una residencia de mayores. Lo que podría ser un melodrama sobre la vejez se convierte en una reflexión sobre la dignidad, la identidad y lo que queda de nosotros cuando el tiempo nos erosiona.</p>
    <blockquote><p>Dicen que cuando te miras en el espejo y empiezas a parecerte a tu padre es que ya te estás haciendo mayor.</p></blockquote>
    <p>Miguel, el compañero de habitación, funciona como contrapunto perfecto: lúcido, pícaro, superviviente, lo cual acrecienta nuestra empatia por Emilio.</p>
    <p><em>Arrugas</em> ganó el Premio Nacional del Cómic en 2008 y fue adaptada al cine. Arrugas fue el comic que dio a conocer a nuestro dibujante más reconocido y que sería la antesala de una gran carrera.</p>`
  },
  {
    id: 'persepolis',
    titulo: 'Persépolis',
    autor: 'Marjane Satrapi',
    editorial: 'Reservoir Books',
    año: 2000,
    pais: 'Francia / Irán',
    pais_key: 'francia',
    imagen: 'img/persepolis-portada.jpg',
    imagen_posicion: 'center 60%',
    vinetas: [
      'img/Sartrapi- Persepolis.jpg',
      // 'img/persepolis-vineta2.jpg'
    ],
    etiquetas: ['indispensable', 'para_regalar'],
    te_gustara: 'Si quieres saber más sobre la Revolución islámica de 1979 en Irán. También si te apasionan las historias intensas, conocer conflictos internacionales con un maravilloso humor que nos hace disfrutar la narración a pesar de la gravedad de lo acontecido.',
    extracto: 'Un desgarrador relato de la evolución de Irán. Satrapi realiza una autobiografía donde explica la evolución de su país, que nos lleva a plantearnos temas como la identidad, el progresismo y la fragilidad de los derechos obtenidos con el tiempo.',
    premio: 'Prix du Lion Fnac 2000 · Premio autor revelación Angoulême 2001',
    goodreads: '4.32',
    metricas: { guion: 5, dibujo: 3, lenguaje: 4, originalidad: 5, impacto: 5 },
    cuerpo: `<em>Persépolis</em> es una de las grandes obras del cómic mundial. La obra es un maravilloso recorrido sobre la Revolución islámica en Irán, a traves de los ojos de Marjane Satrapi. Un relato crudo, pero con cierto humor, que nos presenta el derrocamiento del Sha y la imposición de la dictadura Islámica. <em>Satrapi</em> elige el uso del blanco y negro como arma política para ejemplificar la realidad su pais. No existen colores. Ni siquiera el color gris. O eres parte del sistema, o eres parte del enemigo.</p>
    <p>Lo que convierte <em>Persépolis</em> en una obra mayor no es solo el testimonio histórico sino la mirada de la niña que lo cuenta. Satrapi nunca sentencia desde fuera; todo lo vive desde dentro, con la confusión, el humor y las contradicciones propias de su edad y de su evolución personal.</p>
    <blockquote><p> En la vida, vas a conocer a muchos imbéciles. Si te hacen daño, piensa que es debido a su estupidez. Así evitarás responder a su crueldad. Y es que no hay nada peor en el mundo que el resentimiento y la venganza... conserva siempre la dignidad y la integridad.   </p></blockquote>
    <p> Podríamos dividir el cómic en tres partes diferenciadas. En una primera, <em>Satrapi</em> muestra su infancia y su percepción en medio de la revolución. En la segunda parte, la protagonista, por recomendacion de sus padres, es trasladada a Austria donde estudia sus estudios medios y se enfrenta sola al reto de aprender a ser mujer. Posteriormente, vuelve a Irán donde encontrará un pais completamente diferente al que ella recordaba cuando era niña. </p> 
    <p>El libro demuestra que el cómic puede ser el medio más honesto para contar la historia de un país. No porque simplifique, sino porque personaliza: detrás de cada viñeta hay un cuerpo, una cara, un miedo concreto.</p>
     <em>Persépolis</em>  fue la obra que posicionó a Marjane Satrapi como una de las grandes dibujantes de cómics a nivel mundial. Ganó diversos premios, entre otros el Premio autor revelación de Angoulême 2001, el Premio al mejor guion de Angoulême 2002 o el premio Príncipe de Asturias de 2024.`
  },
 
  {
    id: 'almanaque',
    titulo: 'El almanaque de mi padre',
    autor: 'Jiro Taniguchi',
    editorial: 'Planeta Cómic',
    año: 1994,
    pais: 'Japón',
    pais_key: 'japon',
    imagen: 'img/Portada-almanaque.jpg',
    imagen_posicion: 'center 30%',
    vinetas: [
       'img/El-almanaque-taniguchi-escena.jpg',
      // 'img/almanaque-vineta2.jpg'
    ],
    etiquetas: ['indispensable'],
    te_gustara: 'Si valoras el silencio y la contemplación en la narrativa. Si te interesan las relaciones entre padres e hijos y lo que significa volver a los orígenes.',
    extracto: 'El tiempo como materia narrativa. La memoria familiar convertida en meditación sobre lo que heredamos y lo que dejamos atrás, a veces sin darnos cuenta.',
    premio: 'Premio Manga Shōgakukan 1994',
    goodreads: '4.36',
    metricas: { guion: 5, dibujo: 5, lenguaje: 4, originalidad: 4, impacto: 5 },
    cuerpo: `<p> Jiro Taniguchi es el maestro entre maestros. Un artista de los que quitan el aliento — y cuyas páginas, años después, siguen sintiéndose como casa. En <em>El almanaque de mi padre</em>, un hombre regresa a su ciudad natal para el funeral de su padre, con quién tuvo una relación distante. La vuelta a casa supone una vuelta a sus origenes, donde aprende quien era su padre, y los motivos que les hicieron distanciarse. </p>
    <p>Taniguchi convierte ese recorrido en una meditación sobre la paternidad, la herencia y la distancia entre generaciones, donde lo que no se habla, queda en el olvido.</p>
    <blockquote><p> Mi tierra estaba allí en todo momento, en cualquier situación, sin cambiar. Y se me ocurre que uno no vuelve a su tierra sino que es la propia tierra la que, un día, regresa a los corazones de cada uno de nosotros.     </p></blockquote>
    <p> El dibujo de Taniguchi alcanza la perfección, inspirando melancolía en cada viñeta; en cada mirada, cada tejado, cada árbol sin hojas. Toda escena es un viaje a la memoria. Lo que hace único a esta novela gráfica (y en general la obra de Taniguchi) es su capacidad para convertir la cotidianidad en una historia digna de ser contada. No hay épica aquí, no hay giros dramáticos. Solo la verdad de la propia vida.</p>`
  },

   {
    id: 'surcos',
    titulo: 'Los surcos del azar',
    autor: 'Paco Roca',
    editorial: 'Astiberri',
    año: 2013,
    pais: 'España',
    pais_key: 'españa',
    imagen: 'https://covers.openlibrary.org/b/isbn/9788467920260-L.jpg',
    imagen_posicion: 'center center',
    vinetas: [
      // 'img/surcos-vineta1.jpg',
      // 'img/surcos-vineta2.jpg'
    ],
    etiquetas: ['indispensable'],
    te_gustara: 'Si te interesa la memoria histórica española y la Guerra Civil. Si disfrutas de narrativas que mezclan pasado y presente con precisión periodística.',
    extracto: 'Thriller, road movie y elegía a la vez. Roca en su momento más ambicioso y necesario.',
    premio: 'Premio Nacional del Cómic 2014',
    goodreads: '4.38',
    metricas: { guion: 5, dibujo: 4, lenguaje: 5, originalidad: 5, impacto: 5 },
    cuerpo: `<p>Existe una generación de españoles que liberó París y que España olvidó. Paco Roca fue a buscarlos. <em>Los surcos del azar</em> nace de un viaje real para entrevistar a los supervivientes de La Nueve, la compañía de republicanos españoles que entró primera en París en agosto de 1944.</p>
    <p>Roca construye un artefacto narrativo preciso: un periodista que entrevista a un anciano, y dentro de esa entrevista, la guerra, el exilio, la resistencia. La estructura en capas permite que pasado y presente dialoguen sin que ninguno aplaste al otro.</p>
    <blockquote><p>El dibujo de Roca en este libro es más contenido que en <em>Arrugas</em>, más documental. Hay una deliberada austeridad que conviene a la historia: no se puede ser exuberante cuando se habla de los muertos.</p></blockquote>
    <p>Pero <em>Los surcos del azar</em> es también una reflexión sobre lo que significa contar una historia, sobre quién tiene derecho a recordar y cómo se transmite el trauma de generación en generación.</p>`
  },
  
  {
    id: 'maus',
    titulo: 'Maus',
    autor: 'Art Spiegelman',
    editorial: 'Planeta Cómic',
    año: 1991,
    pais: 'EEUU',
    pais_key: 'eeuu',
    imagen: 'https://covers.openlibrary.org/b/isbn/9788478338443-L.jpg',
    imagen_posicion: 'center center',
    vinetas: [
      // 'img/maus-vineta1.jpg',
      // 'img/maus-vineta2.jpg'
    ],
    etiquetas: ['indispensable'],
    te_gustara: 'Si quieres entender qué puede hacer el cómic que ningún otro medio puede. Si te interesa el Holocausto contado desde la intimidad familiar.',
    extracto: 'La obra que cambió la percepción del cómic para siempre. Más humana que cualquier tratado histórico.',
    premio: 'Premio Pulitzer 1992',
    goodreads: '4.55',
    metricas: { guion: 5, dibujo: 4, lenguaje: 5, originalidad: 5, impacto: 5 },
    cuerpo: `<p>Art Spiegelman eligió representar a los judíos como ratones y a los nazis como gatos. Esa decisión, tomada décadas antes de que el libro existiera, es la que hace de <em>Maus</em> algo único en la historia de la literatura.</p>
    <p>Art Spiegelman lleva años entrevistando a su padre Vladek sobre su supervivencia al Holocausto. Esas entrevistas forman la columna vertebral del libro, pero <em>Maus</em> es también la historia de la relación entre padre e hijo.</p>
    <blockquote><p>La decisión de representar a los judíos como ratones y a los nazis como gatos no es un capricho formal. Es una manera de hablar sobre cómo los perpetradores deshumanizaron a sus víctimas, apropiándose de esa lógica para subvertirla.</p></blockquote>
    <p>Treinta años después, <em>Maus</em> sigue siendo la obra que más claramente demuestra por qué el cómic importa. No a pesar de ser cómic, sino precisamente porque lo es.</p>`
  },
  {
    id: 'blacksad',
    titulo: 'Blacksad',
    autor: 'Díaz Canales / Guarnido',
    editorial: 'Norma',
    año: 2000,
    pais: 'España',
    pais_key: 'españa',
    imagen: 'https://covers.openlibrary.org/b/isbn/9788498147070-L.jpg',
    vinetas: [
      // 'img/blacksad-vineta1.jpg',
      // 'img/blacksad-vineta2.jpg'
    ],
    etiquetas: ['para_regalar'],
    te_gustara: 'Si eres fan del género negro y quieres ver hasta dónde puede llegar el dibujo en un cómic. Un regalo perfecto para cualquier amante del cine de los años 50.',
    extracto: 'Noir de animales, América de los 50. Guarnido es uno de los mejores dibujantes de su generación.',
    premio: 'Premio Eisner 2006',
    goodreads: '4.20',
    metricas: { guion: 4, dibujo: 5, lenguaje: 4, originalidad: 4, impacto: 4 },
    cuerpo: `<p>Hay cómics que son, ante todo, un acontecimiento visual. <em>Blacksad</em> es uno de ellos. Juanjo Guarnido volcó en estas páginas todo lo que sabe sobre el movimiento, la expresión y la luz. El resultado es posiblemente el trabajo de ilustración más impresionante del cómic español contemporáneo.</p>
    <p>La historia es noir clásico: John Blacksad, detective felino, investiga crímenes en una América de los años 50 habitada por animales. Díaz Canales escribe con respeto al género sin obsesionarse con el pastiche.</p>
    <blockquote><p>La elección de animales no es arbitraria. Cada especie dice algo del personaje: los depredadores en el poder, las presas como víctimas, los carroñeros como oportunistas.</p></blockquote>
    <p>Si hay un reparo, es que el guion a veces queda eclipsado por el dibujo. Uno mira las páginas y se olvida de la historia. Hay peores maneras de perder el hilo.</p>`
  }
];

const ENSAYOS = [
  {
    id: 'taniguchi-silencio',
    titulo: 'El silencio entre viñetas: Taniguchi y la narrativa del espacio vacío',
    subtitulo: 'Cómo el maestro japonés convirtió los momentos de pausa en el verdadero motor de sus historias.',
    tag: 'Análisis de autor',
    fecha: 'Marzo 2025',
    cuerpo: `<p>En el cómic occidental, la viñeta es el elemento fundamental de la narración. En el cómic de Jiro Taniguchi, lo fundamental es lo que ocurre entre las viñetas. Esta distinción parece sutil pero lo cambia todo.</p>
    <p>Scott McCloud llamó a ese espacio "el canalón" y describió el proceso por el cual el lector rellena mentalmente la acción omitida como "clausura". Taniguchi llevó ese concepto más lejos que ningún otro autor: en sus mejores trabajos, el canalón no es donde ocurre la acción, sino donde ocurre la emoción.</p>
    <blockquote><p>En <em>El caminante</em>, el protagonista no hace nada. Pasea. Se sienta en un banco. Mira un árbol. Y sin embargo cada página tiene una densidad emocional que muchos autores no alcanzan en libros enteros.</p></blockquote>
    <p>La respuesta está en la selección. Taniguchi elige con precisión quirúrgica qué momento merece una viñeta y cuál no. El silencio en Taniguchi no es ausencia de historia. Es la historia misma contada desde otro ángulo.</p>`
  },
  {
    id: 'comic-literatura-siglo-xxi',
    titulo: 'Por qué el cómic de autor es la gran literatura del siglo XXI',
    subtitulo: 'Un manifiesto. La imagen dibujada hace lo que la prosa no puede: narrar desde dentro de la percepción.',
    tag: 'Manifiesto',
    fecha: 'Febrero 2025',
    cuerpo: `<p>La novela lleva dos siglos siendo el formato dominante de la literatura seria. Pero tiene un problema estructural que ningún recurso retórico puede resolver del todo: la novela describe. El cómic muestra.</p>
    <p>Esta distinción no es trivial. Cuando una novela describe una cara, interpone entre el lector y esa cara el lenguaje. Cuando un cómic dibuja esa cara, la relación es directa: el lector ve.</p>
    <blockquote><p>El cómic de autor ha descubierto algo que la novela no puede hacer: narrar desde dentro del gesto, del espacio, de la percepción visual. Eso no lo hace superior a la novela. Lo hace diferente, con posibilidades que la novela no tiene.</p></blockquote>
    <p>El siglo XXI ha producido una generación de autores que han tomado en serio esa diferencia. No imitan a la novela. Trabajan con lo que solo el cómic puede hacer: la tensión entre imagen y texto, el tiempo detenido en la viñeta.</p>`
  },
  {
    id: 'astiberri-catalogo',
    titulo: 'Astiberri y la construcción de un catálogo con criterio',
    subtitulo: 'La editorial vasca que cambió el panorama del cómic adulto en España. Un recorrido por sus veinte años.',
    tag: 'Industria',
    fecha: 'Enero 2025',
    cuerpo: `<p>En el año 2000, el mercado español del cómic adulto era un paisaje desolado. Las grandes editoriales apostaban por superhéroes y manga; el cómic europeo de autor llegaba en ediciones irregulares. Astiberri cambió eso.</p>
    <p>La editorial bilbaína nació con una apuesta clara: publicar cómic de autor con la misma seriedad con que una editorial literaria publica novela. Buenas traducciones, diseño cuidado, distribución en librerías generalistas.</p>
    <blockquote><p>El catálogo de Astiberri es hoy una de las mejores colecciones de cómic adulto del mundo en castellano. Incluye a Paco Roca, Alfonso Zapico, Marjane Satrapi, Guy Delisle, Joe Sacco.</p></blockquote>
    <p>Lo que distingue a Astiberri de otras editoriales no es solo el gusto sino la coherencia. Cada título que publican dice algo sobre el tipo de lector al que se dirigen.</p>`
  },
  {
    id: 'linea-clara',
    titulo: 'La línea clara no es solo un estilo: es una ética narrativa',
    subtitulo: 'De Hergé a Joost Swarte: lo que la escuela belga enseña sobre la honestidad del dibujo.',
    tag: 'Historia del cómic',
    fecha: 'Diciembre 2024',
    cuerpo: `<p>La línea clara es un estilo gráfico asociado a la escuela belga: trazo uniforme, ausencia de sombras rayadas, colores planos y saturados, perspectivas limpias. Hergé la definió con Tintín; Joost Swarte le dio nombre en los años 70.</p>
    <p>Pero la línea clara es más que una estética. Es una postura ética ante el lector.</p>
    <blockquote><p>Un dibujo de línea clara no esconde nada. Cada elemento está igualmente definido. No hay jerarquía visual impuesta por la técnica: el fondo importa tanto como el personaje.</p></blockquote>
    <p>Esta democracia visual tiene consecuencias narrativas profundas. El lector debe distribuir su atención, debe construir activamente el sentido. Hay algo profundamente honesto en eso.</p>`
  },
  {
    id: 'satrapi-spiegelman',
    titulo: 'Satrapi y Spiegelman: dos formas de hacer memoria con viñetas',
    subtitulo: 'Persépolis y Maus comparten la autobiografía y el trauma colectivo pero revelan dos concepciones del cómic como testimonio.',
    tag: 'Comparativa',
    fecha: 'Noviembre 2024',
    cuerpo: `<p>Dos libros, dos traumas históricos, dos modos radicalmente distintos de usar el cómic como memoria. <em>Maus</em> y <em>Persépolis</em> comparten un territorio: la autobiografía como forma de hacer historia.</p>
    <p>Spiegelman tardó trece años en completar <em>Maus</em>. Satrapi escribió <em>Persépolis</em> en dos. Esa diferencia de tempo dice algo sobre la relación de cada uno con su material. Spiegelman lleva el Holocausto en el cuerpo. Satrapi tiene distancia, y eso le permite algo imposible en Spiegelman: el humor.</p>
    <blockquote><p>La ironía de Satrapi no es frivolidad. Es una estrategia de supervivencia: si ríes de lo que te aplasta, no te aplasta del todo. Spiegelman no puede reírse. La sombra es demasiado larga.</p></blockquote>
    <p>Lo que ambos comparten es la convicción de que el testimonio personal es la única forma honesta de hacer historia.</p>`
  },
  {
    id: 'moebius-color',
    titulo: 'El color como narrador: Moebius y la paleta como personaje',
    subtitulo: 'En los mejores trabajos de Moebius, el color no decora: informa, guía y anticipa.',
    tag: 'Análisis formal',
    fecha: 'Octubre 2024',
    cuerpo: `<p>Jean Giraud firmó como Moebius sus trabajos de ciencia ficción y fantasía. En ese mundo, el color era siempre un personaje más.</p>
    <p>En <em>El Incal</em>, la paleta cambia según el estado emocional de la historia. Los momentos de amenaza se vuelven fríos, azulados; los de revelación, casi blancos de luz.</p>
    <blockquote><p>Lo que distingue a Moebius es que el color nunca es decorativo. Cada elección cromática tiene una función narrativa: situar emocionalmente al lector antes de que el texto lo haga.</p></blockquote>
    <p>Esto es, en última instancia, lo que separa el cómic de autor del industrial: todos los elementos trabajan en la misma dirección. No hay relleno. Todo significa.</p>`
  }
];
