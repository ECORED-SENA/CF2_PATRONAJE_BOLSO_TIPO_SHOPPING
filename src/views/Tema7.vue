<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Patronaje bolso <em>shopping</em> con construcción a partir del fuelle
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img104.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En esta variante de construcción, el molde patrón se desarrolla a partir del fuelle, el cual posee una forma curva característica que actúa como referencia principal del diseño. A partir del molde del fuelle, se determinan los recorridos y dimensiones de las demás piezas estructurales del bolso, como la base, el frontal y el espaldar, asegurando un diseño coherente y funcional.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Molde patrón
    
    p.mb-5 Para desarrollar el molde patrón:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_1.ajuste___box_4(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img105.jpg', alt='' style="max-width: 315px").m-auto
          .col-xl
            p.mb-3 El proceso consiste en empastar las piezas, es decir:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span>Corte una cartulina de 15 cm de ancho por 31 cm de largo.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span>Marque sobre la cartulina los ejes de simetría horizontal y vertical.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>A partir de estos ejes, dibuje el fuelle utilizando las medidas indicadas en la figura correspondiente.</li>
            </ul>
    
    p.mb-5 Este enfoque permite trabajar con precisión desde una pieza base estratégica, facilitando el diseño equilibrado del resto de componentes.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 36.
          span Molde patrón bolso <em>shopping</em> construcción a partir del fuelle
        
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img106.png', alt='Molde patrón de bolso construido a partir del fuelle, con ejes de simetría y medidas proporcionales. Esta pieza guía la elaboración de las demás secciones del bolso. ' ).m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Despiece de moldes principales
    
    .row.align-items-center.m-0.mb-5.style___box_8(data-aos="zoom-in")
      .col-xl
        p.mb-0 El despiece de los moldes principales en esta construcción se obtiene a partir del recorrido del fuelle, siguiendo un procedimiento similar al aplicado en el modelo anterior para determinar el recorrido del frontal. Esto implica que, tomando el molde del fuelle como referencia principal, se trazan y separan las piezas correspondientes al frontal, espaldar y base, asegurando que cada una cuente con las medidas y formas adecuadas para un ensamble preciso y funcional.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img107.svg', alt='' style="max-width: 295px").m-auto
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Fuelle

    p.mb-5 El molde del fuelle se deriva directamente del molde patrón, al cual se le aplican los aumentos específicos para costura y doblado:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_14.ajuste___box_14.h-100
              p.mb-0 Se debe agregar un aumento de 8 mm en todo el contorno del molde.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_14.ajuste___box_14.h-100
              p.mb-0 Excepto en la parte superior, donde se aplica un aumento de 7 mm para permitir el doblez durante el proceso de confección.
    
    p.mb-5 Este tratamiento técnico garantiza que el fuelle se ajuste correctamente al diseño del bolso y que proporcione tanto estructura como funcionalidad.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.mb-3
          .col-xl-5
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 37.
              span Molde fuelle
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img108.png', alt='Molde del fuelle con forma curva, desarrollado desde el patrón base y complementado con aumentos para costura y doblez en cada borde.' ).m-auto
          .col-xl-7(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img109.png', alt='' ).m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Frontal espaldar

    .row.align-items-center.mb-3
      .col-xl
        p Para obtener el patrón del frontal y espaldar, se debe primero determinar el punto de inicio, que generalmente corresponde al nacimiento de la curva del fuelle. Desde ese punto, se mide el recorrido hasta la parte superior del fuelle, lo que establece la altura del frontal.
        .row.align-items-center.m-0.mb-3.style___box_12.ajuste___box_11(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img110.svg', alt='' style="max-width: 91px").m-auto
          .col-xl
            p.mb-0 El ancho del patrón se define según el diseño o la experiencia del patronista; en este ejemplo, se utilizará una medida de 32 cm. Una vez obtenido el molde del frontal y espaldar, se dibujan las chapetas u otras piezas adicionales directamente sobre este molde, siguiendo los mismos parámetros y procedimientos aplicados en el modelo anterior.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 Se recomienda siempre elaborar este molde utilizando ejes de simetría, lo cual garantiza mayor precisión y calidad en el proceso productivo. El uso de ejes de simetría permite que ambas mitades del molde sean idénticas, lo que facilita el dibujo y corte de las piezas y asegura un ensamble equilibrado y un acabado profesional en el bolso.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 38.
          span Construcción frontal espaldar
        
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img112.png', alt='Construcción del molde de frontal y espaldar a partir del recorrido del fuelle, con altura determinada desde la base del fuelle hasta su borde superior.' ).m-auto
    
    .row.align-items-center.mb-5
      .col-xl
        p Este es un modelo básico a partir del cual se pueden realizar variaciones en el diseño, según las necesidades funcionales o estéticas del bolso. Para los aumentos en este molde (frontal y espaldar), se aplican las siguientes medidas estándar:
        .row.m-0
          .style___box_17(data-aos="fade-right")
            <ul class="fa-ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span>10 mm en la parte inferior, para la unión con la base.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span>8 mm en los laterales, para la unión con el fuelle.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>7 mm en la parte superior, para permitir el doblado.</li>
            </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img113.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 Estos aumentos aseguran un <strong>ensamble preciso</strong> de las piezas y <strong>facilitan el proceso de costura</strong>, garantizando un acabado limpio y profesional.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 39.
          span Aumentos molde frontal espaldar
        
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img114.png', alt='Construcción del molde de frontal y espaldar a partir del recorrido del fuelle, con altura determinada desde la base del fuelle hasta su borde superior.' ).m-auto
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Base

    .row.align-items-center.mb-5
      .col-xl
        p El ancho del molde de la base se obtiene a partir del recorrido sobrante del frontal y espaldar, tomando como referencia el punto de inicio en el nacimiento de las curvas del fuelle. El largo de la base es igual al ancho del frontal, que en este caso es de 32 cm. Este método permite que la base encaje perfectamente con el frontal y el espaldar, garantizando la proporción adecuada y una estructura sólida en el bolso. Para su elaboración, se recomienda construir el molde utilizando ejes de simetría, lo que facilita la precisión y el equilibrio del diseño.
        .style___box_8(data-aos="fade-right")
          p.mb-4 Los aumentos necesarios para este molde se aplican de la siguiente manera:
          <ul class="fa-ul mb-0">
            <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span>8 mm en las zonas de unión con el fuelle, para permitir una correcta costura y ajuste.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>7 mm en la zona que conecta con el frontal y el espaldar, destinados al doblez y acabado final.</li>
          </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img115.png', alt='' style="max-width: 450px").m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 40.
          span Construcción base
        
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img116.png', alt='Construcción de la base a partir de las medidas tomadas del recorrido del frontal, con largo igual al ancho del bolso y ancho proporcional al diseño.' ).m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
      .col
        h3 Moldes forro

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img117.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los moldes del forro, al igual que en el modelo anterior, comprenden las siguientes piezas: boca, lateral de cremallera, terminal de cremallera, organizador y bolsillo interno. Estos moldes se obtienen siguiendo el mismo procedimiento descrito previamente. A continuación, se detalla cómo obtener específicamente los moldes del fuelle y del cuerpo del bolso:
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Fuelle

    p.mb-5 Para obtener el molde del fuelle del forro, se parte del molde patrón, al cual se le descuenta el ancho de la boca, que para este caso es de 3 cm. A continuación, se aplican los aumentos necesarios para costura, es decir: 8 mm en todo el contorno, permitiendo así una correcta unión con las demás piezas del forro.

    .fondo___color_6
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 41.
              span Molde forro fuelle
            
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img118.png', alt='Molde del fuelle del forro, obtenido del patrón principal tras descontar la franja de la boca y aplicar aumentos para costura.' ).m-auto

    
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.png" style="max-width: 60px").m-auto
          .col
            h3 Molde del cuerpo

        .row.align-items-center.mb-5
          .col-xl
            p El molde del cuerpo se desarrolla uniendo las piezas del frontal, la base y el espaldar, sin aplicar aumentos en esta etapa inicial.  Una vez conformado el molde completo, se deben descontar 3 cm correspondientes a la boca, tanto en el frontal como en el espaldar. A continuación, se aplica un aumento de 8 mm en todo el contorno del molde resultante.
            p.mb-0.style___box_18(data-aos="fade-right") Este aumento es fundamental para permitir las costuras y asegurar un ensamblaje correcto de las piezas durante la confección. Este procedimiento garantiza que el molde del cuerpo tenga las dimensiones precisas, contribuyendo a un ajuste exacto y un acabado profesional en el bolso terminado. Es importante marcar sobre este molde la posición del bolsillo y del organizador, manteniendo los parámetros establecidos en los modelos anteriores, tal como se presenta en la figura correspondiente.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img120.png', alt='' style="max-width: 500px").m-auto
        
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 42.
              span Forro cuerpo
            
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img121.png', alt='Molde del cuerpo completo del forro, uniendo frontal, base y espaldar. Incluye descuento por la boca del bolso y marcas para ubicación de bolsillo y organizador.' ).m-auto
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Moldes almas

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img122.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los moldes de alma se obtienen siguiendo el mismo procedimiento técnico que en el modelo anterior. Estos moldes aseguran la estructura del bolso y deben ajustarse según el tipo de material empleado.

</template>

<script>
export default {
  name: 'Tema7',
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
