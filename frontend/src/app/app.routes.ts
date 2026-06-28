import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EcoForHomebuyers} from './pages/eco-for-homebuyers/eco-for-homebuyers';
import { Biodiversity} from './pages/biodiversity/biodiversity';
import { ComparePlaces } from './pages/compare-places/compare-places';
import { Insights } from './pages/insights/insights';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'eco-for-homebuyers',
    component: EcoForHomebuyers
  },
  {
    path: 'biodiversity',
    component: Biodiversity
  },
  {
    path: 'compare-places',
    component: ComparePlaces
  },
  {
    path:'insights',
    component: Insights
  },
  {
    path: '**',
    redirectTo: ''
  }
];
