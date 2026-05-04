import type { VerticalContent } from './types';

export const consultoriosMedicos: VerticalContent = {
  slug: 'consultorios-medicos',
  meta: {
    title: 'Software para consultorios médicos — agenda y confirma citas | tuagenda.mx',
    description: 'Software para consultorios médicos que confirma citas automáticamente por SMS, WhatsApp y llamada. Pacientes que llegan, agenda predecible. $199 MXN/mes.',
  },
  hero: {
    eyebrow: 'Para consultorios médicos',
    h1: 'Software para consultorios médicos en México',
    subtitle: 'El sistema que confirma las citas de tu consultorio por ti. Pacientes que llegan, agenda predecible, sin llamadas de seguimiento.',
  },
  problema: {
    cards: [
      {
        title: 'El paciente no apareció',
        description: 'Bloqueaste una hora de tu agenda para alguien que nunca llegó. Y nunca avisó. Eso pasa cuando no hay sistema de confirmación.',
      },
      {
        title: 'La recepción no sabe',
        description: 'Tienes una lista de 20 nombres para hoy. No sabes cuántos van a llegar. Tu recepcionista tampoco. Así empieza cualquier día.',
      },
      {
        title: 'Demasiadas variables',
        description: 'Entre urgencias, reprogramaciones y pacientes nuevos, llevar el control de quién confirmó es un trabajo de tiempo completo.',
      },
    ],
  },
  testimonials: {
    heading: 'Consultorios que recuperaron el control de su agenda.',
    items: [
      {
        quote: 'Mis pacientes reciben el recordatorio automático y confirman desde el SMS. Yo solo abro la app y ya sé cómo va el día.',
        name: 'Dra. Laura Vega',
        role: 'Medicina general, Monterrey',
        initials: 'LV',
        avatarStyle: 'green',
      },
      {
        quote: 'Redujimos las ausencias en más del 60% el primer mes. El retorno fue inmediato.',
        name: 'Dr. Ernesto Ríos',
        role: 'Consultorio médico, Guadalajara',
        initials: 'ER',
        avatarStyle: 'dark',
      },
      {
        quote: 'La recepcionista ahora se enfoca en atender bien al paciente que llega, no en perseguir al que todavía no ha confirmado.',
        name: 'Dra. Mariana Torres',
        role: 'Clínica familiar, CDMX',
        initials: 'MT',
        avatarStyle: '',
      },
    ],
  },
  serviceSchema: {
    audience: 'Consultorios médicos y clínicas privadas',
    serviceType: 'Software de gestión de citas médicas',
  },
  smsContext: 'en Consultorio Dr. Ríos',
};
