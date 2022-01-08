import { Point } from "../types/Point";

export const checkLimits = (origin: Point) => {
    if (
        //en el eje de las x tienes que estar entre 1020 y 0; en el eje de las y entre 1024 y 0
        origin.x < 500 &&
        origin.x > 0 &&
        origin.y < 500 &&
        origin.y > 0
    ) {
        return true;
    }
    return false;
};