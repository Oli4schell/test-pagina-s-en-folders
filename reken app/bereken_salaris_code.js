function berekenen() {
    //invoer---------------
    var wx = parseFloat(document.getElementById("getal1").value);
    var wy = parseFloat(document.getElementById("getal2").value);
    var bm = wx * wy * 4.33;
    document.getElementById("uitkomst").innerHTML = "uitkomst is: " + bm.toFixed(2) +"<br>";

    if (bm <= 2000) {
        var bel = bm / 100 * 30;
        document.getElementById("uitkomst").innerHTML += "totaal belasting is:" + bel.toFixed(2) +"<br>";
    } else if (bm <= 3000) {
        var bel = (bm - 2000) / 100 * 40 + 600;
        document.getElementById("uitkomst").innerHTML += "totaal belasting is:" + bel.toFixed(2) +"<br>";
    } else {
        var bel = (bm - 3000) / 100 * 50 + 1000;
        document.getElementById("uitkomst").innerHTML += "totaal belasting is:" + bel.toFixed(2) +"<br>";
    }

    var netto = bm - bel;
    document.getElementById("uitkomst").innerHTML += "Netto maandsalaris is:" + netto.toFixed(2) +"<br>";
}

function wis() {
    document.reken.reset();
    document.reken.wx.focus();
    document.getElementById("uitkomst").innerHTML = "";
}

function maakEvent() {
    document.getElementById("berekenen").onclick = berekenen;
    document.getElementById("wis").onclick = wis;
}
window.onload = maakEvent;