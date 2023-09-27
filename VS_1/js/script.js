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

    let lista = [];

    for (let i = 0; i < 20; i++) {
                
        setTimeout(function hozzaad() {
            let szam = Math.trunc(Math.random() * 100);
            tartalom = document.getElementById("szamok").innerHTML + buborek.replace("#SZAM#", szam);
            document.getElementById("szamok").innerHTML = tartalom;
        }, i * 1000);

    }

}

function onLetoltTeendok() {
    let teendo = '<div class="kartya-wrapper col-12 col-md-6 col-lg-4">' + 
        '<div class="teendo-kartya">' + 
        '    <div class="teendo-id">#ID#</div>' + 
        '        <p class="teendo-nev">#NEV#</p>' + 
        '        <p class="teendo-keszultsege teendo-kesz">KESZ</p>' + 
        '        <p class="teendo-keszultsege teendo-nyitott">NYITOTT</p>' + 
        '    </div>' + 
        '</div>';



    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        teendo = teendo.replace("#NEV#", json['title']);

        document.getElementById('teendok').innerHTML = teendo;
      })
    
}