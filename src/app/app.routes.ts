import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/view-home.component')
      .then(m => m.ViewHomeComponent)
  },
  {
    path: 'input-decorator-props',
    loadComponent: () => import('./views/input-decorator-props/view-input-decorator-props.component')
      .then(m => m.ViewInputDecoratorPropsComponent)
  },
  {
    path: 'why-transformations-rock',
    loadComponent: () => import('./views/why-transformations-rock/why-transformations-rock.component')
      .then(m => m.WhyTransformationsRockComponent)
  },
  {
    path: 'signal-input',
    loadComponent: () => import('./views/signal-input/signal-input.component')
      .then(m => m.SignalInputComponent)
  },
];
