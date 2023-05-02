import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { Business } from 'src/app/models/business';
import { BusinessServiceService } from 'src/app/services/business/business-service.service';


@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent  implements OnInit, OnChanges {

  @Output() event_routerToBusiness = new EventEmitter<void>();
  @Input() businessUser!: Business 

  business!: Business
  imageURL = ''
  
  constructor(private service: BusinessServiceService) { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.business = this.businessUser
    this.imageURL = this.service.imageURL
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
    emitEvent_goBusiness(){
      this.event_routerToBusiness.emit();
      return;
    }

}
