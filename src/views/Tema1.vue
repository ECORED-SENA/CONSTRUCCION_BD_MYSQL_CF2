<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Software necesario y su instalación de MySQL

    figure.my-5
      img(src="@/assets/tema_1/img_1.svg", alt="alt", style="width:900px; display:block; margin:0 auto").class      

    .hr_blank

    #t_1_1.titulo-segundo.mb-5
      .h4 1.1 Proceso de descarga de MySQL Community

    .crd.crd--gray.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0      
          img(src="@/assets/tema_2/coding.svg", alt="alt", style="width:120px")         
        .col-12.col-lg
          p(style="color:white;").mb-4 Lo primero es descargar el servidor de base de datos MySQL, para este caso se utilizará la versión de comunidad la cual se puede descargar del link oficial a través de cualquier navegador de internet y escribiendo la siguiente URL: 
          .row
            .col-auto.mb-4
              a.anexo(href="https://www.mysql.com/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p MySQL - The world´s most popular open source database
          .row
            .col-auto
              a.anexo(href="https://profile.oracle.com/myprofile/account/create-account.jspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Crear cuenta de acceso a Oracle    

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aAk84iUplHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Video en producción       

    .hr_blank

    .titulo-segundo
      #t_1_2.h4 1.2 Proceso de instalación de MySQL Server Community

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m-h80fyUIiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Video en producción 

    
  
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
