import { Component, OnInit } from '@angular/core';
import { trigger, style, transition,  animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform:'transalateY(-75px)', offset:0}),
            style({opacity: 0.5, transform:'transalateY(35px)', offset:0.3}),
            style({opacity: 1, transform:'transalateY(0px)', offset:1}),
          ])) ]), {optional:true} )
       ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemNumber : number = 4;
  btnText    : string = "Add item";
  goalText   : string;
  goals : any = [];

  constructor(private dataService: DataService) {

   }

  ngOnInit() {
    this.dataService.goal.subscribe(res => this.goals = res);
    this.itemNumber = this.goals.length;
    
    this.dataService.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = ''
    this.itemNumber = this.goals.length;
    this.dataService.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.dataService.changeGoal(this.goals);
  }

}
