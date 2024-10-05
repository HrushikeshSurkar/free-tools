import { Routes } from '@angular/router';
import { ImgEditorComponent } from './tools/img-editor/img-editor.component';
import { DropZoneComponent } from './tools/drop-zone/drop-zone.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'image-input',
    pathMatch: 'full',
  },
  {
    path: 'image-input',
    component: DropZoneComponent,
  },
  {
    path: 'image-editor',
    component: ImgEditorComponent,
  },
];
