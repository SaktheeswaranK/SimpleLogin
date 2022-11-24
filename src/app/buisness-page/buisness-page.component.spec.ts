import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessPageComponent } from './buisness-page.component';

describe('BuisnessPageComponent', () => {
  let component: BuisnessPageComponent;
  let fixture: ComponentFixture<BuisnessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuisnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
