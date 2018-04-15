import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddUserComponent } from './add-user.component';
import { DataTableModule } from 'primeng/datatable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GrowlModule } from 'primeng/growl';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { AddUserService } from './add-user.service';
import { ConfirmationService } from 'primeng/api';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let service: AddUserService;
  let confirmationService: ConfirmationService;
  let httpClient:HttpClient;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[ HttpClientModule,DataTableModule,GrowlModule,FormsModule,ConfirmDialogModule,BrowserAnimationsModule],
      providers:[  AddUserService,ConfirmationService]  
    
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);

    this.service = TestBed.get(AddUserService);
    
    this.confirmationService = TestBed.get(ConfirmationService);
    component = new AddUserComponent(service,confirmationService);
    component = fixture.componentInstance;

    
  });


  describe('Add User test cases', () => { 
    it('On init button test is ADD', () => { 
      component.onReset();
      expect(component.saveButtonString) 
          .toEqual('Add'); 
    });
    it('On reset click first_name should be set empty', () => { 
      component.onReset();
      expect(component.currentUser.first_Name) 
          .toEqual(''); 
    });

    it('On edit click button text changes to edit', () => { 
      component.onEditClick({user_ID:1,first_Name:'test',last_Name:'test',employee_ID:'test'});
      expect(component.saveButtonString) 
          .toEqual('Edit'); 
    });
    // it('On save', () => { 
    //   component.currentUser={user_ID:1,first_Name:'test',last_Name:'test',employee_ID:'test'};
    //   component.onSave({user_ID:1,first_Name:'test',last_Name:'test',employee_ID:'test'});
     
    //   expect(component.userList.length) 
    //       .toBeGreaterThanOrEqual(0); 
    // });
  });

  
  
});
