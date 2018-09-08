import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExplantionComponent } from './project-explantion.component';

describe('ProjectExplantionComponent', () => {
  let component: ProjectExplantionComponent;
  let fixture: ComponentFixture<ProjectExplantionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectExplantionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectExplantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
