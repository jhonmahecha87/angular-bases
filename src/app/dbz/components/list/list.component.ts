import { Component, ComponentFactoryResolver, EventEmitter, Input, Output} from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: character[] = [{
    name: '',
    power: 0
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if ( !id ) return;

    this.onDelete.emit(id);
  }

}
