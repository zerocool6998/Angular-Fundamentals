import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuResultComponent } from './dropdown-menu-result.component';

describe('DropdownMenuResultComponent', () => {
  let component: DropdownMenuResultComponent;
  let fixture: ComponentFixture<DropdownMenuResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuResultComponent]
    });
    fixture = TestBed.createComponent(DropdownMenuResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
