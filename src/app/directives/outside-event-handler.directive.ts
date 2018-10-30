import { Directive, Input, Output, ElementRef, NgZone } from "@angular/core";
import { EventEmitter } from "events";

@Directive({
    selector: '[outSideEventHandler]'
})
export class OutSideEventHandlerDirective {
    @Input() event: string = 'click';
    // @Output('outSideEventHandler') emitter = new EventEmitter();
    @Output() eventHandler = new EventEmitter();
    private _handler: Function;
    constructor(private _ngZone: NgZone, private el: ElementRef) { }

    ngOnInit() {
        console.log('In ngOnInit of OutsideEventHandlerDirective', this.eventHandler);
        this._ngZone.runOutsideAngular(() => {
            const nativeElement = this.el.nativeElement;
            this._handler = ($event) => {
                this.eventHandler.emit($event);
            }

            nativeElement.addEventListener(this.event, this._handler, false);
        });
    }

    ngOnDestory() {
        this.el.nativeElement.removeEventListener(this.event, this._handler);
    }
}
