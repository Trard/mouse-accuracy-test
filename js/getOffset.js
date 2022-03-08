import Pos from "./Pos.js";

var lastPos;

export default function getOffset(event) {
    let nowPos = new Pos({ x: event.clientX, y: event.clientY });
    lastPos = lastPos || new Pos()

    let offset = nowPos.subtract(lastPos);

    lastPos = nowPos;
    return offset;
}