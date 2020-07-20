import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './activities/activities.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitiesService } from './services/activities.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    SubscriptionsComponent,
    SubscribeComponent,
    ActivityComponent,
    HeaderComponent,
    AddActivityComponent,
    AddSubscriptionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [ActivitiesService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents:[AddActivityComponent]
})
export class AppModule { }
