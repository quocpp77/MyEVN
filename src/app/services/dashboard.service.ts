import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  areas() {
    return [{
      name: 'CN-XD',
      data: [502, 635, 709, 847, 902, 1034, 1200]
    }, {
      name: 'TM-DV',
      data: [106, 107, 111, 133, 151, 167, 186]
    }, {
      name: 'NN-LN-TS',
      data: [163, 203, 276, 308, 447, 529, 628]
    }, {
      name: 'NH-KS',
      data: [180, 210, 340, 460, 539, 618, 701]
    }, {
      name: 'Khác',
      data: [22, 23, 24, 26, 28, 30, 36]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pies() {
    return [{
      name: 'CN-XD',
      y: 1268,
      sliced: true,
      selected: true
    }, {
      name: 'TM-DV',
      y: 186
    }, {
      name: 'NN-LN-TS',
      y: 628
    }, {
      name: 'NH-KS',
      y: 701
    }, {
      name: 'Khác',
      y: 36
    }];
  }

}
