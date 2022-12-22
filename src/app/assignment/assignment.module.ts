import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment/assignment.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table'  
import { StoreModule } from '@ngrx/store';
import { tableReducer } from './state/table.reducer';
import { FakeAPIService } from '../fake-api.service';
import { EffectsModule } from '@ngrx/effects';
import { TableEffects } from './state/table.effect';
import { MatButtonModule } from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AssignmentComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    StoreModule.forFeature('table', tableReducer),
    EffectsModule.forFeature([TableEffects])
  ],
  exports: [
    AssignmentComponent
  ],
  providers: [
  ]
})
export class AssignmentModule { }
