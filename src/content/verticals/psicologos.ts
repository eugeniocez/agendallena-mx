import type { VerticalContent } from './types';

export const psicologos: VerticalContent = {
  slug: 'psicologos',
  meta: {
    title: 'Solución para psicólogos — agenda y confirma sesiones | tuagenda.mx',
    description: 'Solución que confirma sesiones de psicólogos en automático por SMS, WhatsApp y llamada. Menos ausencias, sin interrumpir tu consulta. $199 MXN/mes.',
  },
  hero: {
    eyebrow: 'Para psicólogos',
    h1: 'Solución de citas para psicólogos en México',
    subtitle: 'La solución que confirma tus sesiones por ti. Menos ausencias, más certeza, sin interrumpir el ritmo de tu consulta.',
  },
  problema: {
    cards: [
      {
        title: 'El aviso no llegó',
        description: 'Tu paciente leyó el mensaje y pensó "lo confirmo después". Después llegó tarde. La sesión, no.',
      },
      {
        title: 'La espera sin saber',
        description: 'Llegar a tu consultorio sin saber si tu primera sesión se va a presentar es un inicio de día que desgasta.',
      },
      {
        title: 'Una sesión son 50 minutos',
        description: 'Cada hora vacía en tu agenda es una pérdida que no se recupera. Solo con confirmación automática se puede prevenir.',
      },
    ],
  },
  testimonials: {
    heading: 'Psicólogos que recuperaron sesiones perdidas.',
    items: [
      {
        quote: 'Mis pacientes confirman solos. El recordatorio les llega en el momento justo y yo no tengo que interrumpir mi día para hacer seguimiento.',
        name: 'Mtra. Valeria Soto',
        role: 'Psicología clínica, CDMX',
        initials: 'VS',
        avatarStyle: 'green',
      },
      {
        quote: 'Lo que más valoro es que la solución respeta la discreción de mis pacientes. Reciben un SMS, confirman, y listo. Sin llamadas incómodas.',
        name: 'Dr. Iván Mendoza',
        role: 'Terapia individual, Monterrey',
        initials: 'IM',
        avatarStyle: 'dark',
      },
      {
        quote: 'Pasé de 3 ausencias semanales a casi ninguna. Para consulta privada, eso es muy significativo.',
        name: 'Lic. Andrea Fuentes',
        role: 'Psicóloga, Guadalajara',
        initials: 'AF',
        avatarStyle: '',
      },
    ],
  },
  serviceSchema: {
    audience: 'Psicólogos, terapeutas y consultorios de salud mental',
    serviceType: 'Software de gestión de sesiones de psicología',
  },
  smsContext: 'con la psicóloga Soto',
};
