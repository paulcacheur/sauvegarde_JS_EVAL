
// Exo cadrage données formulaire 

var boutonsoumission = document.getElementById("boutonsoumission");
boutonsoumission.addEventListener("click", checkform);

function checkform()
{
    // initialisation de toute les variables nécessaire pour le traitement du formulaire
        var societe = document.getElementById("societe").value ;
        console.log ("societe : " + societe);
        var contactPersonne = document.getElementById("contactPersonne").value ;
        console.log ("contactPersonne : " + contactPersonne);
        var adresseEntreprise = document.getElementById("adresseEntreprise").value ;
        console.log ("adresseEntreprise : " + adresseEntreprise);
        var codePostal = document.getElementById("codePostal").value ;
        console.log ("codePostal : " + codePostal);
        
        var ville = document.getElementById("ville").value ;
        console.log ("ville : " + ville);
        
        var email = document.getElementById("email").value ;
        console.log ("email : " + email);
        
        var telephone = document.getElementById("telephone").value ;
        console.log ("telephone : " + telephone);
        
        //Création d'une variable booléenne pour gerer si questionnaire OK ou pas OK ;
        var status1= false;
        var status2= false;
        var status3= false;
        var status4= false;
        var status5= false; //status par défaut fixée à faux pour éviter tout envoi erronné si la vérification comporte une erreur
        
        // vérification automatique de chacun des champs
            // société
            if (societe.length > 1) {
                var status1 = true;
            } else {
                window.alert("Le nom de votre société doit comprendre plus d'un caractère.");
                var status1 = false;
            }
            
            // Personne à contacter
            if (contactPersonne.length > 1) {
                var status2 = true;
            } else {
                window.alert("Le nom de la personne à contacter doit comprendre plus d'un caractère.");
                var status2 = false;
            }
            
            // Code postal
            var codePostalTaille = 0;
            codePostalTaille = codePostal.length;
            codePostal = parseInt(codePostal); //conversion du CP en numérique
            console.log(codePostalTaille);
            console.log("code postale : " + codePostal + "type of : " + typeof codePostal + "length " + codePostalTaille);
            if (codePostalTaille == 5 && isNaN(codePostal) != true){
                var status3 = true;
            } else {
                window.alert("Le code postal doit comprendre 5 caractères numériques.");
                var status3 = false;
            }
            
            // Ville
            if (ville.length > 1) {
                var status4 = true;
            } else {
                window.alert("Le nom de la ville doit comprendre plus d'un caractère.");
                var status4 = false;
            }
            
            // E-mail
            if (email.indexOf("@") != -1) { //si ne trouve pas le symbole @ dans mail
                var status5 = true;
            } else {
                window.alert("L'adresse mail doit comporter un caractère '@'.");
                var status5 = false;
            }
                    
        // Vérification finale 
        if (status1 == true && status2 == true && status3 == true &&status4 == true &&status5 == true){
            window.alert("Aucune erreur détectée au sein du formulaire");
        } else {
            window.alert("Au moins 1 erreur détectée au sein du formulaire");
        }
}
    
