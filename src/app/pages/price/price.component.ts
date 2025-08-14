import { Component } from '@angular/core';
import { planList } from './planlist';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  plans = planList;

}
