import { Component, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Course } from './course-list/Course.model';
import { TimerComponent } from './timer/timer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

    @ViewChild(TimerComponent) timerComponent!: TimerComponent;
    isRunning!: boolean;
    startTimer() {
        this.timerComponent.begin();
        this.isRunning = true
    }
    stopTimer() {
        this.timerComponent.end()
        this.isRunning = false
    }
    title = 'practice-app-1';
    show!: boolean;
    private _registrationMessage!: string;
    setCourseRegMessage(courseName: string) {
        this._registrationMessage = `Your registration was successful!, you have enrolled for ${courseName} course`;
    }
    content: string = 'Child component';

    courseList: Course[] = [
        { courseId: 1, courseName: 'TypeScript' },
        { courseId: 2, courseName: 'Angular' },
        { courseId: 3, courseName: 'Node JS' },
        { courseId: 4, courseName: 'React JS' },
    ];

    public get registrationMessage() {
        return this._registrationMessage;
    }
    public set registrationMessage(message: string) {
        this._registrationMessage = message;
    }
}
