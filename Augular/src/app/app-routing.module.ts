import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaultComponent } from './components/vault/vault.component';
import { LairComponent } from './components/lair/lair.component';
import { AbyssComponent } from './components/abyss/abyss.component';

const routes: Routes = [
  // Редирект с главной
  { path: '', redirectTo: '/breakfast/all', pathMatch: 'full' },

  // Наши страницы по типам еды
  { 
    path: 'breakfast/:difficulty', 
    component: VaultComponent,
    data: { mealRite: 'Breakfast' } // Передаем "тип еды" через data
  },
  { 
    path: 'lunch/:difficulty', 
    component: VaultComponent,
    data: { mealRite: 'Lunch' } 
  },
  { 
    path: 'dinner/:difficulty', 
    component: VaultComponent,
    data: { mealRite: 'Dinner' } 
  },

  // Страница конкретного рецепта
  { path: 'recipe/:id', component: LairComponent },

  // Страница 404
  { path: '404', component: AbyssComponent },
  { path: '**', redirectTo: '/404' } // Любой другой путь кидаем на 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }