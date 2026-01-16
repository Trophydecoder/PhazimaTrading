import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ServicespageComponent } from './pages/servicespage/servicespage.component';

export const routes: Routes = [
    {title:'Home' , path:'' , component:HomepageComponent},
    {title:'About-us' , path:'About-us' , component:AboutpageComponent},
    {title:'Services' , path:'Services' , component:ServicespageComponent},
];
