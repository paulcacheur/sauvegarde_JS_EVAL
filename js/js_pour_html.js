
 
//test DOM

//le bouton est reliéà l'ID boutonx dans html
 var bouton1= document.getElementById("bouton1");

 // quand on clique on active la fonction clickbtn1
 bouton1.addEventListener("click",clickbtn1);

 // la fonction clickbtn1 active le script suivant:
 function clickbtn1()
 { // ouverture bouton
 

   function testerRadio()
   {
       var radio = document.getElementsByName("btnRadChoix");

               for (var i=0; i<radio.length;i++) 
               {
                   if (radio[i].checked) 
                   {
                       document.getElementById("txtBox1").value = radio[i].value;
                   }
               }
   }
   testerRadio();


   var version = navigator.appVersion;
   console.log("Le code name de votre browser est :"    + navigator.appCodeName);
   console.log("Le nom ou la marque du browser est :"   + navigator.appName); 
   console.log("Les informations sur la version sont :" + version); 
   console.log("Le browser a comme user-agent :"        + navigator.userAgent);
   console.log("");
   
   if (version.indexOf('Win') > -1) 
   { 
       console.log("<br />Vous etes sous l'environnement Windows");
       console.log("<br />");
   }
   
   if (navigator.userAgent.indexOf('Firefox') > -1) 
   { 
   console.log("Vous utilisez un navigateur FireFox");
   } 
   else if (version.indexOf('Chrome') > -1) 
   { 
       console.log("Vous utilisez un navigateur Chrome");
   } 
   else if (version.indexOf('MSIE') > -1) 
   { 
       console.log("Vous utilisez un navigateur Microsoft Internet Explorer");
   } 
   else 
   {
       console.log("Vous utilisez un navigateur inconnu");
   }


var myDate1 = new Date() ;  // Date du jour
var myDate2 = new Date(3600*24*365*40) ;    // Date depuis le 1er janvier 1970
var myDate3 = new Date(2012, 9, 19) ;
var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
var myDate5 = new Date("Jan 1, 2000 00:00:00");

console.log('new Date() : ' + myDate1.toLocaleString()); 
console.log('new Date(3600*24*365*40) : ' + myDate2.toLocaleString());
console.log('new Date(2012, 9, 19) : ' + myDate3.toLocaleString());
console.log('new Date(2012, 9, 19, 10, 33, 12) : ' + myDate4.toLocaleString());
console.log('new Date("Jan 1, 2000 00:00:00") : ' + myDate5.toLocaleString());
console.log("");
var annee = 1900 + myDate1.getYear();
var mois  = myDate1.getMonth() + 1;
var jour  = myDate1.getDate();
console.log('date du jour : ' + jour + "/" + mois + "/" + annee);

} // fermeture bouton
 

//TEST objets NATIFS

/*

Ecrivez un programme permettant de saisir différentes valeurs numérique (avec l'instruction window.prompt), ces valeurs seront rangées dans un tableau.

La saisie s'arrête quand l'utilisateur entre la valeur 0.

A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la moyenne.

*/



var bouton2= document.getElementById("bouton2");
bouton2.addEventListener("click",clickbtn2);
function clickbtn2()

{ // ouverture bouton


var nombre;
var tableau = [];

//Définition de la fonction pour demande d'entier
         function demandenombre(nombre, texte)
            {
               var nombre = window.parseInt(prompt(texte));
               return nombre;
            }


//Définition de la fonction pour saisir les données du tableau
         function saisietab(tableau, nombre)

            {
               var texte="veuillez saisir les données du tableau";
               var i = 0;

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
            }

            saisietab(tableau, nombre);


//Définition de la fonction infotab pour affichage des stats tableau  

         function stattab(tableau)
            {
            var totaltableau = 0;
            var moyennetableau = 0;
            console.log(tableau.length);
            for (i = 0; i < tableau.length; i++)
                  {

                     totaltableau =  totaltableau + parseInt(tableau[i]);
                     moyennetableau = totaltableau/tableau.length;

                  } 
                  document.write("la somme des éléments du tableau est: "+totaltableau+"<br>");
                  document.write("la moyenne des éléments du tableau est: "+moyennetableau+"<br>");
            }
            stattab(tableau);

} // fermeture bouton

/* script guillaume

      var tableau =[]
    var index = 0;
    var somme = 0;
    var moyenne = 0;
    do {
        entier = window.parseInt(prompt("Entre un nombre entier pour remplir la cellule n° " + (index+1) + "\n Saisissez '0' pour arrêter la saisie"));
        tableau [index] = entier;
        somme  = somme + entier;
        index++;
        moyenne = somme / index;
    }  while (entier != 0)

    window.alert("Voici le tableau saisi : \n" + tableau
                + "\n Somme des éléments : " + somme
                + "\n Moyenne des éléments : " + moyenne
                + "\n Nombre d'éléments dans le tableau : " + index);
}

*/




// EXERCICES TEST EVENEMENTS



var bouton4= document.getElementById("bouton4");
bouton4.addEventListener("click",clickbtn4);
function clickbtn4()
{ // ouverture bouton

    document.write("<p id='button1'>Clique-moi</p>")
    var element = document.getElementById("button1");
    element.addEventListener("click", test);
        function test()
            {
            alert("OK");
            }
    

} // fermeture bouton




var element = document.getElementById("testlien");
element.addEventListener("click", verif);


function verif()
            {
                var saisie = document.getElementById("textBox3").value;
                alert("vous avez saisi: "+saisie);
                return
            }





var element = document.getElementById("nombreatester");
element.addEventListener("click", verification);

var solution;
var solution = Math.floor(Math.random() * 100);

function verification()
    { 

        var saisie = 0;
        saisie = document.getElementById("nombreatester").value;

            console.log(solution);
            console.log(saisie);
            if (saisie>solution)
            {
                alert("trop grand");
            }
            else if (saisie<solution)
            {
                alert("trop petit");
            }
            else
            {
                alert("Trouvé!");
                return;
            }
    }


    function checkForm(f) 
        {
        alert("Vous vous appelez : " + f.elements['nom'].value + " " + f.elements['prenom'].value);
        return false; // do not submit the form
        }

/*
var bouton2= document.getElementById("bouton2");
bouton2.addEventListener("click",clickbtn2);
function clickbtn2()

{ // ouverture bouton
   

} // fermeture bouton
*/