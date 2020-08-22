import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalajidemoComponent } from './balajidemo.component';

describe('BalajidemoComponent', () => {
  let component: BalajidemoComponent;
  let fixture: ComponentFixture<BalajidemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalajidemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalajidemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
