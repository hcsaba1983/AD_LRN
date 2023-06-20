function onLoad() {


}

$(document).ready(function() {


});

function onOsszeadas() {
    let a = 5;
    let b = 7;
    alert(a+b);
}

function onKivonas() {
    let mibol = document.getElementById("mibol").value;
    let mennyit = document.getElementById("mennyit").value;
    alert(mibol - mennyit);    
}

function onGeneralas() {

    let buborek = '<div class="szambuborek">#SZAM#</div> ';
    let tartalom = '';

    for (let i = 0; i < 20; i++) {
        let szam = Math.trunc(Math.random() * 100);
        
        tartalom += buborek.replace("#SZAM#", szam);
    }

    document.getElementById("szamok").innerHTML = tartalom;


}