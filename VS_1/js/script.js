var users = [];

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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        users = json;
        letoltTeendok();
      })
}

function letoltTeendok() {
    let teendo = '<div class="kartya-wrapper col-12 col-md-6 col-lg-4">' + 
        '<div class="teendo-kartya">' + 
        '    <div class="teendo-id">#ID#</div>' + 
        '        <p class="teendo-nev">#NEV#</p>' + 
        '        <p class="felhasznalo-nev">#FELHASZNALO#</p>' + 
        '        <p class="teendo-keszultsege teendo-kesz #KESZ#">KESZ</p>' + 
        '        <p class="teendo-keszultsege teendo-nyitott #NYITOTT#">NYITOTT</p>' + 
        '    </div>' + 
        '</div>';

    let teendoDiv = "";

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        json[2]['userId']=2;
        for (let index = 0; index < 6; index++) {
            if(index == 0) {
                console.log(JSON.stringify(json[0]));
            }
            console.log
            const element = json[index];

            let keszE = json[index]['completed'] ? 'd-block' : 'd-none';
            let nyitottE = json[index]['completed'] ? 'd-none' : 'd-block';
            let felhasznalo = keresFelhasznalo(json[index]['userId']);

            teendoDiv += teendo.replace("#NEV#", json[index]['title'])
                                .replace("#ID#", json[index]['id'])
                                .replace("#KESZ#", keszE)
                                .replace("#NYITOTT#", nyitottE)
                                .replace("#FELHASZNALO#", felhasznalo);

        }



        document.getElementById('teendok').innerHTML = teendoDiv;
      })
    
}

function keresFelhasznalo(userId) {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element['id'] == userId) {
            return element['name'];
        }
    }
    return '?';
}