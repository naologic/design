import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
  },
  {
    path: '',
    children: [
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Getting started - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRouting { }
