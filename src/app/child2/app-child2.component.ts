import { Component, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnInit, OnDestroy, DoCheck } from '@angular/core';

@Component({
    selector: 'app-child2',
    templateUrl: './app-child2.component.html',
    styleUrls: ['./app-child2.component.css']
})
export class AppChild2Component implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
    title = 'AppChild2Component';
    child2Model = '';

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
