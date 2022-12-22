import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { FakeAPIService } from 'src/app/fake-api.service';
import { FakeData } from 'src/app/fakeData';
import { ApiActions, ComponentActions } from '../state/index';
import { getFakeData, TableState } from '../state/table.selector';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit, OnDestroy {


  // testData$: Observable<fakeData[]> = this.store.select((state: any) => {console.log(state.table.fakeData); return state.table.fakeData});
  testData$: Observable<FakeData[]> = this.store.select(getFakeData);


  constructor(
    private store: Store<TableState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(ApiActions.loadAPI());
  }

  ngOnDestroy(): void {
    
  }

  resetTable(){
    this.store.dispatch(ComponentActions.resetTable())
  }

  restoreTable(){
    this.store.dispatch(ComponentActions.restoreTable())
  }

}
