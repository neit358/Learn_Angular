import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examplev3Component } from './examplev3.component';

describe('Examplev3Component', () => {
  let component: Examplev3Component;
  let fixture: ComponentFixture<Examplev3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examplev3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Examplev3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
