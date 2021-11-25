var buttons;
var aantalGokkenTotaal = 0;
var aantalGokkenGoed = 0;
var aantalTotaleLettersGoed = 0;
var maxAantalLevens = 12;
var gekozenLetter;
var geradenLetters = [];

var woord = new Array(165);

woord[0] = "afvalsortering";
woord[1] = "aandeelkoersen";
woord[2] = "airconditioner";
woord[3] = "amandelbroodje";
woord[4] = "antiautoritair";
woord[5] = "antislipcursus";
woord[6] = "alarmsituaties";
woord[7] = "bagagekluisjes";
woord[8] = "balanceerkunst";
woord[9] = "bamboescheuten";
woord[10] = "bankovervallen";
woord[11] = "basiscollectie";
woord[12] = "beargumenteren";
woord[13] = "betaalautomaat";
woord[14] = "camerabewaking";
woord[15] = "campingstoelen";
woord[16] = "carbidschieten";
woord[17] = "champignonsoep";
woord[18] = "chauvinistisch";
woord[19] = "chocoladepasta";
woord[20] = "cocktailglazen";
woord[21] = "dakconstructie";
woord[22] = "darttoernooien";
woord[23] = "decorontwerpen";
woord[24] = "defragmenteren";
woord[25] = "denkspelletjes";
woord[26] = "dierenvrienden";
woord[27] = "digitalisering";
woord[28] = "economiestudie";
woord[29] = "eenmansbedrijf";
woord[30] = "effectenhandel";
woord[31] = "eindexamenjaar";
woord[32] = "energiegebruik";
woord[33] = "eredivisieclub";
woord[34] = "erevoorzitters";
woord[35] = "fabrieksgebouw";
woord[36] = "festivalganger";
woord[37] = "fietsbruggetje";
woord[38] = "filmfragmenten";
woord[39] = "flessenopeners";
woord[40] = "fluweelachtig";
woord[41] = "forensentrein";
woord[42] = "garantiebewijs";
woord[43] = "gastenverblijf";
woord[44] = "geactualiseerd";
woord[45] = "geconcentreerd";
woord[46] = "genotsmiddelen";
woord[47] = "geparaffineerd";
woord[48] = "genenonderzoek";
woord[49] = "halogeenlampen";
woord[50] = "hamburgerketen";
woord[51] = "handelsoverleg";
woord[52] = "hardrockmuziek";
woord[53] = "hekkensluiters";
woord[54] = "huisvuilzakken";
woord[55] = "huwelijksdatum";
woord[56] = "ijshockeyclubs";
woord[57] = "ijzersmelterij";
woord[58] = "importgoederen";
woord[59] = "incassobureaus";
woord[60] = "individualisme";
woord[61] = "industriehaven";
woord[62] = "informatiebron";
woord[63] = "inkjetprinters";
woord[64] = "jaarcontracten";
woord[65] = "jachtseizoenen";
woord[66] = "jazzmuzikanten";
woord[67] = "jeugdcommissie";
woord[68] = "joggingbroeken";
woord[69] = "juryvoorzitter";
woord[70] = "juwelierszaken";
woord[71] = "kaartenhouders";
woord[72] = "kabelbedrijven";
woord[73] = "kampioensbeker";
woord[74] = "kanovereniging";
woord[75] = "klimaatoverleg";
woord[76] = "klokkenluiders";
woord[77] = "knoflooksauzen";
woord[78] = "lagedrukgebied";
woord[79] = "lampionoptocht";
woord[80] = "laptopcomputer";
woord[81] = "lawaaischopper";
woord[82] = "leeftijdsgroep";
woord[83] = "lotingssysteem";
woord[84] = "linkermuisknop";
woord[85] = "maatschappijen";
woord[86] = "marketingstunt";
woord[87] = "massaproductie";
woord[88] = "meetresultaten";
woord[89] = "milieuaspecten";
woord[90] = "modelvliegtuig";
woord[91] = "ministerposten";
woord[92] = "nabestellingen";
woord[93] = "natuurgebieden";
woord[94] = "nederzettingen";
woord[95] = "netwerkprinter";
woord[96] = "nierontsteking";
woord[97] = "nonnenklooster";
woord[98] = "notariskantoor";
woord[99] = "observatieteam";
woord[100] = "oefenwedstrijd";
woord[101] = "oesterkwekerij";
woord[102] = "omschrijvingen";
woord[103] = "ondankbaarheid";
woord[104] = "oogverblindend";
woord[105] = "onverbeterlijk";
woord[106] = "palmenstranden";
woord[107] = "papegaaiduiker";
woord[108] = "passievruchten";
woord[109] = "penaltystippen";
woord[110] = "personeelschef";
woord[111] = "pitbullterrier";
woord[112] = "politieagenten";
woord[113] = "quotumregeling";
woord[114] = "quadrafonische";
woord[115] = "rapportcijfers";
woord[116] = "receptenboekje";
woord[117] = "reclamefolders";
woord[118] = "reuzensprongen";
woord[119] = "rijksambtenaar";
woord[120] = "rijvaardigheid";
woord[121] = "roerbakgroente";
woord[122] = "salarisschalen";
woord[123] = "samengebundeld";
woord[124] = "sapcentrifuges";
woord[125] = "schaduwplekken";
woord[126] = "scheidsrechter";
woord[127] = "sectorwerkstuk";
woord[128] = "seizoenkaarten";
woord[129] = "tafelbiljarten";
woord[130] = "tandenborstels";
woord[131] = "taxatierapport";
woord[132] = "technieklokaal";
woord[133] = "telecomwinkels";
woord[134] = "theatertournee";
woord[135] = "toegangsverbod";
woord[136] = "uitbraakpoging";
woord[137] = "uitgaanscentra";
woord[138] = "uitschuiftafel";
woord[139] = "uitwedstrijden";
woord[140] = "urendeclaratie";
woord[141] = "universiteiten";
woord[142] = "uitzendkantoor";
woord[143] = "vakantieparken";
woord[144] = "vampierverhaal";
woord[145] = "vaststellingen";
woord[146] = "veldcompetitie";
woord[147] = "vergiftigingen";
woord[148] = "verduidelijken";
woord[149] = "verkoopcijfers";
woord[150] = "waarschijnlijk";
woord[151] = "walvisachtigen";
woord[152] = "wandversiering";
woord[153] = "wereldeconomie";
woord[154] = "werkervaringen";
woord[155] = "wijkverpleging";
woord[156] = "winstschatting";
woord[157] = "yogaoefeningen";
woord[158] = "yoghurtdrankje";
woord[159] = "zakenreizigers";
woord[160] = "zeetransporten";
woord[161] = "zendapparatuur";
woord[162] = "ziekenafdeling";
woord[163] = "zoekprocedures";
woord[164] = "zondagamateurs";
woord[165] = "zuiveldrankjes";

alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var wordPicker = Math.floor((Math.random() * 25));
var woord = woord[wordPicker];


function init() {

    document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;

    for (var i = 0; i < woord.length; i++) {
        var woordHolder = document.getElementById("woord");
        letterHolder = document.createElement('li');
        letterHolder.setAttribute('class', 'letter');
        letterHolder.innerHTML = "_";

        geradenLetters[i] = letterHolder;

        woordHolder.appendChild(letterHolder);
    }
}
init();


document.getElementById('galgje').onkeypress = returnPressedLetter;

function returnPressedLetter(key) {
    if ((key.charCode <= 122 && key.charCode >= 97) || (key.charCode <= 90 && key.charCode >= 65)) {

        var pressedLetter = String.fromCharCode(key.keyCode || key.charCode).toLowerCase();

        checkLetter(pressedLetter);
    }
}


var knoppen = document.getElementById("alfabet_knoppen");
knoppen.addEventListener("click", returnChosenLetter);

function returnChosenLetter(letter) {
    if (letter.target !== letter.currentTarget) {
        checkLetter(letter.target.id);
    }
}


function checkLetter(gekozenLetter) {
    var gekozenLetterKnop = document.getElementById(gekozenLetter);

    if (gekozenLetterKnop.classList.contains("active") === false) {
        gekozenLetterKnop.classList.add("active");

        aantalGokkenTotaal++;
        document.getElementById("aantalGokkenTotaal").innerHTML = aantalGokkenTotaal;

        for (var i = 0; i < woord.length; i++) {
            if (woord[i].toLowerCase() === gekozenLetter) {

                geradenLetters[i].innerHTML = woord[i];

                aantalTotaleLettersGoed += 1;
            }
        }

        checkGekozenLetter(gekozenLetter);

    } else {
        alert("Je hebt deze letter al gekozen");
        return false;
    }
}



function checkGekozenLetter(letter) {
    var j = (woord.toLowerCase().indexOf(letter));
    if (j === -1) {
        maxAantalLevens--;
        document.getElementById("maxAantalLevens").innerHTML = maxAantalLevens;

        checkVerlies(maxAantalLevens);
    } else {
        aantalGokkenGoed++;
        document.getElementById("aantalGokkenGoed").innerHTML = aantalGokkenGoed;

        checkWinst(aantalTotaleLettersGoed);
    }
}

function checkWinst(lettersGoed) {
    if (woord.length === lettersGoed) {
        if (alert('Gefeliciteerd, je hebt gewonnen. Het woord was ' + woord)) {} else {
            window.location.reload();
        }
    }
}

function checkVerlies(maxAantalLevens) {
    if (maxAantalLevens < 1) {
        if (alert('Je hebt verloren. Het woord was ' + woord)) {} else {
            window.location.reload();
        }
    }
}



console.log(woord);