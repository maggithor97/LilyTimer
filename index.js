let laeriTimi = 1;
let pasuTimi = 10;
let nuverandiTimiStrengur;
let nuverandiTimi;
let x;
let tettaErPasa = 0;
let timiErPasadur = 0;

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
    var laeriTimiMicro = timi * 60 * 1000;
    teljaNidur(laeriTimiMicro);
}

function teljaNidur(laeriTimiMicro){
    var countDownDate = new Date().getTime() + laeriTimiMicro;

    x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        nuverandiTimi = distance;
        
        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        nuverandiTimiStrengur = minutes + "m " + seconds + "s ";
        // Output the result in an element with id="demo"
        document.getElementById("timi").innerHTML = nuverandiTimiStrengur;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timi").innerHTML = "Tíminn er búinn";
        }
    }, 1000);
}


function pause(){
    console.log('Pása');
    document.getElementById('timi').innerHTML = nuverandiTimi;
}

//  Niðri: Þegar maður ýtir á pása
document.getElementById('nidri__pasa').addEventListener("click", function(){
    timiErPasadur = 1;
    clearInterval(x);
    document.getElementById('timi').innerHTML = nuverandiTimiStrengur;
});
//  Niðri: Þegar maður ýtir á spila
document.getElementById('nidri__spila').addEventListener('click',function(){
    if (timiErPasadur) {
    teljaNidur(nuverandiTimi);
    }
});
//  Niðri: Þegar maður ýtir á endurræsa
document.getElementById('nidri__restart').addEventListener('click',function(){
    timiErPasadur = 0;
    clearInterval(x);
    if (tettaErPasa) {
        buaTilTimer(pasuTimi);
    } else {
        buaTilTimer(laeriTimi);
    }
});
//  Uppi: Þegar maður ýtir á læra
document.getElementById('uppi__laera').addEventListener('click',function(){
    timiErPasadur = 0;
    tettaErPasa = 0;
    clearInterval(x);
    buaTilTimer(laeriTimi);
});
//  Uppi: Þegar maður ýtir á Pása
document.getElementById('uppi__pasa').addEventListener('click',function(){
    timiErPasadur = 0;
    tettaErPasa = 1;
    clearInterval(x);
    buaTilTimer(pasuTimi);
});