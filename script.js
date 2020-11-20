'use strict';
const panels = document.querySelector(".flex-panels");

panels.addEventListener('click', (e) => {
    const panel = e.target.closest('li');
    if(panel) {
        toggleOpenPanel(panel);
    }
})

panels.addEventListener('transitionend', (e) => {
    const panel = e.target.closest('li');
    if(panel && e.propertyName.includes('flex')) {
        toggleText(panel);
    }
})

function toggleOpenPanel(panel) {
    panel.classList.toggle("open");
}

function toggleText(element) {
        element.classList.toggle("show-text");
}


