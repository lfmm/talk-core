import { Component } from '@angular/core';
import { LibService } from './../service/lib.service';

@Component({
  selector: 'my-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent {
  name = 'Angular Library';

  constructor(private _service: LibService) {
    this.name = _service.getMeaning().toString();
  }

  bClick = () => {
    this.name = 'What?!? And what does it mean?! Ahh... Beautiful!';
  }

  bClick_New = () => {
    console.log('wow');
    console.log('wow 2');
    console.log('wow 3');
  }

  bClick_NewFive = () => {
    console.log('new-5-wow');
  }

}
