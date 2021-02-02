"use strict";




 
// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);
// //! AGAIN POUR REINITIALISER LA PARTIE
//     document.querySelector('.again').addEventListener('click', function(){
//         score=20;
//         secretNumber = Math.trunc(Math.random()*20)+1 ;
//         document.querySelector('.score').textContent = score;
//         document.querySelector('body').style.backgroundColor='#222222';
//         document.querySelector('.message').textContent='Start guessing...';
//         document.querySelector('.number').textContent = '?' ;
//         document.querySelector('.guess').value='';
//         document.querySelector('.number').style.width='15rem';
// OUS VERIFIONS SI NOUS AVONS TROUVÉ LE BON CHIFFRE    
//     }else if (guess === secretNumber){
//         document.querySelector('.message').textContent='✨ Correct Number !';
// //! MODIFIER LE CSS EN CAS DE VICTOIRE
//         document.querySelector('body').style.backgroundColor='#60b347';
//         document.querySelector('.number').style.width='30rem';
//         document.querySelector('.number').textContent = secretNumber ;
//         if (score>highscore){
//             highscore = score;
//             document.querySelector('.highscore').textContent= highscore;        }
// //! NOMBRE TROP ÉLEVÉ

// , function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

let dates = [16.11, "17.11", "18.11", "19.11", "20.11"];
let horaires = [2.13, 7.32, 14.36, 19.54, 2.57, 8.15, 15.19, 20.38, 3.37, 8.56, 16.00, 21.20, 4.15, 9.37, 16.39, 22.02, 4.52, 10.19, 17.19, 22.47];
let maree = ["Basse mer", "Pleine mer", "Marée montante", "Marée descendante"];

//  

 
  document.querySelector('.check').addEventListener('click', function(){
    let heure = Number(document.querySelector('#heure').value);
    let jour = Number(document.querySelector('#jour').value);
 
// Lundi 16 novembre
    if(jour==dates[0]){
        if(heure == horaires[0] || heure == horaires[2]){
            document.querySelector('.result').textContent=maree[0];
        }else if(heure == horaires[1] || heure == horaires[3]){
            document.querySelector('.result').textContent=maree[1];
        }else if((heure > horaires[0] && heure < horaires[1]) || (heure > horaires[2] && heure < horaires[3])){
            document.querySelector('.result').textContent=maree[2];
        }else{
            document.querySelector('.result').textContent=maree[3];
        }   
    }

// Mardi 17 novembre

if (jour == dates[1]){
    if(heure == horaires[4] || heure == horaires[6]){
        document.querySelector('.result').textContent=maree[0];
    }else if(heure == horaires[5] || heure == horaires[7]){
        document.querySelector('.result').textContent=maree[1];
    }else if((heure > horaires[4] && heure < horaires[5]) || (heure > horaires[6] && heure < horaires[7])){
        document.querySelector('.result').textContent=maree[2];
    }else{
        document.querySelector('.result').textContent=maree[3];
    }   
}


// Mercredi 18 novembre 
if (jour == dates[2]){
    if(heure == horaires[8] || heure == horaires[10]){
        document.querySelector('.result').textContent=maree[0];
    }else if(heure == horaires[9] || heure == horaires[11]){
        document.querySelector('.result').textContent=maree[1];
    }else if((heure > horaires[8] && heure < horaires[9]) || (heure > horaires[10] && heure < horaires[11])){
        document.querySelector('.result').textContent=maree[2];
    }else{
        document.querySelector('.result').textContent=maree[3];
    }   
}
// Jeudi 19 novembre 

if (jour == dates[3]){
    if(heure == horaires[12] || heure == horaires[14]){
        document.querySelector('.result').textContent=maree[0];
    }else if(heure == horaires[13] || heure == horaires[15]){
        document.querySelector('.result').textContent=maree[1];
    }else if((heure > horaires[12] && heure < horaires[13]) || (heure > horaires[14] && heure < horaires[15])){
        document.querySelector('.result').textContent=maree[2];
    }else{
        document.querySelector('.result').textContent=maree[3];
    }   
}

// Vendredi 20 novembre

if (jour == dates[4]){
    if(heure == horaires[16] || heure == horaires[18]){
        document.querySelector('.result').textContent=maree[0];
    }else if(heure == horaires[17] || heure == horaires[19]){
        document.querySelector('.result').textContent=maree[1];
    }else if((heure > horaires[16] && heure < horaires[17]) || (heure > horaires[18] && heure < horaires[19])){
        document.querySelector('.result').textContent=maree[2];
    }else{
        document.querySelector('.result').textContent=maree[3];
    }   
}
 });











