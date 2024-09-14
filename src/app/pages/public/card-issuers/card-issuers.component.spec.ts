import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIssuersComponent } from './card-issuers.component';

describe('CardIssuersComponent', () => {
  let component: CardIssuersComponent;
  let fixture: ComponentFixture<CardIssuersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIssuersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIssuersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
