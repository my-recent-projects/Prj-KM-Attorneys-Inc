import { ContactComponent } from './app-basic-views/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-basic-views/home/home.component';
import { AboutComponent } from './app-basic-views/about/about.component';
import { ServicesComponent } from './app-basic-views/services/services.component';
import { ErrorComponent } from './app-basic-views/error/error.component';
import { DeactivateRoute } from './app-shared/routes-guard/deactivate-route';
import { OurTeamComponent } from './app-basic-views/our-team/our-team.component';
import { FaqComponent } from './app-basic-views/faq/faq.component';


const routes: Routes = [
  //components content are rendared by <router-outlet></router-outlet> inside the app component

  // redirectTo - home
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent, title: "K.M. Attorneys Inc - Home"  },
  
  { path: 'home', component: HomeComponent, title: "K.M. Attorneys Inc - Home" },
  { path: 'about', component: AboutComponent, title: "K.M. Attorneys Inc - About Us" },
  { path: 'our team', component: OurTeamComponent, title: "K.M. Attorneys Inc - Our Team" },
  { path: 'services', component: ServicesComponent, title: "K.M. Attorneys Inc - Our Services" },
  { path: 'faq', component: FaqComponent, title: "K.M. Attorneys Inc - FAQs" },
  { path: 'contact', component: ContactComponent, canDeactivate: [DeactivateRoute], title: "K.M. Attorneys Inc - Contact Us" },
  
  // redirectTo - Error page
  { path: '**', component: ErrorComponent, title: "K.M. Attorneys Inc - Not found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
