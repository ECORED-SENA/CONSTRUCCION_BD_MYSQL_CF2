<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Software necesario para el diseño y gestión de bases de datos  

    figure.my-5
      img(src="@/assets/tema_2/img_2_01.svg", alt="alt", style="width:800px; display:block; margin:0 auto").class  

    .hr_blank

    #t_2_1.titulo-segundo.mb-5
      .h4 2.1 MySQL Workbench

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XHS0TSshkjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Software necesario para el diseño y gestión de bases de datos MySQL Workbench

    .crd.crd--gray
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0        
          img(src="@/assets/tema_2/coding.svg", alt="alt", style="width:120px")         
        .col-12.col-lg
          p(style="color:white;").mb-3 Para visualizar esta herramienta y saber de su funcionamiento revise el siguiente video:
          .row
            .col-auto
              a.anexo.mb-4.mb-lg-0(href="https://youtu.be/X_umYKqKaF0" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p MySQL Workbench tutorial

    .hr_blank

    #t_2_2.titulo-segundo
      .h4 2.2 Características y funcionalidades 

    p.mb-5 Algunas de las características más importantes de Workbench son las siguientes:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Diseño").p-4
        .row.justify-content-center.mb-5                     
          .col-auto.mb-5.mb-lg-0
            figure
              img(src="@/assets/tema_2/icon_01.svg", alt="alt", style="width:120px")   
          .col-12.col-lg
            p MySQL Workbench permite a un DBA, desarrollador o arquitecto de datos diseñar, modelar, generar y administrar bases de datos visualmente. Incluye todo lo que un modelador de datos necesita para crear modelos ER complejos, ingeniería directa e inversa, y también ofrece características clave para realizar tareas difíciles de gestión de cambios y documentación que normalmente requieren mucho tiempo y esfuerzo. 

        .figure.mb-5
          img(src="@/assets/tema_2/img_2_2_01.png", alt="alt")

        p.mb-5 En la figura anterior se muestra cómo, desde Workbench, se pueden crear nuevos modelos, lo que equivale a crear una nueva base de datos e ir agregando los objetos requeridos como tablas, atributos, tipos de datos, relaciones, entre otros. 

        .figure
          img(src="@/assets/tema_2/img_2_2_02.png", alt="alt")
          figcaption Ejemplo de modelado de una nueva tabla llamada empleado y los atributos con sus respectivos tipos de datos y propiedades.
          
      div(titulo="Desarrollar").p-4
        .row.justify-content-center.mb-5                     
          .col-auto.mb-5.mb-lg-0
            figure
              img(src="@/assets/tema_2/icon_02.svg", alt="alt", style="width:120px")   
          .col-12.col-lg
            p MySQL Workbench ofrece herramientas visuales para crear, ejecutar y optimizar consultas SQL. El editor de SQL proporciona resaltado de sintaxis de color, autocompletado, reutilización de fragmentos de código SQL e historial de ejecución de SQL. El panel de conexiones de base de datos permite a los desarrolladores administrar fácilmente las conexiones de base de datos estándar, incluido MySQL Fabric. El explorador de objetos proporciona acceso instantáneo al esquema y los objetos de la base de datos. 
        figure
          img(src="@/assets/tema_2/img_2_2_03.png", alt="alt")

      div(titulo="Administrar").p-4
        .row.justify-content-center.mb-5                     
          .col-auto.mb-5.mb-lg-0
            figure
              img(src="@/assets/tema_2/icon_03.svg", alt="alt", style="width:120px")   
          .col-12.col-lg
            p MySQL Workbench proporciona una consola visual para administrar fácilmente los entornos MySQL y obtener una mejor visibilidad de las bases de datos. Los desarrolladores y administradores de bases de datos pueden utilizar las herramientas visuales para configurar servidores, administrar usuarios, realizar copias de seguridad y recuperación, inspeccionar datos de auditoría y ver el estado de la base de datos.
        figure
          img(src="@/assets/tema_2/img_2_2_04.png", alt="alt")

      div(titulo="Panel de rendimiento visual").p-4
        .row.justify-content-center.mb-5                     
          .col-auto.mb-5.mb-lg-0
            figure
              img(src="@/assets/tema_2/icon_04.svg", alt="alt", style="width:120px")   
          .col-12.col-lg
            p MySQL Workbench proporciona un conjunto de herramientas para mejorar el rendimiento de las aplicaciones MySQL. Los administradores de bases de datos pueden ver rápidamente los indicadores clave de rendimiento mediante el panel de rendimiento. Los informes de rendimiento proporcionan una fácil identificación y acceso a puntos de acceso de E / S, declaraciones SQL de alto costo y más. Además, con un (1) clic, los desarrolladores pueden ver dónde optimizar la consulta con el Plan Visual Explain mejorado y fácil de usar.
        figure
          img(src="@/assets/tema_2/img_2_2_05.png", alt="alt")

      div(titulo="Migración de base de datos").p-4
        .row.justify-content-center.mb-5                     
          .col-auto.mb-5.mb-lg-0
            figure
              img(src="@/assets/tema_2/icon_05.svg", alt="alt", style="width:120px")   
          .col-12.col-lg
            p MySQL Workbench ahora proporciona una solución completa y fácil de usar para migrar Microsoft SQL Server, Microsoft Access, Sybase ASE, PostreSQL y otras tablas, objetos y datos RDBMS a MySQL. Los desarrolladores y administradores de bases de datos pueden convertir rápida y fácilmente las aplicaciones existentes para que se ejecuten en MySQL tanto en Windows como en otras plataformas. La migración también admite las versiones anteriores de MySQL a las últimas versiones.
        figure
          img(src="@/assets/tema_2/img_2_2_06.png", alt="alt")
          
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
