import { Component, Input, OnInit } from '@angular/core';
import { CardsInfo } from 'src/app/shared/models/cardsInfo';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() list!: CardsInfo[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
