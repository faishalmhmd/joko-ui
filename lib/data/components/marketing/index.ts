import { ComponentType } from '../types';
import { heroes } from './heroes';
import { ctas } from './ctas';
import { footers } from './footers';
import { pricing } from './pricing';
import { testimonials } from './testimonials';
import { faq } from './faq';
import { stats } from './stats';
import { teams } from './teams';
import { banners } from './banners';
import { headers } from './headers';
import { description_list } from './description-list';

export const marketingComponents: ComponentType[] = [
  headers,
  heroes,
  banners,
  ctas,
  stats,
  description_list,
  pricing,
  teams,
  testimonials,
  faq,
  footers,
];
