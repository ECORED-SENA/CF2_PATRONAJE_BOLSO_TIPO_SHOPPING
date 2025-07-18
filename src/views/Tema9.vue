<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Elaboración de la maqueta de comprobación

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img136.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La maqueta de comprobación es una herramienta fundamental en el proceso de diseño y desarrollo de bolsos tipo <em>shopping</em>, ya que permite verificar la precisión de los moldes y anticipar posibles ajustes antes de la producción final.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Procedimiento técnico

    p.mb-5 El siguiente proceso detalla los pasos necesarios para elaborar una maqueta de comprobación funcional, permitiendo verificar la precisión del diseño y anticipar ajustes antes de la confección definitiva del bolso.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 a)	Corte de piezas
                p.mb-0 Se cortan todas las piezas del bolso en un material económico como cartulina, papel <em>kraft</em>, <em>cambrelle</em>, sintético, <em>telfor</em> o tela de prueba.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img137.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 b)	Ensamble del prototipo
                p.mb-0 Se ensamblan las piezas siguiendo el mismo orden y técnicas que se usarán en la confección definitiva, con atención a la base, fuelle, frontal, espaldar y refuerzos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 c)	Verificación de ajuste
                p.mb-0 Durante el armado se comprueba que las dimensiones sean correctas, que las piezas encajen y que los márgenes de costura y doblez sean suficientes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img140.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 d)	Evaluación funcional
                p.mb-0 Se evalúan la capacidad del bolso, la accesibilidad a la boca, la ubicación de bolsillos y cremalleras, y la estabilidad de la estructura.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img139.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 e)	Corrección de moldes
                p.mb-0 Si se detectan errores o dificultades, se ajustan los moldes antes de cortar en el material definitivo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img141.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Ventajas de la maqueta de comprobación

    p.mb-5 La implementación de una maqueta previa a la producción permite identificar errores, visualizar el diseño en volumen y asegurar un resultado final funcional y estético, optimizando recursos y tiempo.

    .row
      .col-lg-3(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img142.svg', alt="" style="max-width: 90px").m-auto
          h4.text-center Identificación de errores
          p.mb-0 Permite corregir fallas de diseño o medidas sin afectar materiales costosos.
      .col-lg-3(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img143.svg', alt="" style="max-width: 90px").m-auto
          h4.text-center Visualización tridimensional
          p.mb-0 Ayuda a prever el comportamiento real del bolso terminado.
      .col-lg-3(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img144.svg', alt="" style="max-width: 90px").m-auto
          h4.text-center Garantía de calidad
          p.mb-0 Asegura que el producto cumpla con los estándares técnicos y funcionales.
      .col-lg-3(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img145.svg', alt="" style="max-width: 90px").m-auto
          h4.text-center Optimización del proceso productivo
          p.mb-0 Reduce el margen de error y mejora la eficiencia en la producción en serie.

</template>

<script>
export default {
  name: 'Tema9',
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
