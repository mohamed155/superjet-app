import {Component, Input} from '@angular/core';

@Component({
  selector: 'seat-button',
  templateUrl: 'seat-button.html'
})
export class SeatBtn {

  @Input('status') status = 'available';

  constructor() {

  }

  select() {
    if (this.status === 'selected') this.status = 'available';
    else if (this.status != 'reserved') this.status = 'selected';
  }

}
