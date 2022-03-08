import "../style.css";
import Pos from "./pos.js";

var lastPos;

function getOffset(event) {
    let nowPos = new Pos({ x: event.clientX, y: event.clientY });
    lastPos = lastPos || new Pos()

    let offset = nowPos.subtract(lastPos);

    lastPos = nowPos;
    return offset;
}

function printOffset(event) {
    let offsetElem = document.getElementById("offset");
    let offset = getOffset(event)
    offsetElem.textContent = offset.toString();
}

document.addEventListener("click", printOffset);
