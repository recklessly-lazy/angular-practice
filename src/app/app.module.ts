import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { ColorDirective } from './color.directive';

@NgModule({
    declarations: [
        AppComponent,
        SampleComponent,
        RepeatDirective,
        MessageDirective,
        CourseListComponent,
        TimerComponent,
        ColorDirective,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
