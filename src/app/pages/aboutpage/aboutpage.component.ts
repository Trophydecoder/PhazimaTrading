import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutusLandingComponent } from "../../components/aboutus-landing/aboutus-landing.component";
import { AboutusComponent } from "../../components/aboutus/aboutus.component";
import { AboutMissionComponent } from "../../components/about-mission/about-mission.component";

@Component({
  selector: 'app-aboutpage',
  imports: [NavbarComponent, AboutusLandingComponent, AboutusComponent, AboutMissionComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {

}