/* à ajouter si type = button et non submit

// fonction spécifique pour gérer l'actualisation automatique du menu déroulant
var focusEnviro = document.getElementById("selectEnvironnement");
focusEnviro.addEventListener("change",actualisationEnvironnement); //trigger de la fonction que sur changement de la valeur du select
function actualisationEnvironnement(){
    var selectEnvironnement = document.getElementById("selectEnvironnement").value ;
        if (selectEnvironnement == "Autres"){
            document.getElementById("textEnvironnement").setAttribute("class", "form-control"); // fait apparaitre le champ de texte à compléter
            selectEnvironnement = "Autres (en attente précision)";
            document.getElementById("textEnvironnement").value = null; //réinialisation à 0 du texte de la zone de texte avant de pouvoir taper manuellement l'environnement
        } else if (selectEnvironnement == "Choisissez"){
            document.getElementById("textEnvironnement").setAttribute("class", "d-none"); // fait disparaitre le champ de texte à compléter
            selectEnvironnement = "";
            
        } else {
            document.getElementById("textEnvironnement").setAttribute("class", "d-none"); // fait disparaitre le champ de texte à compléter
        }
        console.log ("selectEnvironnement : " + selectEnvironnement);
}

// Fonction spécifique pour actualisation de la valeur de la variable "selectEnvironnement" SEULEMENT pour la sélection "Autre"
var focusTxtEnviro = document.getElementById("textEnvironnement");
focusTxtEnviro.addEventListener("change",recupAutreEnviro); //trigger de la fonction que sur changement de la valeur de la zoneTexte enviro
function recupAutreEnviro(){
    selectEnvironnement = "Autre ( "+ document.getElementById("textEnvironnement").value + " )"; //remplace la valeur d'environnement si catégorie autre choisie dans liste déroulante
    console.log ("selectEnvironnement : " + selectEnvironnement);
    return selectEnvironnement;



METHODE BOOLEEN ET EPRESSION

function checkCP()
    {

        var codepostal = document.getElementsById('CP').value;
        var regex = /^[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$/;
        
        if(regex.test(codepostal) == false)
            {
            alert("le code postal doit être une cobinaison de 5 chiffres. Example: 80000");
            return false;
            }

        if(codepostal == " ")
            {
            alert("Postal Code fiele code postal doit être renseigné");
            return false;
            }
        return true;
    }

METHODE SIMPLE

if(document.formulaire.codepostal.value.length < 5)
 
        {
        alert ('Saisissez un code postal valide svp. Merci.');
        document.formulaire.codepostal.focus();
        }
 
return false; 


METHODE AUTRE

if (!eregi("^[0-9]{5}$",$cp))
{ // le code postal n'est pas valide
     $msg_err="Votre code postal n'est pas valide";
}

explications
!eregi => si le champs ne contient pas
[0-9] => des chiffres
{5} => 5 au minimum et 5 au maximum ... donc 5
^ => commencer
$ => finir

MA METHODE inachevée à cause du bug
   //check pour société

   var societe = document.getElementById("societe").value;


       if (societe.length == 0)
           {
           alert("société est un champ obligatoire");
           return false;
           }

   //check pour personne à contacter

   var personneacontacter = document.getElementById("personneacontacter").value;
         if (personneacontacter.length < 5 && personneacontacter.length > 0 )
           {
           alert("Merci de saisir au moins 5 caractères pour la personne à contacter");
           return false;
           }
         if (personneacontacter.length == 0)
           {
           alert("Personne à contacter est un champ obligatoire");
           return false;
           }


       //check pour code postal

        var codepostal = 0
        codePostal = parseInt(codePostal);
        codepostal = document.getElementById("CP").value;

            if (codepostal.length =! 5)
            {
                window.alert("Entrez uniquement une valeur numérique de 5 chiffres pour le code postal");
                return false;
            }
            else if (isNaN(codepostal))
                {
                    window.alert("Entrez uniquement une valeur numérique pour le code postal");
                    return false;
                }

       return true;

}
*/


// EXERCICE 1 - comptage population selon age


var bouton1= document.getElementById("bouton1");
bouton1.addEventListener("click",denombre);

function denombre(nombre, texte)
    { // ouverture fonction du bouton

            var age = 0;
            var texte = "Veuillez renseigner l'age de la personne pour dénombrement";
            var moins20 = 0;
            var entre2040 = 0;
            var plus40 = 0;

            while (age < 100)
            { // bouclewhile
                var age = window.parseInt(prompt(texte));

                    if (age<20)
                    {
                        moins20++;
                        console.log(moins20);
                    }

                    else if (age>=20 && age<=40)
                    {
                        entre2040++;
                        console.log(entre2040);
                    }

                    else if (age>40)
                    {
                        plus40++;
                        console.log(plus40);
                    }
            } // bouclewhile

                    window.alert("le nombre de personnes de moins de 20 ans est: " +moins20+"personnes\n"
                    +"le nombre de personnes de 20 ans à 40 ans est: " +entre2040+"personnes\n"
                    +"le nombre de personnes de plus de 40 ans est: " +plus40+"personnes");
                    
            return;

    }// fermeture fonction du bouton

            /*
            while (nombre!=0)
            {
               nombre = demandenombre(nombre, texte);
                  if (nombre !=0)
                  {
                  tableau[i] = nombre;
                  document.write(tableau[i]+"<br>");
                  i = i + 1;
                  }
             } 

            return;
            */




// EXERCICE 2 - table de multiplication

var bouton2= document.getElementById("bouton2");
bouton2.addEventListener("click",clickbtn2);
function clickbtn2()

