import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampcomponentComponent } from './sampcomponent.component';

describe('SampcomponentComponent', () => {
  let component: SampcomponentComponent;
  let fixture: ComponentFixture<SampcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
