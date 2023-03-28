import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-stuff1',
  templateUrl: './stuff1.component.html',
  styleUrls: ['./stuff1.component.scss']
})
export class Stuff1Component implements AdComponent{
  @Input() data: any;
}
