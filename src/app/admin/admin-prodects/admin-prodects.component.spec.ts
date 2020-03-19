import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdectsComponent } from './admin-prodects.component';

describe('AdminProdectsComponent', () => {
  let component: AdminProdectsComponent;
  let fixture: ComponentFixture<AdminProdectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
