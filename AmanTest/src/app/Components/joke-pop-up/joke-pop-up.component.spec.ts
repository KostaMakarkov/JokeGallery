import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokePopUpComponent } from './joke-pop-up.component';

describe('JokePopUpComponent', () => {
  let component: JokePopUpComponent;
  let fixture: ComponentFixture<JokePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
