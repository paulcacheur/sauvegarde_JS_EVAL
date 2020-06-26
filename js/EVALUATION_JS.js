


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
        document.write(nombre+"*"+i+"="+resultat+"<br>");

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


// le bouton submit n'est pas utilisé, j'utilise le bouton 5 eo final 5 pour valider le formulaire

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





// EXERCICE 5 - check remplissage formulaire jarditou



var submit = document.getElementById("submit");
submit.addEventListener("click", checkform);

/* si on veut que cela marche avec le bouton exo final 5

var bouton5 = document.getElementById("bouton5");
bouton5.addEventListener("click", checkform);

*/
function checkform()

{// ouverture fonction du bouton

    var nom = "x";
    var prenom;
    var sexeM = false;
    var sexeF = false;
    var dob;
    var adresse;
    var ville;
    var email;
    var select;
    var question;

        //validation formulaire NOM

    nom = document.getElementById("nom").value ;
    console.log ("nom : " + nom);
    console.log ("longueur : " + nom.length);


        if (nom.length<1)
            {
                window.alert("le champ 'nom' est obligatoire");
            }

         //validation formulaire PRENOM

    prenom = document.getElementById("prenom").value ;
    console.log ("prenom : " + prenom);


        if (prenom.length<1)
            {
                alert("le champ 'prenom' est obligatoire");
            }


         //validation formulaire SEXE


    sexeM  = document.getElementById("sexeM").checked ;
    sexeF  = document.getElementById("sexeF").checked ;
    console.log ("sexeM : " + sexeM);
    console.log ("sexeF : " + sexeF);

        if(sexeM == false && sexeF == false)
            {
                alert("le champ 'Sexe' est obligatoire");
            }


         //validation formulaire DOB


    dob = document.getElementById("dob").value ;
    console.log ("dob : " + dob);


 // METHODE expression régulière pour cadrer le format général

    var dob = new RegExp("/^[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]$/");
    var resultat = dob.test("javascript");

    /* METHODE conditions pour valider cohérence générale de l'année

    hormis l'utilisation de type = "date" dans html
    var ladate=new Date();
    var checkdate = false;
    var jour =0;
    var mois = 0;
    var annee = 0;
    jour = dob.substring(0, 2) - 1; // because months in JS start from 0
    mois = dob.substring(3, 5) - 0;  
    annee = dob.substring(6, 10) - 0;
    console.log(annee);

            if (annee>1900 || annee< now.getFullYear())
                {

                    checkdate = true;
                }
            else
                {
                    alert("date invalide, merci de recommencer");
                    checkdate = false;
                }


METHODE spécifique pour cadrer date réelle

var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var seconde = now.getSeconds();
 
alert( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );
// Résultat: Nous sommes le 2/11/2012 et il est 19 heure 57 minutes 37 secondes


                */

                // Validation champ Code Postale

    codepostal = document.getElementById("codepostal").value ;
    console.log ("codepostal : " + codepostal);

    var cptaille = 0;
    var checkcp = false; //booléen

    cptaille = codepostal.length;
    console.log(codepostal.length); // véification taille du code
    codepostal = parseInt(codepostal); //conversion du CP en numérique
    console.log("code postale : " + codepostal + "type of : " + typeof codepostal + "length " + cptaille);

            if (cptaille == 5 && isNaN(codepostal)!= true)

                {
                    checkcp = true;
                }

            else 
                {
                    window.alert("Le code postal doit comprendre 5 caractères numériques.");
                    checkcp = false;
                }

                // Validation champ adresse

    adresse = document.getElementById("adresse").value ;
    console.log ("adresse : " + adresse);

    if (adresse.length<1)
    {
        window.alert("le champ 'adresse' doit être renseigné");
    }

                // Validation champ ville

    ville = document.getElementById("ville").value ;
    console.log ("ville : " + ville);

    if (ville.length<1)
    {
        window.alert("le champ 'ville' doit être renseigné");
    }

                // Validation champ email

    email = document.getElementById("email").value ;
    console.log ("email : " + email);
    var checkcemail= false; //booléen

            if (email.indexOf("@") != -1) //check si le caractère @est présent

                { 
                    checkcemail = true;
                } 

            else

                {
                    window.alert("L'adresse mail doit comporter un caractère '@'.");
                    checkcemail = false;
                }


                // Validation champ sélect


    select  = document.getElementById("select").value ;
    console.log ("select : " + select);
    var checkselect = false; //booléen

                    // VALIDATION CHOIX SUJET


                if (select == "Mes commandes" || select == "Question sur un produit" || select == "Réclamations"  || select == "Autres")
                    {
                        checkselect = true;

                                // si le choix est fait, alors cela doit apparaitre dans la box
                              // condition pour éviter écrasement des données par select si un commentaire rentré
                                if (document.getElementById("question").value ="")

                                {
                                    document.getElementById("question").value = select;
                                }
  
                    }

                    else

                    {
                        window.alert("merci de renseigne un Sujet");
                        checkcemail = false;
                    }

                    // VERIFICATION de la CASE COCHEE

    question = document.getElementById("defaultCheck1").checked ;
    console.log ("question : " + question);
    var checkcheckbox = false;


            if (question == true) //check si la check box est bien cochée
                { 
                    checkcheckbox = true;
                } 

            else

                {
                    window.alert("Vous devez autoriser le traitement du formulaire");
                    checkcheckbox = false;
                }

                /*
                
validation avec apparition message en cas d'erreur dans le formulaire avec d-none
element.classList.remove("d-none");


Autre option = créer un span vide avec un ID 
et le remplir dans javascript

                */ 


}// fermeture fonction du bouton
