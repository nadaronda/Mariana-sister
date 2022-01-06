
import { Point } from "./Point";

export interface IActor {
    origin: Point;
    position: Point;
    speed?: number;
    update: (delta: number) => void;
    initialize?: () => void;
    keyboard_event: (key: string) => void;
    keyboard_event_down?: (key: string) => void;
    keyboard_event_up?: (key: string) => void;
    draw: (delta: number, ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IActor {
    origin!: Point;
    position!: Point;
    contructor(origin: Point) {
        this.origin = origin;
    }
    update(delta: number) { }
    draw(delta: number, ctx: CanvasRenderingContext2D) { }
    keyboard_event(key: string) { }
}

export type Size = { w: number, h: number }