import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailModalPagePage } from './detail-modal-page.page';

describe('DetailModalPagePage', () => {
  let component: DetailModalPagePage;
  let fixture: ComponentFixture<DetailModalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailModalPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
