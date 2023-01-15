import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesGalleryComponent } from './jokes-gallery.component';

describe('JokesGalleryComponent', () => {
  let component: JokesGalleryComponent;
  let fixture: ComponentFixture<JokesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
