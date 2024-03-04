import { MenuItem } from 'src/app/core/interfaces/menu-item.inteface';

export const MENU: Array<MenuItem> = [
  {
    texto: 'Productos',
    ruta: '/',
    icon: 'dashboard',
  },
  {
    texto: 'Clientes',
    ruta: '/clientes',
    icon: 'groups',
  },
  {
    texto: 'Not Found 404',
    ruta: '/notfound',
    icon: 'block',
  },
];
