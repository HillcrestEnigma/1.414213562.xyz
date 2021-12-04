let x = 28284271240n;
let z = 105527215600n;

function calc() {
    for (let y = 9n; y >= 0; y--) {
        if ((x+y)*y <= z) {
            z = (z - (x+y)*y)*100n;
            x = (x+y*2n)*10n;

            document.getElementById("calc").innerHTML += y.toString();
            break;
        }
    }
}

function setup() {
    setInterval(calc, 75);
}
