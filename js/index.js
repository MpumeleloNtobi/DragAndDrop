const draggable = document.querySelector(".shape")

const drag = (event) => {
    draggable.style.top = event.pageY + "px";
    draggable.style.left = event.pageX + "px";
    console.log(`(${event.pageX}, ${event.pageY})`)
};

draggable.addEventListener(
    "mousedown",
    () => {
        window.addEventListener(
            "mousemove",
            drag
        )
    }
)

window.addEventListener(
    "mouseup",
    () => {
        window.removeEventListener(
            "mousemove",
            drag
        )
    }
)