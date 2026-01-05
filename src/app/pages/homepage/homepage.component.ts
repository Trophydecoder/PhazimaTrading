import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { LandingComponent } from "../../components/landing/landing.component";
import { PromotionalpointsComponent } from "../../components/promotionalpoints/promotionalpoints.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, LandingComponent, PromotionalpointsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
