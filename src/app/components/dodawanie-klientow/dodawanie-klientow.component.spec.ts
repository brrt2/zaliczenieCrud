import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieKlientowComponent } from './dodawanie-klientow.component';

describe('DodawanieKlientowComponent', () => {
  let component: DodawanieKlientowComponent;
  let fixture: ComponentFixture<DodawanieKlientowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieKlientowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieKlientowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
