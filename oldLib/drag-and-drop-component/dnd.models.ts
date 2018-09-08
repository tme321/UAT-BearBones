import { ViewRef } from "@angular/core";

export interface BBVector {
    offsetX: number;
    offsetY: number;
}

export interface BBDragStartEvent {
    view: ViewRef;
    mouseOffset: BBVector;
}