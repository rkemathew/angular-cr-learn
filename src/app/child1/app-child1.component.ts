import { Component, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnInit, OnDestroy, DoCheck, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
    selector: 'app-child1',
    templateUrl: './app-child1.component.html',
    styleUrls: ['./app-child1.component.css'],
})
export class AppChild1Component implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
    title = 'AppChild1Component';
    child1Model = '';
    private _subs$: Subscription[] = [];

    @ViewChild('input') input: ElementRef;

    constructor(
        private _zone: NgZone,
    ) {}

    ngOnInit() {
        console.log(this.title + ' ngOnInit() fired');
        this.manuallyBindToViewEvents();
    }

    ngOnDestroy() {
        console.log(this.title + ' ngOnDestroy() fired');
        this._subs$.forEach(sub => sub.unsubscribe());
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

    onChild1ModelChanges(event) {
        console.log('onChild1ModelChanges() event fired', event);
    }

    manuallyBindToViewEvents() {
        this.subscribeToInput();
    }

    subscribeToInput() {
        let sub$: Subscription;

        this._zone.runOutsideAngular(() => {
            sub$ = fromEvent(this.input.nativeElement, 'keyup').subscribe(e => {
                console.log('Skipping Change Detection', e);
            });
        });

        this._subs$.push(sub$);
    }
}
