import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BROWSER_STORAGE } from 'src/app/auth/services/session-storage.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { UserStateFacade } from 'src/app/user/store/user.facade';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [{
    provide: BROWSER_STORAGE,
    useValue: 'WindowToken'
  }]
})
export class CoursesComponent implements OnInit {
  cc!: boolean;
  
  buttonText = {
    addCourse: 'Add new course',
    openModal: 'Open dialog'
  };

  addCourseInfo = {
    title: 'Your list is empty',
    text: `Please use 'Add new course' button to add your first course`
  };

  searchPlaceholder = 'Search me';
  message="";

  constructor(
    public dialog: MatDialog,
    private courses: CoursesStoreService,
    private router: Router,
    private facades: UserStateFacade
  ) { }

  ngOnInit() {
    this.facades.getCurrentUser();
    this.facades.isAdmin$.subscribe();
    
    this.courses.courses$.subscribe(data => this.cc = data.length === 0);
  }

  goAdd() {
    this.router.navigate(['courses/add']);
  }

  openDialog() {
    const config = {
      height: '35%',
      width: '35%'
    };
    this.dialog.open(DialogComponent, config);
  }
}
