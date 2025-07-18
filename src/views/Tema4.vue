<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Elaborar patrones para bolso tipo <em>shopping</em> 
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El bolso tipo <em>shopping</em> es una tipología propia de la marroquinería, caracterizada por su diseño amplio, de forma generalmente rectangular o trapezoidal, con base definida y gran capacidad de carga. A diferencia del bolso tipo Tote, que suele tener una construcción más simple con laterales planos y asas cosidas directamente al cuerpo, el <em>shopping</em> se distingue por una estructura más robusta, una mejor distribución del volumen y detalles funcionales como cierres, forros y compartimientos internos.

    p.mb-5.espacio___movil_1 Debido a estas particularidades, la elaboración de sus patrones exige el dominio de distintos <strong>métodos constructivos</strong>, los cuales permiten adaptar el diseño a los requerimientos estéticos, técnicos y funcionales del modelo. A continuación, se presentan las formas más comunes de construir un bolso tipo <em>shopping</em>:

    .bg--img_03.mb-5.espacio___movil_1
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Construcción con pinza a 90 grados").ajuste-cajaAcordion
              p.mb-0 Genera volumen mediante la creación de una caja en las esquinas inferiores del cuerpo frontal, sin añadir piezas adicionales como fuelles. Ideal para mantener simplicidad con volumen funcional.
            .row(titulo="Construcción a partir del frontal").ajuste-cajaAcordion
              p.mb-0  El diseño parte del cuerpo principal (frontal), desde donde se definen la espalda, base, laterales y piezas complementarias. Aporta coherencia en proporciones y líneas. Favorece una construcción armoniosa y funcional.
            .row(titulo="Construcción a partir del fuelle").ajuste-cajaAcordion
              p.mb-0 El fuelle se establece como la pieza base del diseño. A partir de sus dimensiones se desarrollan el frontal y espaldar. Permite controlar con precisión el volumen interior y la estructura. Ideal para modelos con mayor capacidad y estabilidad.
            .row(titulo="Construcción a partir de la base").ajuste-cajaAcordion
              p.mb-0 Se parte del diseño de una base central. Sobre esta se añaden cuerpo y laterales. Es adecuada para bolsos que requieren mayor soporte y estabilidad estructural.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img11.png", alt="" style="width: 470px").m-auto
    
    .row.justify-content-center.m-0(data-aos="zoom-in").espacio___movil_1
      .col-xl-10
        .row.align-items-center.m-0.style___box_7
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 190px").m-auto
          .col-xl
            p.mb-0 Cada uno de estos sistemas permite obtener resultados distintos en términos de forma, capacidad, estética y complejidad de confección. Este componente formativo permitirá al aprendiz diseñar, trazar y construir patrones funcionales y precisos para diversas versiones del bolso tipo <em>shopping</em>, ampliando sus competencias en diseño técnico aplicado a la marroquinería.

</template>

<script>
export default {
  name: 'Tema4',
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
