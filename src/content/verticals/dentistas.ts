import type { VerticalContent } from './types';

export const dentistas: VerticalContent = {
  slug: 'dentistas',
  meta: {
    title: 'Software para dentistas en México — agenda y confirma citas | tuagenda.mx',
    description: 'Software para dentistas que confirma citas en automático por SMS, WhatsApp y llamada. Menos inasistencias en tu clínica dental. $199 MXN/mes. Prueba gratis.',
  },
  hero: {
    eyebrow: 'Para dentistas',
    h1: 'Software de citas para dentistas en México',
    subtitle: 'El sistema que confirma las citas de tu clínica dental por ti. Sin perseguir pacientes por WhatsApp, sin sillones vacíos a última hora.',
  },
  problema: {
    cards: [
      {
        title: 'El paciente olvidó',
        description: 'Confirmaste por WhatsApp, pero el mensaje se perdió entre cien conversaciones. Para cuando te acuerdas, el sillón ya está vacío.',
      },
      {
        title: 'La agenda no avisa',
        description: 'Tienes 12 pacientes esta semana. ¿Cuántos van a llegar? La libreta no te dice. El tiempo bloqueado, sí se pierde.',
      },
      {
        title: 'Entre consulta y consulta',
        description: 'Cuando ves a 15 pacientes al día, recordar quién confirmó la cita del viernes es imposible. Y el viernes llega solo.',
      },
    ],
  },
  testimonials: {
    heading: 'Clínicas dentales que dejaron de perder citas.',
    items: [
      {
        quote: 'Antes perdía 4 o 5 pacientes a la semana sin aviso. Ahora el sistema los contacta solo y el sillón casi siempre está lleno.',
        name: 'Dr. Marco Ayala',
        role: 'Clínica dental, Monterrey',
        initials: 'MA',
        avatarStyle: 'green',
      },
      {
        quote: 'Lo que más me sorprendió es que los pacientes confirman solos. Mi recepcionista dejó de pasar las mañanas persiguiendo por teléfono.',
        name: 'Dra. Sofía Herrera',
        role: 'Odontología, CDMX',
        initials: 'SH',
        avatarStyle: 'dark',
      },
      {
        quote: 'Mis pacientes dicen que es más fácil confirmar con nosotros que con cualquier otra clínica. Eso solo ya vale los $199.',
        name: 'Dr. Adrián Casas',
        role: 'Consultorio dental, Guadalajara',
        initials: 'AC',
        avatarStyle: '',
      },
    ],
  },
  serviceSchema: {
    audience: 'Clínicas dentales y consultorios odontológicos',
    serviceType: 'Software de gestión de citas dentales',
  },
  smsContext: 'en Clínica Dental Ayala',
};
