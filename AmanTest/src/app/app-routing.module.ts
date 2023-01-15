import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesGalleryComponent } from './Components/jokes-gallery/jokes-gallery.component';
import { MainComponent } from './Components/main/main.component';
import { AuthGuard } from './Guards/AuthGuard/auth.guard';
import { LoginGuard } from './Guards/LoginGuard/login.guard';

const routes: Routes = [

  { path: '', canActivate:[LoginGuard],  component: MainComponent },
  {
    path: 'jokes-gallery',
    canActivate: [AuthGuard],
    component: JokesGalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
