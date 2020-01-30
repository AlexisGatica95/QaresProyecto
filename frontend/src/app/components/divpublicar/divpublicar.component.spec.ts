import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivpublicarComponent } from './divpublicar.component';

describe('DivpublicarComponent', () => {
  let component: DivpublicarComponent;
  let fixture: ComponentFixture<DivpublicarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivpublicarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivpublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
