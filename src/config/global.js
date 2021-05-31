export default {
  global: {
    componenteFormativo:
      'MySQL Workbench como herramienta visual de diseño y gestión de bases de datos MySQL',
    descripcionCurso:
      'En la actualidad, un gran porcentaje de software y aplicativos que se encuentran en el mercado, hacen uso de bases de datos con MySQL. Además, es de vital importancia contar con una gestión eficiente de la gran cantidad de información que se genera diariamente a través de múltiples dispositivos, pues las bases de datos bien gestionadas marcan una ventaja competitiva entre las diferentes empresas.</br></br>Por esto es importante la utilización de herramientas visuales que potencien el trabajo con las bases de datos relacionales MySQL; para este ejercicio se utilizará Workbench debido a su facilidad de uso, alta demanda y empleo en la gestión y administración de las bases de datos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Software necesario y su instalación de MySQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Software necesario para el diseño y gestión de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '2.1',
            titulo: 'MySQL Workbench',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características y funcionalidades',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //nombreRuta: 'actividad',
      //icono: 'far fa-question-circle',
      //titulo: 'Actividad didáctica',
      //desarrolloContenidos: true,
      //},
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático - Instructor',
        centro: 'Centro de Teleinformática y Producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Carlos Julian Ramirez Benitez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Carlos Eduardo Garavito ',
          'Carolina Tamayo',
          'Gilberto Junior Rodríguez Rodríguez',
          'Ludwyng Corzo',
          'Víctor Cárdenas',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción Audiovisual',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisora de contenidos',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.',
      link: '',
    },
    {
      referencia:
        'MySQL AB. (2001). MySQL. Sun Microsystems Oracle Corporation.',
      link: '',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia: 'MySQL. (s. f.). MySQL Workbench tutorial. [Video]. YouTube',
      link: 'https://youtu.be/X_umYKqKaF0',
    },
    {
      referencia: 'Oracle Corporation MySQL. (2020). MySQL Workbench',
      link: 'https://dev.mysql.com/doc/workbench/en/',
    },
    {
      referencia:
        'Pérez, L., C. (2004). MYSQL para Windows y Linux. Alfaomega.',
    },
    {
      referencia:
        'Thibaud, C. (2006). MySQL 5: instalación, implementación, administración, programación. Ediciones ENI.',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'colección de datos estructurados, organizados, sin duplicidad y dispuestos con el objetivo de proporcionar información a los usuarios de manera centralizada y permitiendo desarrollar sobre ellas transacciones (Emagíster, 2020).',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos procesados y que tienen un significado (relevancia, propósito y contexto), y que por lo tanto son de utilidad para quién debe tomar decisiones (Emagíster, 2020).',
    },
    {
      termino: 'MySQL',
      significado:
        'es un sistema de gestión de base de datos relacional (RDBMS) de código abierto, basado en lenguaje de consulta estructurado (SQL) (EduJava, 2018).',
    },
    {
      termino: 'SGDB',
      significado:
        'sistema de gestión de base de datos o DGBA (Data Base Management System) es un conjunto de programas no visibles que administran y gestionan la información que contiene una base de datos Los gestores de base de datos o gestores de datos hacen posible administrar todo acceso a la base de datos ya que tienen el objetivo de servir de interfaz entre ésta, el usuario y las aplicaciones (GitHub, 2017).',
    },
    {
      termino: 'Workbench',
      significado:
        'herramienta visual unificada para arquitectos, desarrolladores y administradores de bases de datos.',
    },
  ],
  complementario: [
    {
      texto: 'MySQL Workbench Tutorial',
      tipo: 'Video',
      link: 'https://youtu.be/X_umYKqKaF0',
    },
  ],
}
