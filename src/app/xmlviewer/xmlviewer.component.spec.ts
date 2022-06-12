import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XMLviewerComponent } from './xmlviewer.component';

describe('XMLviewerComponent', () => {
  let component: XMLviewerComponent;
  let fixture: ComponentFixture<XMLviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XMLviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XMLviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
