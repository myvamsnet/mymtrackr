import { Icons } from '@/assets/icons';

export const routes = [
  {
    name: 'Home',
    path: '/home',
    icon: Icons.HomeIcon,
  },
  {
    name: 'Records',
    path: '/records',
    icon: Icons.RecordIcon,
  },
  {
    name: 'Add Record',
    path: '#',
    icon: Icons.PlusIcon,
    type: 'button',
  },
  {
    name: 'Help',
    path: '/help',
    icon: Icons.HelpIcon,
  },
  {
    name: 'More',
    path: '/more',
    icon: Icons.MoreIcon,
  },
];

export const sidebarRoutes = [
  {
    name: 'Home',
    path: '/app/home',
    icon: Icons.HomeIcon,
  },
  {
    name: 'Records',
    path: '/app/records',
    icon: Icons.RecordIcon,
  },

  {
    name: 'Help',
    path: '/app/help',
    icon: Icons.HelpIcon,
  },
  {
    name: 'More',
    path: '/app/more',
    icon: Icons.MoreIcon,
  },
  {
    name: 'Add Record',
    path: '#',
    icon: Icons.PlusIcon,
    type: 'button',
  },
];
