import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { FinishComponent } from './components/finish/finish.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'finish', component: FinishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
