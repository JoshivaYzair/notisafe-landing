import { Component } from '@angular/core';
import { feactureList } from './featuresList';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  features = feactureList;

}
