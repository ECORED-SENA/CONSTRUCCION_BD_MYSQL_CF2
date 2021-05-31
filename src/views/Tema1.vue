<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Descarga e instalación MySQL Community Server

    figure.my-5
      img(src="@/assets/tema_1/img_1.svg", alt="alt", style="width:900px; display:block; margin:0 auto").class      

    .hr_blank

    p.mb-5 Un requisito indispensable para que puedas realizar trabajos y gestión de bases de datos SQL con MySQL Workbench es tener instalado un servidor de base de datos o en su defecto, tener acceso a un servidor compatible con MySQL o motores similares como MariaDB. Es por eso que para este componente hemos dispuesto las instrucciones y sugerido la herramienta MySQL Community Server que hará las veces de servidor.
      br
      br
      | A continuación, encontrarás las instrucciones, enlaces de descarga y de creación de perfiles requeridos para hacer uso de este software.

    .row.align-items-center.mb-5
      .col-auto
        span.roundNumber 1
      .col
        h5.mb-0 Descarga MySQL Community Server     

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aAk84iUplHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

    .crd.crd--gray.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0      
          img(src="@/assets/tema_2/coding.svg", alt="alt", style="width:120px")         
        .col-12.col-lg
          p(style="color:white;").mb-4 Da clic en el siguiente enlace y sigue atentamente los pasos para su instalación. 
          .row
            .col-auto.mb-4
              a.anexo(href="https://dev.mysql.com/downloads/mysql/ " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p MySQL - The world´s most popular open source database
          p(style="color:white; font-size:10pt;") Posiblemente requieras una cuenta ORACLE, en ese caso dirígete al paso 2

    .row.align-items-center.mb-5
      .col-auto
        span.roundNumber 2
      .col
        h5.mb-0 Crea una cuenta de acceso ORACLE    

    .crd.crd--gray.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0      
          img(src="@/assets/tema_2/coding.svg", alt="alt", style="width:120px")         
        .col-12.col-lg
          p(style="color:white;").mb-4 Da click en el siguiente enlace y sigue atentamente las instrucciones.
          .row
            .col-auto.mb-4
              a.anexo(href="https://profile.oracle.com/myprofile/account/create-account.jspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Crear cuenta de acceso a ORACLE   

    
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
