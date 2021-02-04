/**Fyrir niðurteljarann */
let laeriTimi = 30;
let laeriTimiMicro;
let pasuTimi = 5;
let nuverandiTimiStrengur;
let nuverandiTimi;
let x;
let tettaErPasa = 0;
let timiErPasadur = 0;
var modal2 = document.getElementById("myModal2");

/**Fyrir litarann */


let deletaÞessu;
/////////////// Skoða hvernig callback virkar/////////////
//Notum querySelector og querySelectorAll lang mest 
//þegar við erum að leita að elementum.

document.addEventListener('DOMContentLoaded', () => {
    load();
});

function load() {
    buaTilTimer(laeriTimi);
}

function buaTilTimer(timi) {
    // Set the date we're counting down to
    laeriTimiMicro = timi * 60 * 1000;
    var countDownDate = new Date().getTime() + laeriTimiMicro;
    var now = new Date().getTime();
    var distance = countDownDate - now;
    nuverandiTimi = distance;
    teljaNidur();
}

function teljaNidur() {



    x = setInterval(function () {
        nuverandiTimi -= 1000

        // Time calculations for minutes and seconds
        var minutes = Math.floor((nuverandiTimi % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((nuverandiTimi % (1000 * 60)) / 1000);
        nuverandiTimiStrengur = minutes + "m " + seconds + "s ";
        // Output the result in an element with id="demo"
        document.getElementById("timi").innerHTML = nuverandiTimiStrengur;
        document.getElementById('titill').innerHTML = 'LilyTimer ' + nuverandiTimiStrengur;

        // If the count down is over, write some text 
        if (nuverandiTimi < 0) {
            clearInterval(x);
            document.getElementById("timi").innerHTML = "Tíminn er búinn";
            document.getElementById('titill').innerHTML = "Tíminn er búinn!!!"
            playSound();
            
        }
    }, 1000);
}


function pause() {
    console.log('Pása');
    document.getElementById('timi').innerHTML = nuverandiTimi;
}

//  Niðri: Þegar maður ýtir á pása
document.getElementById('nidri__pasa').addEventListener("click", function () {
    timiErPasadur = 1;
    clearInterval(x);
    document.getElementById('timi').innerHTML = nuverandiTimiStrengur;
});
//  Niðri: Þegar maður ýtir á spila
document.getElementById('nidri__spila').addEventListener('click', function () {
    timiErPasadur = 0;
    teljaNidur();

});
//  Niðri: Þegar maður ýtir á endurræsa
document.getElementById('nidri__restart').addEventListener('click', function () {
    timiErPasadur = 0;
    clearInterval(x);
    if (tettaErPasa) {
        buaTilTimer(pasuTimi);
    } else {
        buaTilTimer(laeriTimi);
    }
});
//  Uppi: Þegar maður ýtir á læra
document.getElementById('uppi__laera').addEventListener('click', function () {
    timiErPasadur = 0;
    tettaErPasa = 0;
    clearInterval(x);
    buaTilTimer(laeriTimi);
});
//  Uppi: Þegar maður ýtir á Pása
document.getElementById('uppi__pasa').addEventListener('click', function () {
    timiErPasadur = 0;
    tettaErPasa = 1;
    clearInterval(x);
    buaTilTimer(pasuTimi);
});
//  Uppi: Þegar maður ýtir á Breyta Tíma
document.getElementById('uppi__breyta').addEventListener('click', function () {


    modal2.style.display = "block";
    var span2 = document.getElementsByClassName("close")[1];
    span2.onclick = function () {
        modal2.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
});

function breytaTimum() {
    var newLearnTime = document.getElementById('learnTime').value;
    laeriTimi = newLearnTime;
    var newPauseTime = document.getElementById('pauseTime').value;
    pasuTimi = newPauseTime;
    var laera = document.getElementById('uppi__kassi__content12')
    laera.innerHTML = laeriTimi + " mín"
    var pasa = document.getElementById('uppi__kassi__content22')
    pasa.innerHTML = pasuTimi + " mín"
}
console.log(document.getElementById('headBackground').value)

function breytaLit() {
    var hauslitur = document.getElementById('head')
    var hausLiturBak = document.getElementById('headBackground')
    var haus2 = document.getElementsByClassName('header__nafn')[0]
    haus2.style.color = hauslitur.value;
    haus2.style.backgroundColor = hausLiturBak.value;
    var bakgrunnur = document.getElementById('background');
    document.getElementById('html').style.backgroundColor = bakgrunnur.value;
    var timinn = document.getElementById('timeColor')
    document.getElementById('timi').style.color = timinn.value;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }

}

function playSound() {
    let src = 'eventually.mp3';
    let audio = new Audio(src);
    audio.play();
}