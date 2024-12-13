// RickAndMorty/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

export const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: '**', redirectTo: '' }
];