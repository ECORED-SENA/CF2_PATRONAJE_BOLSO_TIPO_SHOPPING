<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Patrones, conceptos y tipos

    .fondo___color_1
      .px-5
    
        .row.align-items-center.m-0.mb-5
          .col-xl.style___box_2.ajuste___box_1(data-aos="fade-right")
            p.mb-0 Una correcta elaboración de moldes garantiza que todas las piezas encajen con precisión, facilitando el proceso de confección, reduciendo errores y asegurando un alto estándar de calidad. Además, los moldes bien diseñados permiten optimizar el uso del material, mejorar la productividad y mantener la coherencia en series de producción.
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img2.png', alt='' style="max-width: 295px").m-auto
          .col-xl.espacio___movil_4
            figure.mb-3.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img3.svg', alt='' style="max-width: 76px")
            p.mb-0 El patronista debe tener en cuenta factores como la tolerancia de costura, el tipo de acabado (doblado, al corte, con ribete, etc.) y el comportamiento del material (rigidez, elasticidad, espesor) al momento de diseñar cada molde.
    
    
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").espacio___movil_1
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
          .col
            h3 Definición y función de los patrones en marroquinería
        
        p.mb-5.espacio___movil_1 A continuación, se presenta un pódcast que explora la definición y la función de los patrones en marroquinería, destacando su importancia en el diseño, corte y ensamblaje de bolsos y accesorios a través de distintos tipos de moldes utilizados en cada etapa del proceso de confección. 

        .row.align-items-center.m-0.espacio___movil_1
          .col-xl
            .row.align-items-center.style___box_3(data-aos="zoom-in")
              .col-auto
                figure.d-none.d-xl-block(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img146.svg" style="max-width: 220px").m-auto
              .col
                h4.mb-4 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Patrones en marroquinería"
                  :audio="require('@/assets/componentes/audios/Podcast_CF2_Patronaje_bolso_tipo_Shopping.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img147.png" style="max-width: 400px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
