<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color
      .px-5
        .row.align-items-center.mb-5
          .col-xl
            .row.align-items-center.mb-3.style___box_1.m-0(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img1.jpg', alt='' style="max-width: 400px").m-auto
              .col-xl
                p.mb-0 El desarrollo de productos en marroquinería, como los bolsos tipo <em>shopping</em>, requiere la aplicación de conocimientos técnicos que integran el uso de herramientas, la comprensión de moldes y la correcta elaboración de patrones. Este proceso inicia con el dominio de las herramientas empleadas en el patronaje, fundamentales para lograr trazos precisos, cortes limpios y ajustes estructurales adecuados a cada diseño.
            p.mb-0.espacio___movil_4 El estudio de los moldes, sus conceptos, funciones y tipos, permite comprender su papel como base en la construcción de piezas. Los moldes sirven como guías para la fabricación, asegurando uniformidad y precisión en cada parte del bolso. Su clasificación y correcta aplicación son esenciales para garantizar acabados funcionales y estéticos.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img2.png', alt='' style="max-width: 295px").m-auto
        
        .row.m-0.espacio___movil_1
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 Dentro de este contexto, la elaboración de patrones para el bolso tipo <em>shopping</em> constituye una etapa clave. Este módulo aborda diferentes métodos constructivos: desde la técnica de pinza a 90°, que permite dar volumen con simples pliegues, hasta sistemas de patronaje que parten del frontal, del fuelle o de la base, brindando al aprendiz una visión integral sobre las diversas formas de construir un bolso según su diseño y funcionalidad.
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img4.png', alt='' style="max-width: 295px").m-auto
          .col-xl.espacio___movil_4
            figure.mb-3.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/intro/img5.svg', alt='' style="max-width: 76px")
            p.mb-0 Finalmente, se incorpora la elaboración de una maqueta de comprobación, la cual cumple un papel esencial para verificar el ajuste, la proporción y la viabilidad del diseño antes de su producción definitiva. Esta etapa permite realizar correcciones y validar tanto los moldes como los patrones desarrollados.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
