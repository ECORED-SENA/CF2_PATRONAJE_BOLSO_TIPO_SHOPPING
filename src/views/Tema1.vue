<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Herramientas utilizadas en el proceso de patronaje
    
    p.mb-5 El patronaje en marroquinería es el proceso técnico y creativo mediante el cual se desarrollan los moldes y patrones necesarios para la fabricación de artículos como bolsos, carteras y accesorios. Para garantizar precisión, eficiencia y calidad en esta etapa, es fundamental contar con herramientas adecuadas, tanto manuales como técnicas. A continuación, se presentan  los materiales, instrumentos básicos y equipos más utilizados en este proceso:

    .titulo-sexto.color-acento-contenido.mb-2.espacio___movil_1(data-aos="fade-right")
      h5 Figura 1.
      span Herramientas utilizadas en el proceso de patronaje
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/img1.png', alt='Ilustración detallada de las principales herramientas empleadas en el proceso de patronaje de marroquinería. Incluye cuchillas, compás de precisión, reglas metálicas de distintos tamaños, portaminas, tijeras, cinta métrica, piedra de afilar, tabla de corte y otros instrumentos esenciales para trazar, cortar y medir con precisión.' ).m-auto

    LineaTiempoD.color-primario
      p(numero="1" titulo="Cuchilla de corte") Herramienta de filo agudo utilizada para cortes precisos en papel, cartón o materiales del patrón.
      p(numero="2" titulo="Borrador") Se emplea para corregir trazos durante el diseño del patrón.
      p(numero="3" titulo="Compás de puntas secas o de precisión") Permite marcar radios y medir distancias pequeñas con gran exactitud.
      p(numero="4" titulo="Regla metálica de 15 cm") Ideal para medir trazos cortos y hacer líneas precisas en espacios reducidos.
      p(numero="5" titulo="Portaminas") Instrumento de dibujo que facilita trazos finos y definidos con precisión.
      p(numero="6" titulo="Tijeras") Herramienta manual para cortes generales sobre papel o cartulina.
      p(numero="7" titulo="Cinta de enmascarar") Se utiliza para fijar temporalmente partes del patrón o proteger zonas durante el trazo.
      p(numero="8" titulo="Piedra de afilar") Sirve para mantener en buen estado el filo de cuchillas y herramientas de corte.
      p(numero="9" titulo="Regla metálica de 30 cm") Permite trazar líneas rectas y realizar mediciones con mayor alcance.
      p(numero="10" titulo="Metro de calzado o cinta métrica") Instrumento flexible para medir contornos, curvas y volúmenes tridimensionales.
      p(numero="11" titulo="Tabla de corte") Superficie resistente que protege el área de trabajo y prolonga la vida útil de las cuchillas.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
