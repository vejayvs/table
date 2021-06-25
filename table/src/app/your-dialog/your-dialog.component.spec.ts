import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDialogComponent } from './your-dialog.component';

describe('YourDialogComponent', () => {
  let component: YourDialogComponent;
  let fixture: ComponentFixture<YourDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
