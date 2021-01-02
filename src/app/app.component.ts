import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'dados';
   img1 = '../assets/img/dice1.png';
   img2 = '../assets/img/dice2.png';
   aleatorio!: number;
   aleatorio2!: number;
   iguales = false;

  dados(): void {
      this.aleatorio = Math.round(Math.random()*5)+1;
      this.aleatorio2 = Math.round(Math.random()*5)+1;
      console.log(this.aleatorio);
      console.log(this.aleatorio2);
      
      this.img1 = '../assets/img/dice'+this.aleatorio+'.png';
      this.img2 = '../assets/img/dice'+this.aleatorio2+'.png';

      if(this.aleatorio === this.aleatorio2 ){
        this.iguales = true;
      }else{
        this.iguales = false;
      }
      
      
  }


}
