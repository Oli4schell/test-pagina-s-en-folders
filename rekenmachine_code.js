function plus() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var uit = wx + wy;
    if (Number.isNaN(getal1) || Number.isNaN(getal2)) {
        document.getElementById("uitkomst").innerHTML = "U moet wel getallen invoeren";
    } else {
        document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
    }
}

function min() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var uit = wx - wy;
    document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
}

function keer() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var uit = wx * wy;
    document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
}

function delen() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var uit = wx / wy;
    if (wy == 0) {
        document.getElementById("uitkomst").innerHTML = "error kan niet delen door 0";
    } else {
        document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
    }
}

function macht2() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var uit = Math.pow(wx, 2);
    document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
}

function wortel() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var uit = Math.sqrt(wx);
    if (wx <= 0) {
        document.getElementById("uitkomst").innerHTML = "error kan een wortel hebben onder 0";
    } else {
        document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
    }
}

function machttot() {
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var uit = Math.pow(wx, wy);
    document.getElementById("uitkomst").innerHTML = "uitkomst is: " + uit;
}

function tafel() {
    var X = parseFloat(document.getElementById("getal1").value);
    var I;
    for (I = 1; I <= 10; I++) {
        document.getElementById("uitkomst").innerHTML +=
            X + " x " + I + " = " + X * I + "<br>";
    }
}



function Schonen() {
    document.reken.reset();
    document.reken.getal1.focus();
    document.getElementById("uitkomst").innerHTML = "";
}

function maakEvent() {
    document.getElementById("plus").onclick = plus;
    document.getElementById("min").onclick = min;
    document.getElementById("keer").onclick = keer;
    document.getElementById("delen").onclick = delen;
    document.getElementById("macht2").onclick = macht2;
    document.getElementById("wortel").onclick = wortel;
    document.getElementById("machttot").onclick = machttot;
    document.getElementById("tafel").onclick = tafel;
    document.getElementById("kop").onclick = Schonen;
}
window.onload = maakEvent;
