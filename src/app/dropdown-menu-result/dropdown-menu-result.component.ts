import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu-result',
  templateUrl: './dropdown-menu-result.component.html',
  styleUrls: ['./dropdown-menu-result.component.css']
})
export class DropdownMenuResultComponent {

  selectedTeam = "";

  // onSelected(value : string): void {
  //   this.selectedTeam = value;
  // }

  // @ViewChild('teams') teams!: ElementRef;
  
  // onSelected2() : void {
  //   this.selectedTeam = this.teams.nativeElement.value
  // }

}
