import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HeroComponent } from "./pages/hero/hero.component";
import { FeaturesComponent } from "./pages/features/features.component";
import { TestimonialsComponent } from "./pages/testimonials/testimonials.component";
import { PriceComponent } from "./pages/price/price.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, TestimonialsComponent, PriceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing';
}
