import { Component, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnInit, OnDestroy, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
    title = 'AppComponent';
    parentModal = '';

    constructor(
        private cdr: ChangeDetectorRef,
    ) {
//        this.cdr.detach();
    }

    ngOnInit() {
        console.log(this.title + ' ngOnInit() fired');
    }

    ngOnDestroy() {
        console.log(this.title + ' ngOnDestroy() fired');
    }

    ngDoCheck() {
        console.log(this.title + ' ngDoCheck() fired');
    }

    ngAfterViewInit() {
        console.log(this.title + ' ngAfterViewInit() fired');
    }

    ngAfterViewChecked() {
        console.log(this.title + ' ngAfterViewChecked() fired');
    }

    ngAfterContentInit() {
        console.log(this.title + ' ngAfterContentInit() fired');
    }

    ngAfterContentChecked() {
        console.log(this.title + ' ngAfterContentChecked() fired');
    }
}