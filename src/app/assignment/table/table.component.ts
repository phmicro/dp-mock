import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FakeData } from 'src/app/fakeData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() dataSource!: FakeData[];

  @Output() resetTableEvent = new EventEmitter<void>();
  @Output() restoreTableEvent = new EventEmitter<void>();

  cleared: boolean = false;
  displayedColumns: string[] = ['id', 'description'];


  resetTable(){
    this.cleared = !this.cleared;
    this.resetTableEvent.emit();
  }

  restoreTable(){
    this.cleared = !this.cleared;
    this.restoreTableEvent.emit();
  }
}
