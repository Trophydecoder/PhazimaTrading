import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutusLandingComponent } from "../../components/aboutus-landing/aboutus-landing.component";
import { AboutusComponent } from "../../components/aboutus/aboutus.component";

@Component({
  selector: 'app-aboutpage',
  imports: [NavbarComponent, AboutusLandingComponent, AboutusComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {

}
