import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { LandingComponent } from "../../components/landing/landing.component";
import { PromotionalpointsComponent } from "../../components/promotionalpoints/promotionalpoints.component";
import { AboutusComponent } from "./../../components/aboutus/aboutus.component";
import { CallusComponent } from "../../components/callus/callus.component";
import { ServicesComponent } from "../../components/services/services.component";
import { ContactformComponent } from "../../components/contactform/contactform.component";


@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, LandingComponent, PromotionalpointsComponent, AboutusComponent, CallusComponent, ServicesComponent, ContactformComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
