import { Component } from '@angular/core';
import { testimonialsList } from './testimonialsList';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = testimonialsList;
}
