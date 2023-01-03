import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateDialogComponent } from './activate-dialog.component';

describe('OkDialogComponent', () => {
  let component: ActivateDialogComponent;
  let fixture: ComponentFixture<ActivateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
