const btns = document.querySelectorAll('.btn');
const screen = document.getElementById('Output');

for (x of btns) {
    x.addEventListener('click', (e) => {
        if (e.target.value === "=") {
            screen.value = eval(screen.value);
        } else if (e.target.value === "x") {
            screen.value += "*";
        } else if (e.target.value === "AC") {
            screen.value = "";
        } else if (e.target.value === "\u2297") {
            screen.value = screen.value.slice(0, -1);
        } else if (e.target.value === "%") {
            screen.value = screen.value / 100;
        } else {
            screen.value += e.target.value
        }
    })
}