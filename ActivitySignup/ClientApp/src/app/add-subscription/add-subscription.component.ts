import { Component, OnInit, Inject } from '@angular/core';
import { Activity } from '../models/activity';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { alreadySubscribedAsyncValidator, SubscriptionsService } from '../services/subscriptions.service';
import { Subscription } from '../models/subscription';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required, alreadySubscribedAsyncValidator(this.subService,this.activity)),
    comments: new FormControl('')
  });
  constructor(@Inject(MAT_DIALOG_DATA) public activity: Activity, private subService: SubscriptionsService,
   private dialogRef: MatDialogRef<AddSubscriptionComponent>) { }

  ngOnInit(): void {
  }
  public addSubscription(): void {
    let model: Subscription = {
      activityId: this.activity.id,
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      emailAddress: this.form.get('email').value,
      comments: this.form.get('comments').value
    };
    this.subService.addSubscription(model);
    this.dialogRef.close();
  }
}
