<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diseño de patronaje para bolsos tipo <em>shopping</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave y técnicas empleadas en la elaboración de moldes y patrones para bolsos tipo <em>shopping</em>, según estándares técnicos y funcionales en marroquinería.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del patronaje en marroquinería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar la creatividad y originalidad del diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desarrollar moldes precisos para la fabricación de artículos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el tiempo de confección del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obtener materiales más económicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué función cumplen los moldes en la elaboración de bolsos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir únicamente como decoración en el diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guiar la fabricación asegurando precisión y uniformidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la fase de corte de materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar el uso de materiales sintéticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal diferencia entre el bolso tipo <em>shopping</em> y el bolso tipo Tote?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El <em>shopping</em> no lleva asas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El <em>shopping</em> tiene estructura más robusta y gran capacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El Tote tiene más compartimientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El Tote es más formal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué herramienta se utiliza para medir radios y distancias pequeñas con exactitud?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Portaminas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regla metálica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compás de puntas secas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tijeras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué patrón se utiliza para proporcionar estructura y rigidez interna en los bolsos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Molde base.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrón de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patrón de refuerzo o alma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Patrón de rayado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la técnica que permite dar volumen al bolso sin añadir piezas adicionales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Construcción desde el fuelle.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pinza a 90°.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Construcción desde la base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Doblado doble.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué aumento se debe aplicar para el ensamblaje tipo “cosido y vuelto”?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '8 mm.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '10 mm.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '7 mm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '3 mm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito de los ejes de simetría en el patronaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar el molde.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el cosido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lograr precisión y equilibrio en el diseño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la velocidad de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué pieza se utiliza para cubrir el espacio de la cremallera en el forro?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Molde del fuelle.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventana de cremallera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Patrón de bolsillo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Chapeta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué característica tienen las chapetas respecto al herraje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Siempre son del mismo ancho del herraje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deben ser más anchas para reforzar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son ligeramente más angostas para asegurar un ajuste firme.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son del doble de ancho para doblarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El patrón de forro debe ser más grande que el patrón principal del bolso.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El molde base se utiliza como punto de partida en una de las variantes constructivas del bolso <em>shopping</em>.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La ventana de cremallera se aplica solo en el diseño exterior del bolso.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La elaboración de una maqueta permite verificar proporciones y realizar ajustes antes de la producción.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las almas se utilizan únicamente en bolsos confeccionados con textiles.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
