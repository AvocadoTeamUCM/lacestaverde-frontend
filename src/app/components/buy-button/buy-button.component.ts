import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
})
export class BuyButtonComponent  implements OnInit {

  @Input() public cuantity:number = 0;
  public buyProductCheck:Boolean = false;

  constructor() {
  }
  
  ngOnInit() {
    if(this.cuantity>0){
      this.buyProductCheck=true;
    }
    return;
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_buyProduct(num:number){
    this.buyProductCheck=true;
    this.cuantity += num;
    return;
  }

  buttonClic_noBuyProduct(){
    this.buyProductCheck=false;
    this.cuantity = 0;
    return;
  }

  pressKey_onEnter(){
    if(this.cuantity == 0 || this.cuantity == null){
      this.cuantity=0;
      this.buyProductCheck=false;
    }
    return;
  }



}
