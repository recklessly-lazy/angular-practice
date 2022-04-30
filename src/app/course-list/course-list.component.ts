import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';

import { Course } from './Course.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CourseListComponent
    implements
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy,
        OnChanges
{
    _courses!: Course[];
    @Input() content!: string;
    @Output() onRegister = new EventEmitter<string>();

    register(courseName: string) {
        console.log(`registering for ${courseName}`);
        this.onRegister.emit(courseName);
    }
    @Input() set courses(courses: Course[]) {
        this._courses = courses;
    }
    get courses() {
        return this._courses;
    }
    changeLog: any[] = [];
    constructor() {}
    ngOnInit() {
        console.log('Init');
    }
    ngDoCheck(): void {
        console.log('Change detected');
    }
    ngAfterContentInit(): void {
        console.log('After content init');
    }
    ngAfterContentChecked(): void {
        console.log('After content checked');
    }
    ngAfterViewInit(): void {
        console.log('After view init');
    }
    ngAfterViewChecked(): void {
        console.log('After view checked');
    }
    ngOnDestroy(): void {
        console.log('Destroy');
    }

    // ngOnInit(): void {}
    ngOnChanges(changes: SimpleChanges) {
        // console.log(`changes: ${JSON.stringify(changes)}`);
        for (const propName in changes) {
            const chng = changes[propName];
            const cur = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(
                `${propName}: currentValue = ${cur}, previousValue = ${prev}`
            );
        }
        console.log(`changelog = ${this.changeLog}`);
    }
}
