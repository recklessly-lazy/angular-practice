import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { ColorDirective } from './color.directive';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component'


@NgModule({
    declarations: [
        AppComponent,
        SampleComponent,
        RepeatDirective,
        MessageDirective,
        CourseListComponent,
        TimerComponent,
        ColorDirective,
        RegistrationFormComponent,
        BookComponent,
        ErrorComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
