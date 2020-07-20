import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionsService } from '../services/actions.service';
import { Action } from '../models/action';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public actions: Observable<Action[]>;
  constructor(private actionsSvc: ActionsService) {
    this.actions=this.actionsSvc.actions
  }

  ngOnInit(): void {
  }

}
