import { ComponentType } from '../types';
import { buttons } from './buttons';
import { cards } from './cards';
import { alerts } from './alerts';
import { forms } from './forms';
import { badges } from './badges';
import { avatars } from './avatars';
import { progress } from './progress';
import { skeleton } from './skeleton';
import { loaders } from './loaders';
import { breadcrumbs } from './breadcrumbs';
import { sidebars } from './sidebars';
import { navbars } from './navbars';

export const applicationComponents: ComponentType[] = [
  navbars,
  sidebars,
  breadcrumbs,
  avatars,
  forms,
  buttons,
  cards,
  loaders,
  badges,
  alerts,
  progress,
  skeleton,
];
