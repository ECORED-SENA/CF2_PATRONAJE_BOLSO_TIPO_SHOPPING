<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ejes de simetría
    
    .row.align-items-center.m-0.mb-5
      .col-xl(data-aos="fade-right")
        .row.align-items-center.style___box_4
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img6.jpg', alt='' style="max-width: 350px")
          .col-xl
            p Antes de iniciar el proceso de patronaje en marroquinería, es fundamental comprender y aplicar correctamente el concepto de <strong>ejes de simetría</strong>, ya que constituyen la base para una elaboración precisa y equilibrada de los moldes.
            p.mb-0 Los ejes de simetría son líneas guía, horizontales y verticales, que dividen una figura en partes iguales o reflejadas. En el patronaje, estas líneas permiten trazar patrones proporcionales, asegurando que ambos lados del diseño sean simétricos en forma, tamaño y funcionalidad.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 295px").m-auto

    .row.align-items-center.m-0.mb-5.style___box_5(data-aos="zoom-in").espacio___movil_1
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img8.svg', alt='' style="max-width: 95px").m-auto
      .col-xl
        p.mb-0 El proceso consiste en ubicar el eje principal de simetría sobre la hoja de patronaje, que servirá como referencia para construir la mitad del molde. Una vez definido y trazado el contorno sobre un lado, este se puede reflejar o doblar para obtener la forma completa, garantizando exactitud y armonía en el diseño. Este principio es esencial en piezas como frentes, espaldas, solapas o tapas, donde la uniformidad y el equilibrio visual son claves para la estética y funcionalidad del producto final.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Ejercicio práctico: trazado de ejes de simetría

    p.mb-4 Para adquirir destreza en el desarrollo de los ejes de simetría, se propone el siguiente ejercicio paso a paso:

    .row.align-items-center.mb-5
      .col-xl(data-aos="fade-right")
        LineaTiempoD.color-primario
          p(numero="a" titulo="Preparar el material") Corta un cuadrado de 6 cm x 6 cm en cartulina o papel resistente.
          p(numero="b" titulo="Trazar el eje vertical") Mide y marca el punto medio (3 cm) en los lados superior e inferior. Une los puntos con regla y marca suavemente con bisturí sin cortar completamente.
          p(numero="c" titulo="Trazar el eje horizontal") Dobla la cartulina por el eje vertical. Marca el punto medio del lado ahora vertical y transfiérelo con punzón. Desdobla, une los puntos opuestos y traza con bisturí el eje horizontal.
          p(numero="d" titulo="Verificación") Dobla la cartulina por ambos ejes. Asegúrate de que las marcas coincidan en el centro, aunque los bordes no estén perfectamente alineados.
          p(numero="e" titulo="Refilado para igualar bordes") Doble la cartulina por un eje. Desde allí mide 2,5 cm hacia el borde y marca. Repite en el eje perpendicular, transfiere la marca con punzón y recorta el exceso con bisturí guiándote por los puntos. Realiza el mismo proceso en el lado opuesto.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img9.png", alt="" style="max-width: 450px").m-auto
    
    p.style___box_6.mb-0.m-0(data-aos="zoom-in").espacio___movil_1 Con este procedimiento obtendrás un cuadrado perfectamente simétrico y alineado, ideal para iniciar cualquier trabajo de patronaje con precisión y exactitud.

</template>

<script>
export default {
  name: 'Tema3',
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
