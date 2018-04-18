import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../entities/project';
import { Users } from '../../entities/users';
import { AddProjectService } from './add-project.service';

@Component({
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.css'],
    providers:[AddProjectService]
})

export class AddProjectComponent implements OnInit {

    projectsList: Project[];
    usersList: Users[];

    public addOrUpdateBtn: string = 'Add';


    private addProjectForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private service: AddProjectService) {
    }

    ngOnInit() {

        this.addProjectForm = this.formBuilder.group({
            projectNameControl: [null, Validators.required],
            checkDatesControl: [null],
            startDateControl: [null],
            endDateControl: [null],
            priorityControl: [null, Validators.required],
            selectedManagerControl: [null, Validators.required],
            selectedManagerName: [null, Validators.required],
            priorityDisplayControl: [null]
        });
        this.getUsers();
        this.getAllProject();

    }

    getUsers() {
    this.usersList = [];
        this.service.getUsers()
            .subscribe(data => { this.usersList = data; });
    }
    getAllProject() {
    this.projectsList = [];
        this.service.getAllProject()
            .subscribe(data => { this.projectsList = data; });
    }


    updateProject(project: Project) {
        this.addProjectForm = this.formBuilder.group({
            projectNameControl: [project.ProjectName, Validators.required],
            checkDatesControl: [project.End_Date === null && project.Start_Date === null ? false : true],
            startDateControl: [project.Start_Date],
            endDateControl: [project.End_Date],
            priorityControl: [project.Priority, Validators.required],
            selectedManagerControl: [project.Manager_ID, Validators.required],
            selectedManagerName: [project.Manager_Name, Validators.required],
            priorityDisplayControl: [null]
        });

    }

   

    addProjectReset() {
        this.addProjectForm.reset();
        this.addOrUpdateBtn = 'Add';
    }

    addProjectSubmit() {

     }
    


    assignManager(userId: number, mgrName: string) {

        this.addProjectForm.patchValue({
            selectedManagerControl: userId,
            selectedManagerName: mgrName
        });
    }

    // suspendProject(projId) {

    // }

}