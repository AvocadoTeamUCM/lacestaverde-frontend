import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent  implements OnInit {

  @Output() event_routerToBusiness = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
    emitEvent_goBusiness(){
      this.event_routerToBusiness.emit();
      return;
    }

}
