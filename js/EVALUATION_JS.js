
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


// EXERCICE 5 - check remplissage formulaire jarditou

    var nom = "x"
    var prenom = "x"
    var sexe;
    var dob;
    var adresse = "x";
    var ville = "x";
    var email = "x";
    var select;
    var question = "x";


        //NOM

    var societe = document.getElementById("nom").value ;
    console.log ("nom : " + nom);
    console.log ("longueur : " + nom.lenght);

        if (nom.lenght<1)
            {
                alert("le champ 'nom' est obligatoire");
            }

    var contactPersonne = document.getElementById("prenom").value ;
    console.log ("prenom : " + prenom);

        if (prenom.lenght<1)
            {
                alert("le champ 'prenom' est obligatoire");
            }

    var sexe  = document.getElementById("sexe").value ;
    console.log ("sexe : " + prenom);

    var dob = document.getElementById("dob").value ;
    console.log ("dob : " + prenom);

    var adresse = document.getElementById("adresse").value ;
    console.log ("adresse : " + adresse);

    var codePostal = document.getElementById("codepostal").value ;
    console.log ("codepostal : " + codePostal);

    var ville = document.getElementById("ville").value ;
    console.log ("ville : " + ville);

    var email = document.getElementById("email").value ;
    console.log ("email : " + email);

    var select  = document.getElementById("select").value ;
    console.log ("select : " + select);

    var question = document.getElementById("question").value ;
    console.log ("question : " + question);






