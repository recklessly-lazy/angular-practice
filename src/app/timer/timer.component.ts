import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-timer",
    templateUrl: "./timer.component.html",
    styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit {
    flag!: boolean;
    count: number = 0;
    constructor() { }
    begin() {
        this.flag = true;
        let start = setInterval(() => {
            if (this.flag === false) {
                clearInterval(start);
            }
            this.count++;
        }, 1000);
    }
    end() {
        this.flag = false
    }
    ngOnInit(): void { }
}
