import "../style.css";
import getOffset from "./getOffset";

function printOffset(event) {
    var offsetElem = document.getElementById("offset");
    let offset = getOffset(event);
    offsetElem.textContent = offset.toString();
}

document.addEventListener("click", printOffset);
