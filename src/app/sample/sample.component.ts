import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css'],
    template: `Welcome to {{ course }}`,
})
export class SampleComponent implements OnInit {
    isBordered!: boolean;
    bgcolor: string = 'yellow';
    courses: any[] = [
        { id: 1, name: 'TypeScript' },
        { id: 2, name: 'Angular' },
        { id: 3, name: 'Node JS' },
        { id: 1, name: 'TypeScript' },
    ];
    obj: any = {
        id: 1,
        sf: 'sfg',
    };

    isAuth!: boolean;
    isSubmitted!: boolean;
    name: string = '';
    choice: number = 0;

    incChoice() {
        this.choice++;
    }

    onFormSubmit(event: any) {
        this.isSubmitted = true;
        event.preventDefault();
        let name = event.target.name.value;
        let password = event.target.password.value;
        console.log(`name: ${name}, password: ${password}`);
        this.isAuth = name === 'admin' && password === 'admin' ? true : false;
        this.name = name;
    }
    constructor() {}

    ngOnInit(): void {}
}
