import { v4 as uuid } from 'uuid';

export const initialColaboradores = [
  {
    id: uuid(),
    equipo: 'Front End',
    foto: 'https://github.com/harlandlohora.png',
    nombre: 'Harland Lohora',
    puesto: 'Instructor',
    fav: true,
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/genesysR-dev.png',
    nombre: 'Genesys Rondón',
    puesto: 'Desarrolladora de software e instructora',
    fav: false,
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: 'https://github.com/JeanmarieAluraLatam.png',
    nombre: 'Jeanmarie Quijada',
    puesto: 'Instructora en Alura Latam',
    fav: false,
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/christianpva.png',
    nombre: 'Christian Velasco',
    puesto: 'Head de Alura e Instructor',
    fav: false,
  },
  {
    id: uuid(),
    equipo: 'Innovación y Gestión',
    foto: 'https://github.com/JoseDarioGonzalezCha.png',
    nombre: 'Jose Gonzalez',
    puesto: 'Dev FullStack',
    fav: false,
  },
];

export const initialEquipos = [
  {
    id: uuid(),
    titulo: 'Programación',
    colorPrimario: '#57C278',
    colorSecundario: '#D9F7E9',
  },
  {
    id: uuid(),
    titulo: 'Front End',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF',
  },
  {
    id: uuid(),
    titulo: 'Data Science',
    colorPrimario: '#A6D157',
    colorSecundario: '#F0F8E2',
  },
  {
    id: uuid(),
    titulo: 'Devops',
    colorPrimario: '#E06B69',
    colorSecundario: '#FDE7E8',
  },
  {
    id: uuid(),
    titulo: 'UX y Diseño',
    colorPrimario: '#DB6EBF',
    colorSecundario: '#FAE9F5',
  },
  {
    id: uuid(),
    titulo: 'Móvil',
    colorPrimario: '#FFBA05',
    colorSecundario: '#FFF5D9',
  },
  {
    id: uuid(),
    titulo: 'Innovación y Gestión',
    colorPrimario: '#FF8A29',
    colorSecundario: '#FFEEDF',
  },
];
