let click = document.getElementsByClassName("right"); //checkbox

let js = document.getElementsByClassName("js"); // decription and due date

for (let i = 0; i < click.length; i++) {
    click[i].addEventListener('click', function () {
        if (js[2 * i].style.textDecoration == "line-through") {
            js[2 * i].style.textDecoration = "none";
            js[(2 * i) + 1].style.textDecoration = "none";
            return;
        }
        js[2 * i].style.textDecoration = "line-through";
        js[(2 * i) + 1].style.textDecoration = "line-through";
    });
}
