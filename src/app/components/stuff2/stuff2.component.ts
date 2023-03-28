import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-stuff2',
  templateUrl: './stuff2.component.html',
  styleUrls: ['./stuff2.component.scss']
})
export class Stuff2Component implements AdComponent{
  @Input() data: any;
}
