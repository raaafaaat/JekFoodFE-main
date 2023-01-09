import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  foods : Food[] =[]
 
  constructor(
    private foodService: FoodService,
     private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      console.log("id = ",id) ; 
      this.get(id);
    });
    
    console.log(this.foods);
  }
  get(id:number) {
    this.foodService.getAll(id).subscribe((data) => {
      this.foods = data;
    });
  }
}
