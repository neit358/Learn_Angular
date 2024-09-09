import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examplev2Component } from './examplev2.component';

describe('Examplev2Component', () => {
  let component: Examplev2Component;
  let fixture: ComponentFixture<Examplev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examplev2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Examplev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
