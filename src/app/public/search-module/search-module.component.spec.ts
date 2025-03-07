import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModuleComponent } from './search-module.component';

describe('SearchModuleComponent', () => {
  let component: SearchModuleComponent;
  let fixture: ComponentFixture<SearchModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
