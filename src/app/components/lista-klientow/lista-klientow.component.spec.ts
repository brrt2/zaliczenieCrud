import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientowComponent } from './lista-klientow.component';

describe('ListaKlientowComponent', () => {
  let component: ListaKlientowComponent;
  let fixture: ComponentFixture<ListaKlientowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaKlientowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKlientowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
