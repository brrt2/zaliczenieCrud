import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieFakturComponent } from './dodawanie-faktur.component';

describe('DodawanieFakturComponent', () => {
  let component: DodawanieFakturComponent;
  let fixture: ComponentFixture<DodawanieFakturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieFakturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieFakturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
