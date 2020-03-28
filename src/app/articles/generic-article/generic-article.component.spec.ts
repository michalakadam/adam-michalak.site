import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericArticleComponent } from './generic-article.component';

describe('GenericArticleComponent', () => {
  let component: GenericArticleComponent;
  let fixture: ComponentFixture<GenericArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
