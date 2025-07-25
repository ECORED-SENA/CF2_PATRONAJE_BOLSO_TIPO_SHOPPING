export default {
  global: {
    Name:
      'Técnicas de patronaje y elaboración de moldes para bolsos tipo <em>shopping</em>',
    Description:
      'El componente formativo desarrolla habilidades para diseñar y construir patrones de bolsos tipo <em><em>shopping</em></em>, aplicando técnicas de patronaje con precisión. Incluye el uso de herramientas específicas, análisis de simetría, métodos de construcción desde distintas partes del bolso y verificación mediante maqueta. Se enfoca en asegurar funcionalidad, ajuste técnico, estética y calidad del producto final.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas utilizadas en el proceso de patronaje',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones, conceptos y tipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejes de simetría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elaborar patrones para bolso tipo <em>shopping</em> ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Patronaje bolso <em>shopping</em> con construcción pinza a 90°',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Patronaje bolso <em>shopping</em> con construcción a partir del frontal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Patronaje bolso <em>shopping</em> con construcción a partir del fuelle',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Patronaje bolso <em>shopping</em> con construcción a partir de la base',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Elaboración de la maqueta de comprobación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/XXXXXXXX_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Construcción Molde patrón Bolso desde la base',
      referencia:
        'Bolso con base elaboración del molde base. (2020). [Vídeo]. Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Video',
      link: 'https://youtu.be/V7tnilpvjtQ',
    },
    {
      tema: 'Construcción Molde patrón bolso tipo pinza',
      referencia:
        'Bolso tipo pinza. (2020). [Vídeo]. Ecosistema de Recursos Educativos Digitales SENA.',
      tipo: 'Video',
      link: 'https://youtu.be/Tyae0skn6E0',
    },
  ],
  glosario: [
    {
      termino: 'Asa',
      significado:
        'elemento alargado, generalmente de tela, cuero o material sintético, que permite llevar el bolso en la mano o sobre el hombro.',
    },
    {
      termino: 'Base',
      significado:
        'parte inferior del bolso sobre la que se construye el resto de las piezas. Su forma y tamaño determinan la capacidad y estabilidad del bolso.',
    },
    {
      termino: 'Boca',
      significado:
        'abertura superior del bolso por donde se accede al interior. Puede ser abierta, con cierre o cremallera.',
    },
    {
      termino: 'Bolso <em>shopping</em>',
      significado:
        'bolso grande, de forma rectangular o cuadrada, con asas largas y parte superior abierta o con cremallera. Está diseñado para llevar muchas cosas y es ideal para el uso diario, compras o trabajo.',
    },
    {
      termino: 'Espaldar',
      significado: 'parte trasera del bolso, opuesta al frontal.',
    },
    {
      termino: 'Forro',
      significado:
        'capa interna que recubre el interior del bolso, aportando acabado y protección a las costuras internas.',
    },
    {
      termino: 'Frontal',
      significado:
        'parte delantera del bolso, visible desde el exterior y generalmente la más decorativa.',
    },
    {
      termino: 'Fuelle',
      significado:
        'pieza lateral o intermedia que proporciona profundidad y volumen al bolso, uniendo el frontal con el espaldar y la base.',
    },
    {
      termino: 'Margen de costura (aumento)',
      significado:
        'espacio adicional añadido al contorno de cada pieza del patrón para permitir la costura y el doblado. Suele variar entre 7 y 10 mm según la función.',
    },
    {
      termino: 'Molde o patrón',
      significado:
        'plantilla en papel, cartulina o material rígido que sirve de guía para cortar las piezas del bolso con las dimensiones y formas correctas.',
    },
    {
      termino: 'Organizador',
      significado:
        'compartimento o bolsillo interno diseñado para ordenar objetos pequeños dentro del bolso.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso de diseño y elaboración de los moldes o patrones que servirán para cortar y confeccionar el bolso.',
    },
    {
      termino: 'Prueba o maqueta',
      significado:
        'ensamblaje preliminar del bolso en un material económico para verificar el ajuste, proporciones y funcionalidad antes de la confección final.',
    },
    {
      termino: 'Simetría',
      significado:
        'técnica de diseño que asegura que ambas mitades del molde o pieza sean idénticas, garantizando equilibrio y precisión en el bolso terminado.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia:
        'Colombia. Ministerio de Comercio, Industria y Turismo, & Artesanías de Colombia. (2020). Técnica del oficio del cuero. Artesanías de Colombia. ',
      link: 'https://repositorio.artesaniasdecolombia.com.co/handle/001/6336',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos: El poder de un accesorio. Konemann.',
      link: '',
    },
    {
      referencia:
        'Marulanda, G. (2007). Cartilla de marroquinería: Modelaje de bolsos. Imprenta Nacional. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elkin Darío Fontecha Pardo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
