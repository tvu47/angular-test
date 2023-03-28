import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { Stuff1Component } from './stuff1/stuff1.component';
import { Stuff2Component } from './stuff2/stuff2.component';

@Injectable()
export class AdService {

  getAds() {
    return [
      new AdItem(
        Stuff1Component,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        Stuff1Component,
        { name: 'Dr. IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        Stuff2Component,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        Stuff2Component,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}
