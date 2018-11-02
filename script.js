// 
// champs1Chiffre
//      recupérer la saisie
//      si chiffre ok
//      sinon afficher cadre rouge
// 
// champsChoixCalcul récuperer le calcul a faire
//      +*-/%
// 
// champs1Chiffre
//      recupérer la saisie
//      si chiffre ok
//      sinon afficher cadre rouge
//
// 
// champsCalculer
//      récuper la valeur champs1
//      récuper le calcul
//      récuper la valeur champs2
//      
//      faire le calcul pour avoir le résultat
//
// champsResultat afficher le résultat
//

var champs1Chiffre;
var champsChoixCalcul;
var champs1Chiffre;
var champsCalculer;
var champsResultat;


function recupSaisie1() {
    champs1Chiffre = parseInt(document.forms["general"].champs1Chiffre.value);
}

function recupCalculAfaire() {
    // Pour récupérer la valeur de la ligne sélectionnée :
    // document.getElementById("liste").options[document.getElementById('liste').selectedIndex].value;
    champsChoixCalcul = document.getElementById("champsChoixCalcul").options[document.getElementById('champsChoixCalcul').selectedIndex].value;
}

function recupSaisie2() {
    champs2Chiffre = parseInt(document.forms["general"].champs2Chiffre.value);
}

document.getElementById("champsCalculer").addEventListener("click", function calculer() {
    recupSaisie1();
    recupSaisie2();
    recupCalculAfaire();
    console.log("champ 1 : " + champs1Chiffre);
    console.log("Opération à faire : " + champsChoixCalcul);
    console.log("champ 2 : " + champs2Chiffre);
    console.log("Calculer " + champs1Chiffre,champsChoixCalcul,champs2Chiffre);
    champsResultat = (champs1Chiffre, champsChoixCalcul, champs2Chiffre);
    console.log(champsResultat);
});