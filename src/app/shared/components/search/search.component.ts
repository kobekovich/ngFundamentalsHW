import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  foundCrs: any;

  @Input() searchPlcH!: string;
  @Output() notifySearched = new EventEmitter();

  constructor(private searchCourse: CoursesStoreService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.searchCourse.setInput(f.value.searchInput);
  }
} 
