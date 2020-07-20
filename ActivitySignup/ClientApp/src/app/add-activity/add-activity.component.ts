import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivitiesService, activityAlreadyExistsAsyncValidator } from '../services/activities.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  title = new FormControl('', Validators.required, activityAlreadyExistsAsyncValidator(this.actSvc));
  constructor(private actSvc: ActivitiesService, private dialogRef: MatDialogRef<AddActivityComponent>) { }

  ngOnInit(): void {
    //setInterval(() => { console.log('title.value', this.title.value); console.log('title.errors', this.title.errors); }, 1000);
  }
  cancel(): void {

  }
  saveActivity(): void {
    let act = new Activity(this.title.value);
    this.actSvc.saveActivity(act);
  }
}
