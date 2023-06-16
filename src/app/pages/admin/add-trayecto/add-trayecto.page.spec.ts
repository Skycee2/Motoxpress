import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddTrayectoPage } from './add-trayecto.page';

describe('AddTrayectoPage', () => {
  let component: AddTrayectoPage;
  let fixture: ComponentFixture<AddTrayectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrayectoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTrayectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});