import type { VerticalContent } from './types';

export const salonesDeBelleza: VerticalContent = {
  slug: 'salones-de-belleza',
  meta: {
    title: 'citas.bot para salones de belleza — Sin huecos sin aviso',
    description: 'El sistema que confirma las citas de tu salón de belleza por ti. Sin cancelaciones de último momento, sin WhatsApp caótico, sin huecos en tu agenda. $199 MXN/mes.',
  },
  hero: {
    eyebrow: 'Para salones de belleza',
    subtitle: 'El sistema que confirma las citas de tu salón por ti. Sin huecos sin aviso, sin clientas que no llegan, sin correr para rellenar el horario.',
  },
  problema: {
    cards: [
      {
        title: 'El hueco de último momento',
        description: 'Te cancelan a las 9 AM y ya no hay tiempo para llenar el espacio. Ese hueco te cuesta entre $300 y $800 pesos directos.',
      },
      {
        title: 'El WhatsApp del salón',
        description: 'Tienes 40 conversaciones abiertas. Las confirmaciones se confunden con preguntas de precio, fotos de referencia y todo lo demás.',
      },
      {
        title: 'El día que no cuadra',
        description: 'Organizaste tu horario contando con que todas llegarían. Siempre hay una que no. Y siempre te toma por sorpresa.',
      },
    ],
  },
  testimonials: {
    heading: 'Salones que llenaron su agenda y la mantienen llena.',
    items: [
      {
        quote: 'Antes mi lunes empezaba con incertidumbre. Ahora sé exactamente quién llega y puedo preparar todo. Las clientas también llegan más puntuales.',
        name: 'Daniela Cruz',
        role: 'Salón de belleza, CDMX',
        initials: 'DC',
        avatarStyle: 'green',
      },
      {
        quote: 'El sistema manda el recordatorio solo. Las clientas confirman, y yo no tengo que estar pegada al teléfono entre clientes.',
        name: 'Mónica Reyes',
        role: 'Estilista independiente, Monterrey',
        initials: 'MR',
        avatarStyle: 'dark',
      },
      {
        quote: 'Llenamos los espacios cancelados mucho más rápido. Las clientas saben que hay lista de espera y citas.bot lo coordina solo.',
        name: 'Pamela Lagos',
        role: 'Salón & spa, Guadalajara',
        initials: 'PL',
        avatarStyle: '',
      },
    ],
  },
};
