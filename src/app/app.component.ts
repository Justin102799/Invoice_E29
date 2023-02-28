import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from './service/item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Invoice';
  items : any []= [];

  constructor(private readonly itemService : ItemServiceService) { }
  ngOnInit() { 
    this.itemService.getData().subscribe(res =>{
      this.items = res;
    })
  }
  get getTotal(){
    return this.items.reduce((total,current)=>{
      total = total + (current.price * current.quantity)
      return total
    },0)
  }
  getTotalPerItem(quantity : number, price : number){
    return quantity * price;
  }
}
