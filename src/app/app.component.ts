import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ColorDirective } from './color.directive';
import { Course } from './course-list/Course.model';
import { TimerComponent } from './timer/timer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) {

    }
    @ViewChild('timer') timerHead!: ElementRef;
    timerChild!: HTMLParagraphElement;
    initTimerChild() {
        this.timerChild = this.timerHead.nativeElement
    }
    ngAfterViewInit() {
        // console.log("inside ngafterview init");
        // // this.timerHead.style.fontSize = "30"
        // this.initTimerChild()
        // this.timerChild.style.fontSize = "30px"
        // this.timerChild.innerHTML = this.timerChild.textContent === null ? "" : this.timerChild.textContent.toUpperCase()
        // this.timerChild.style.textShadow = "2px 2px 5px #e11"
        // console.log("timer head", this.timerHead);
    }

    @ViewChild(ColorDirective) colorDirective!: ColorDirective;
    modifyColor(color: string) {
        this.colorDirective.modifyColor(color)
    }


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
