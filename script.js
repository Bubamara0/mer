'use strict';

//-------FÉVRIER---------//

let dates = [1.02, 2.02, 3.02, 4.02, 5.02, 6.02, 7.02]; 
let horaires = [4.10, 9.31, 16.36, 21.57, 4.48, 10.10, 17.14, 22.37, 5.27, 10.51, 17.53, 23.18, 6.08, 11.36, 18.35, 0.05, 6.57, 12.30, 19.29, 1.06, 8.03, 13.44, 20.42, 2.31, 9.27, 15.16, 22.09 ];
let maree = ['Basse mer', 'Pleine mer', 'Marée montante', 'Marée descendante'];


document.querySelector('.check').addEventListener('click', function(){
    let heure = Number(document.querySelector('#heure').value);
    let jour = Number(document.querySelector('#jour').value);
 
// Lundi 1er février
    if(jour==dates[0]){
        if(heure == horaires[0] || heure == horaires[2]){
            document.querySelector('#result').textContent=maree[0];
        }else if(heure == horaires[1] || heure == horaires[3]){
            document.querySelector('#result').textContent=maree[1];
        }else if((heure > horaires[0] && heure < horaires[1]) || (heure > horaires[2] && heure < horaires[3])){
            document.querySelector('#result').textContent=maree[2];
        }else{
            document.querySelector('#result').textContent=maree[3];
        }   
    }

// Mardi 2 février

if (jour == dates[1]){
    if(heure == horaires[4] || heure == horaires[6]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[5] || heure == horaires[7]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[4] && heure < horaires[5]) || (heure > horaires[6] && heure < horaires[7])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}


// Mercredi 3 février
if (jour == dates[2]){
    if(heure == horaires[8] || heure == horaires[10]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[9] || heure == horaires[11]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[8] && heure < horaires[9]) || (heure > horaires[10] && heure < horaires[11])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}
// Jeudi 4 février 

if (jour == dates[3]){
    if(heure == horaires[12] || heure == horaires[14]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[13]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[12] && heure < horaires[13]) || (heure > horaires[14])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}

// Vendredi 5 février

if (jour == dates[4]){
    if(heure == horaires[16] || heure == horaires[18]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[15] || heure == horaires[17]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[16] && heure < horaires[17]) || (heure > horaires[18] || heure < horaires[15])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}
// Samedi 6 février

if (jour == dates[5]){
    if(heure == horaires[20] || heure == horaires[22]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[19] || heure == horaires[21]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[19] && heure < horaires[20]) || (heure > horaires[21] || heure < horaires[22])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}
// Dimanche 7 février

if (jour == dates[6]){
    if(heure == horaires[24] || heure == horaires[26]){
        document.querySelector('#result').textContent=maree[0];
    }else if(heure == horaires[23] || heure == horaires[25]){
        document.querySelector('#result').textContent=maree[1];
    }else if((heure > horaires[23] && heure < horaires[24]) || (heure > horaires[25] || heure < horaires[26])){
        document.querySelector('#result').textContent=maree[2];
    }else{
        document.querySelector('#result').textContent=maree[3];
    }   
}
});






