import getOffset from "./getOffset.js";

function printOffset(event) {
    var offsetElem = document.getElementById("offset");
    let offset = getOffset(event);
    offsetElem.textContent = offset.toString();
}

document.addEventListener("click", printOffset);