{ // ouverture fonction du bouton

    var nombre = 0;
    var resultat = 0;
    var texte = "Veuillez renseigner le numéro pour lequel vous souhaite afficher la table";

    var nombre = window.parseInt(prompt(texte));

    for (i=1; i<=10; i++)
    {

        resultat = i * nombre;
        document.write(nombre+"*"+nombre+"="+resultat+"<br>");

    }

    return resultat

}// fermeture fonction du bouton





// EXERCICE 3 - recherche d'un  prénom

var bouton3= document.getElementById("bouton3");
bouton3.addEventListener("click",clickbtn3);
function clickbtn3()

{ // ouverture fonction du bouton

    var prenom = "string";
    var texte = "veuillez rentrer un prénom";
    var tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var taille = tableau.length;
    document.write("Le tableau contient: "+taille+ " éléments"+"<br>"); 
    document.write(tableau[2]+"<br>") // test ecriture tableau

    prenom  = window.prompt(texte);


            for (i = 0; i <= taille-1; i++)
                { // boucle for

                    if (prenom==tableau[i])
                        {
                            document.write(prenom+"<br>"); // vérification entrée
                            document.write("mon tableau avant: "+tableau.join("")+"<br>");// vérification contenu tableau avant 
                            document.write("taille de tableau avant: "+taille+"<br>");// vérification taille tableau avant
                            tableau.splice(i, 1); // efface l'élément i du tableau (équivalent au prénom)
                            tableau.push(" "); // ajoute une valeur nulle a dernier élément du tableau
                            document.write("mon tableau après: "+tableau.join("")+"<br>");// vérification contenu tableau après 
                            document.write("taille de tableau après: "+taille+"<br>");// vérification taille tableau après
                            return;
                        }
                    } // boucle for

                if (prenom!=tableau[i])
                        {
                            alert("votre saisie ne correspond pas à un prénom, recommencez");
                            return;
                        }


}// fermeture fonction du bouton




// EXERCICE 4

var bouton4= document.getElementById("bouton4");
bouton4.addEventListener("click",clickbtn4);
function clickbtn4()
{ // ouverture fonction du bouton


// prix unitaire PU, quantitié commandée QTECOM, PAP=prix à payer, REM = remise, PORT = port, TOT = (PU*QTECOM)
// remise 5% pour 100<tot<200. 10% pour tot > 200
// port gratuit si somm PU > 500, sinon 2%
// valeur minimale port =2%

var pu = 0;
var quantite = 0;
var tot = 0;
var remise = 0;
var totremise = 0;
var fraisdeport = 0;
var pap = 0;

// demande des variables et vérification

pu = window.parseInt(prompt("veuillez renseigner le prix unitaire"));
quantite = window.parseInt(prompt("veuillez renseigner la quantité à commander"));
document.write("le pu est de : "+pu+"<br>");// report données
document.write("la quantité commandée est de : "+quantite +"<br>");// report données

        // conditions REMISE et vérification

    tot = (pu*quantite);
    document.write("le total est de : "+tot+"<br>");// vérification tot

    if (tot>100 && tot<200)
        {
            remise = 0.05*tot;
        }

    if (tot>=200)
        {
            remise = 0.1*tot;
        }

document.write("la remise est de : "+remise+"<br>");// vérification remise
totremise = tot-remise;
document.write("le total remisé est de : "+totremise+"<br>");// vérification tot

        // conditions FRAIS DE PORT et vérification

    if (totremise>=500)
        {
            fraisdeport = 0;
            document.write("les frais de port sont égaux à : "+fraisdeport+"<br>");// vérification frais de port
        }

    if (totremise<500)
        {
            if (totremise<300) // 6 = 2% de 300
            {
                fraisdeport = 6;
            }
            else
            {
                fraisdeport =0.02*totremise;
            }


        }
        document.write("les frais de port sont égaux à : "+fraisdeport+"<br>");// vérification frais de port


    pap = tot - remise + fraisdeport;
    document.write("le prix à payer est de: "+pap+"<br>");// vérification prix final


}// fermeture fonction du bouton


// EXERCICE 5

var bouton5= document.getElementById("bouton5");
bouton5.addEventListener("click",clickbtn5);
function clickbtn5()
{ // ouverture fonction du bouton



    
}// fermeture fonction du bouton




