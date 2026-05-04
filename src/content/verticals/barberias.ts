import type { VerticalContent } from './types';

export const barberias: VerticalContent = {
  slug: 'barberias',
  meta: {
    title: 'Software para barberías — confirma turnos en automático | citas.bot',
    description: 'Software para barberías que confirma turnos en automático por SMS, WhatsApp y llamada. Sin huecos sin aviso, sin esperar a alguien que no llega. $199 MXN/mes.',
  },
  hero: {
    eyebrow: 'Para barberías',
    h1: 'Software para barberías en México',
    subtitle: 'El sistema que confirma los turnos de tu barbería por ti. Sin huecos sin aviso, sin esperar a alguien que no va a llegar.',
  },
  problema: {
    cards: [
      {
        title: 'El turno fantasma',
        description: 'Te reservan a las 5 y a las 4:45 todavía no hay señal. Con confirmación automática, lo sabrías desde el día anterior.',
      },
      {
        title: 'El WhatsApp de la barbería',
        description: 'Manejas reservas, fotos de corte, preguntas de precio y más en el mismo chat. Las confirmaciones se pierden entre todo eso.',
      },
      {
        title: 'La semana que no cuadra',
        description: 'Tienes 3 barberos y 8 turnos por día. Nunca sabes con certeza cuántos van a llegar. Esa incertidumbre tiene un costo.',
      },
    ],
  },
  testimonials: {
    heading: 'Barberías que controlaron su agenda.',
    items: [
      {
        quote: 'En la barbería el ritmo es rápido. Con citas.bot los clientes confirman solos y yo sé exactamente cuándo van a llegar.',
        name: 'Carlos Mendez',
        role: 'Barbería, Monterrey',
        initials: 'CM',
        avatarStyle: 'green',
      },
      {
        quote: 'Antes el WhatsApp era un caos. Ahora las confirmaciones llegan solas y el chat es para lo que debe ser.',
        name: 'Rodrigo Vidal',
        role: 'Barbería & lounge, CDMX',
        initials: 'RV',
        avatarStyle: 'dark',
      },
      {
        quote: 'El primer mes recuperamos los turnos perdidos que antes se iban sin aviso. Eso solo pagó el año entero.',
        name: 'Fernando Ríos',
        role: 'Barbería, Guadalajara',
        initials: 'FR',
        avatarStyle: '',
      },
    ],
  },
  serviceSchema: {
    audience: 'Barberías y peluquerías masculinas',
    serviceType: 'Software de gestión de turnos para barberías',
  },
};
