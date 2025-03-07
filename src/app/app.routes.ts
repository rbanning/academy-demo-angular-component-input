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
  }
];
