
import { Directive, ElementRef, Renderer, HostListener, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
    selector: '[appPrefixHightlight]',
})
export class HighlightDirective implements OnInit {
   // 节点
   private element: ElementRef;
   private _render: Renderer;
   // 默认颜色
   private _defaultColor = 'red';

    constructor(elem: ElementRef, renderer: Renderer) {
        this.element = elem.nativeElement;
        this._render = renderer;
        // renderer.setElementStyle(elem.nativeElement, 'backgroundColor', 'blue');
    }
    // 引入自定义属性
    // tslint:disable-next-line:no-input-rename
    @Input('appPrefixHightlight') highlightColor: string;
    @Output() scroll = new EventEmitter();

    @HostListener('mouseenter')
    onMouseEnter(i) {
        console.log(i);
        this._render.setElementStyle(this.element, 'backgroundColor', this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this._render.setElementStyle(this.element, 'backgroundColor', null);
    }
    ngOnInit() {}
}
