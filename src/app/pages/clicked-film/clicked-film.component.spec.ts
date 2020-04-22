import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickedFilmComponent } from './clicked-film.component';

describe('ClickedFilmComponent', () => {
  let component: ClickedFilmComponent;
  let fixture: ComponentFixture<ClickedFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickedFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickedFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
