import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaultComponent } from './components/vault/vault.component';
import { LairComponent } from './components/lair/lair.component';
import { AbyssComponent } from './components/abyss/abyss.component';

const routes: Routes = [
  { path: '', redirectTo: '/breakfast/all', pathMatch: 'full' },

  { 
    path: 'breakfast/:difficulty', 
    component: VaultComponent,
    data: { mealRite: 'Breakfast' } 
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

  { path: 'recipe/:id', component: LairComponent },


  { path: '404', component: AbyssComponent },
  { path: '**', redirectTo: '/404' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
