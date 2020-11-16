'use strict';
const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener("click",toggleOpenPanel));
panels.forEach(panel => panel.addEventListener("transitionend",toggleText))

function toggleOpenPanel() {
    this.classList.toggle("open");
}

function toggleText(e) {
    if(e.propertyName.includes("flex")) {
        this.classList.toggle("show-text");
    }
}


