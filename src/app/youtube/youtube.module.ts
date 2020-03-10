import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

// Angular Material
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';




const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  declarations: [YoutubeComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [RouterModule]
})
export class YoutubeModule { }
