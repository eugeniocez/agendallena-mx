import type { VerticalContent } from './types';

export const salonesDeBelleza: VerticalContent = {
  slug: 'salones-de-belleza',
  meta: {
    title: 'Software para salones de belleza — agenda y confirma citas | citas.bot',
    description: 'Software para salones de belleza que confirma citas en automático por SMS, WhatsApp y llamada. Sin huecos sin aviso, sin cancelaciones de último momento. $199 MXN/mes.',
  },
  hero: {
    eyebrow: 'Para salones de belleza',
    h1: 'Software para salones de belleza en México',
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
  serviceSchema: {
    audience: 'Salones de belleza, estilistas y centros de estética',
    serviceType: 'Software de gestión de citas para salones de belleza',
  },
};
