import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIconComponent } from './a-icon.component';

describe('AIconComponent', () => {
  let component: AIconComponent;
  let fixture: ComponentFixture<AIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
