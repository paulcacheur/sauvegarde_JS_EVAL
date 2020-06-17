
 
//EXECICE 7.1

//le bouton est reliéà l'ID boutonx dans html
 var bouton1= document.getElementById("bouton1");

 // quand on clique on active la fonction clickbtn1
 bouton1.addEventListener("click",clickbtn1);

 // la fonction clickbtn1 active le script suivant:
 function clickbtn1()
 {
   var Nb = parseInt(window.prompt("Indiquez un nombre pour pair impair"));
   console.log(Nb)
   
   
   if (Nb%2==0)
      {
         document.write("pair");
      }
   else
      {
         document.write("impair");
      }
}
 

//EXERCICE 7.2

//le bouton est reliéà l'ID boutonx dans html
var bouton2= document.getElementById("bouton2");

// quand on clique on active la fonction clickbtn1
bouton2.addEventListener("click",clickbtn1);

// la fonction clickbtn1 active le script suivant:
function clickbtn1()
{

   var today=new Date();
   var anneecours = today.getFullYear();
   var annee = parseInt(window.prompt("Entrez votre année de naissance"));
   var age;
   
   age = anneecours-annee
   
   if (age>18)
      {
         document.write("majeur");
      }
   else
   {
      document.write("mineur");
   }

}   

/* EXERCICE 7.2 AUTRE METHODE

var today=new Date();
var anneecours = today.getFullYear();

var annee = parseInt(window.prompt("Entrez votre année de naissance"));
var age;

age = anneecours-annee
console.log(age);
(age >= 18) ? document.write("majeur") : document.write("mineur");

*/


//EXERCICE 7.3

//le bouton est reliéà l'ID boutonx dans html
var bouton3= document.getElementById("bouton3");

// quand on clique on active la fonction clickbtn1
bouton3.addEventListener("click",clickbtn3);

// la fonction clickbtn1 active le script suivant:
function clickbtn3()
{

   var n1 = parseInt(prompt("Saisissez le premier nombre"));
   var n2 = parseInt(prompt("Saisissez le second nombre"));
   var op = prompt("saisissez un opérateur");
   var total 
   
   switch (op)
      {
         case prompt = "+":
         total = n1+n2;
         break;
      
         case prompt = "-":
         total = n1-n2;
         break;
      
         case prompt = "*":
         total = n1*n2;
         break;
     
         case prompt = "/":
         total = n1/n2;
         break;
   
         default:
         document.write("erreur");
   
      }
      document.write(total);

}


   /* exercice 3 autre option mias fonctionne pas 

var n1 = parseInt(prompt("Saisissez le premier nombre"));
var n2 = parseInt(prompt("Saisissez le second nombre"));
var op = prompt("saisissez un opérateur");
var total 

(op="+") ? total=n1+n2 : (op="-") ? total=n1-n2 : (op="*") ? total=n1*n2 : (op="/") ? total=n1/n2 : alert("erreur");
document.write(total);
*/

//EXERCICE 8.1

//le bouton est reliéà l'ID boutonx dans html
var bouton4= document.getElementById("bouton4");
bouton4.addEventListener("click",clickbtn4);
function clickbtn4()
{

      //variable prénoms notés
      var p = "x";
      //variable nombre de prénoms notés
      var pn = 0;

         while (p!=null) 
         {   
            // instructions
               var p = prompt("rentrer un prénom "+(pn+1)+" ou annuler");
               pn=pn+1;
               console.log(p);
         }

      console.log(pn-1);

}


/* EXERCICE 8.1 Autre méthode Guillaume
// script demandé en part 8. Condition, cours JS - 8.1
      var num =1;
      var prenom;

      while (typeof prenom != typeof null)
         {
         prenom = window.prompt("Entrez votre prénom ou clic sur Annuler pour arrêter la saisie");
            console.log ("Prénom " + num + " : " + prenom);
         num++;
         }
      }
*/

/* autre méthode
var num =1;
var prenom;

while (typeof prenom != typeof null)
{
prenom = window.prompt("Entrez votre prénom ou clic sur Annuler pour arrêter la saisie");
    console.log ("Prénom " + num + " : " + prenom);
num++;
}
}
*/

/*EXERCICE 8.2*/

var bouton5= document.getElementById("bouton5");
bouton5.addEventListener("click",clickbtn5);
function clickbtn5()

{
   var n = parseInt(prompt("Veuillez renseigner N"));
   document.write(n);

   while (n>1)
      {
          // instructions et actualisation
         n=n-1;
         document.write(n);
      }

}


/*EXERCICE 8.3*/

var bouton6= document.getElementById("bouton6");
bouton6.addEventListener("click",clickbtn6);
function clickbtn6()

{

      //variable nombres saisis
      var n = 1;
      // variable TOTAL sombres saisis
      var tot = 0;
      //variable qantité de nombres saisis
      var nn = 0;
      

         while (n != "0") 
         {   
            // instructions
               var n = parseInt(prompt("rentrer un nombre "+(nn+1)+" ou annuler"));
               nn++;
               tot = tot + n;
         }

         document.write("quantité " + (nn-1) + "total " + (tot) + "moyenne " + (tot)/(nn-1));
      
     
}
      

/*EXERCICE 8.4*/

var bouton7= document.getElementById("bouton7");
bouton7.addEventListener("click",clickbtn7);
function clickbtn7()

{

      //variable entier n
      var n = 0;
      // variable nombre de multiple
      var nombremultiple = 0;
      var resultat;
   
var n = parseInt(prompt("Renseigner un entier"));
var nombremultiple = parseInt(prompt("Renseigner le nombre de multiple que vous souhaitez"));


   for (i=1; i<=nombremultiple; i++)
      {
         resultat = i * n;
         document.write("Le résultat de " +n+ "*" +i+ "=" +resultat+ "<br>");

         console.log("Le résultat de 5 x "+i+" est : "+resultat);

      }


   // instructions exécutées après le for (i vaut nombremultiple)
   document.write("<br>" + "voila");
}


/*EXERCICE 8.5*/

var bouton8= document.getElementById("bouton8");
bouton8.addEventListener("click",clickbtn8);
function clickbtn8()

{
//variable mot pour le mot a rentrer 
var mot ="x";
// variable pour le nombre de voyelle
var nombrevoyelle = 0;
//all variable pour numero du caractère du mot
var i;
// variable pour  chaine de 1 caractère du mot à partir de la position p
var num = "x";

var mot = prompt("veuillez rentrer un mot");
document.write("longueur du mot " +mot.length+ "<br>");

for (i=0; i<=mot.length; i++)
   {
      num = mot.substr(i,1);
      if   ((num=="a") ||
            (num=="e") || 
            (num=="i") ||
            (num=="o") ||
            (num=="u") ||
            (num=="y"))

         {
            document.write("voyelle: " +num + "<br>");
            nombrevoyelle++;
            document.write("nombre de voyelle: " + nombrevoyelle + "<br>");
         }
   }
    document.write("nombre total de voyelle: " + nombrevoyelle + "<br>");
}

/* EXERCICE 8.5  exemple matthieu
function CountVoy(){
 
    var count = 0;
    var nom = prompt("entrez un nom");
 
    for(i = 0; i<nom.length; i++)
        {
            exnom = nom.substring(i,1);
 
            if(exnom.indexOf("a")!=-1 ||
            exnom.indexOf("e")!=-1 ||
            exnom.indexOf("i")!=-1 ||
            exnom.indexOf("o")!=-1 ||
            exnom.indexOf("u")!=-1 ||
            exnom.indexOf("y")!=-1 )
            {
                count++;
            }
        }
 
    alert("Le nombre de voyelles est de " + count);
}
*/ 


/*
{

   var tit ="x";
   var tit = prompt("veuillez rentrer un mot");
   
   if ((tit =="a") || (tit == "e"))
      {
         document.write("yes");
      }
   else
      {
         document.write("no");
      }

}   
/*

/*
    myVar.length : retourne le nombre de lettres de la chaîne myVar.
    myVar.substr(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
    myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1)
*/





/*EXERCICE 9.1*/

var bouton9= document.getElementById("bouton9");
bouton9.addEventListener("click",clickbtn9);
function clickbtn9()

{

var C =parseInt(prompt("tapez nombre de x a x pour choix fonction"));

      if (C=="1")
         {
            var x = parseInt(prompt("entrer le premier nombre"));
            var y = parseInt(prompt("entrer le second nombre"));

            function produit(x,y)
            {
            resultat =x*y;
            return resultat;
            }
         nouveauresultat = produit(x,y);
         alert(produit(x,y));
         }


      else if (C=="2")
         {    
         function afficheImg()
            {
            Img = document.createElement("img") ;
            nomImg = window.prompt("Entrez le nom de l'image désirée (nom d'une image dans dossier /image): ");
            Img.setAttribute("src", '/image/' + nomImg + '.jpg') ;
            Img.setAttribute("width", "100") ;
            Img.setAttribute("heigth", "100") ;
            Img.setAttribute("alt", nomImg)  ;
            }

            //appelle la fonction on l'active
            appellefonctionimg = afficheImg() ;
            // affichage image
            document.body.appendChild(Img);
         }

         else if (C=="3")
         {    
            var nombre = parseInt(prompt("renseigner un nombre pour mettre au cube"));
            var resultat;


            function cube(nombre)
            {
               resultat = nombre*nombre*nombre;
               return resultat;
            }
            fairecube = cube(nombre);
            document.write("le cube de "+nombre+"est :"+resultat);
         }


         else if (C=="4")
         {    
            var n1 = parseInt(prompt("renseigner le premier nombre à multiplier"));
            var n2 = parseInt(prompt("renseigner le second nombre à multiplier"));
            var resultat;

            function multiplier(n1,n2)
            {
               resultat = n1*n2
               return resultat
            }
            fonctionmultiplier = multiplier(n1,n2)
            document.write("le résultat de "+n1+" * "+n2+" est : "+resultat);
         }

         else
         { 
            alert("choix invalide")
         }
         
 }


/*EXERCICE 9.2*/

var bouton10= document.getElementById("bouton10");
bouton10.addEventListener("click",clickbtn10);
function clickbtn10()
//ouverture bouton



{
str_1= "robert ;dupont ;amiens ;80000" //chaine de caractère;
str_2= " ;";
// variable n, numéro du mot saisi
var n;
//variable position  du str_2
var pos =0;
//all variable mot en lui même
var mot;
// variable numéro du mot
var nummot = 0;

   function strtok(str_1, str_2, n)
{
   
      var n = parseInt(prompt("renseigner la position du mot que vous souhaitez dans str1"));

   /*METHODE tant que 
   le nombre de caractère est < max lenght
   trouve la position de str_2
   extrait le mot avant str_2 et numérote le, 
   vérifie si le numéro correspond à n
   redéfinir la longueur de la chaine de caractère
   trouve la position du prochain str_2
   cas du dernier mot
   */

   while (str_1.length!=0 && str_1 !=0)
      { // début while
      // repérer numéro de str_2 dans str_1  (ajusté)
      pos = str_1.indexOf(str_2);
      console.log("place de str_2 dans la chaine de caractère ajustée: "+pos+"<br>");

      // s'il reste au moins un str_2  a revoir
      if (pos!=-1)
               {
               //prendre la chaine de caractère / mot avant str_2 (caractère de 0 à pos) et lui attribuer un numéro
               mot = str_1.substring(0,(pos));
               nummot = nummot + 1;
               console.log(mot+"<br>"); // verification
               console.log(nummot+"<br>"); // verification

                        //vérification si n = numéro du mot
                        if  (n==nummot)
                           {
                              document.write(mot+"<br>"); // verification
                           }

                        else
                           {
                           //on raccourci la chaine d'autant de caractère
                           str_1 = (str_1.substring(pos+2));
                           console.log(str_1+"<br>"); // verification de la nouvelle chaine
                           }
               }
      if (pos==-1)
               {
               mot = str_1;
               nummot = nummot + 1;
                     if  (n==nummot)
                     {
                        document.write(mot+"<br>"); // verification
                     }

                     else
                     {
                     //on raccourci la chaine d'autant de caractère
                     str_1 = 0
                     console.log(str_1+"<br>"); // verification de la nouvelle chaine à 0
                     }
               }

      } // fin while

                  //  return
                  return mot

   } //fin fonction
                           // activation de la fonction
                           var fonctionnumerodemot = strtok(str_1, str_2, n);
                           //permet d'utiliser la fonction avec pop up alert
                           alert(fonctionnumerodemot);
} // fin lien bouton

/*

myVar.length : retourne le nombre de lettres de la chaîne myVar.
myVar.substr(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).

*/


/* SOLUTION MATHIEU 1

var btnToken = document.getElementById("btnToken");
btnToken.addEventListener("click", Tokenning);
 
function Tokenning()
{
    var phrase = prompt("Entrez une phrase.");
    var caractere = prompt("Entrez un caractère");
    var chiffre = prompt("Entrez un chiffre");
 
    var leResultatFinal = PleasingTheGalzy(phrase, caractere, chiffre);
    alert("Le " + chiffre + " éme mot est " + leResultatFinal);
}
 
function PleasingTheGalzy(str1, str2, n)
{
    while(str1.indexOf(" ")!=-1)
    {
        var index = str1.indexOf(" ");
        str1 = str1.substring(0, index) + str2 + str1.substring(index+1);
    }
 
    alert("La chaîne de caractère vaut maintenant: " + str1);
 
    var resultat = str1;
 
    for(i=0; i<n-1; i++)
    {
        var troncationPoint = resultat.indexOf(str2);
        resultat = resultat.substring(troncationPoint+1);
    }
 
    var troncationPoint = resultat.indexOf(str2);
        resultat = resultat.substring(0, troncationPoint);
 
    return resultat;
}
*/

/* SOLUTION MATHIEU 2

varbtnToken = document.getElementById("btnToken");
btnToken.addEventListener("click", Tokenning);
 
functionTokenning()
{
varstr1 = prompt("Entrez une phrase.");
varstr2 = prompt("Entrez un caractère");
 
while(str1.indexOf(" ")!=-1)
    {
varindex = str1.indexOf(" ");
str1 = str1.substring(0, index) + str2 + str1.substring(index+1);
    }
 
alert("La chaîne de caractère vaut maintenant: " + str1);
 
varn = prompt("Entrez un chiffre");
 
varresultat = str1;
 
for(i=0; i<n-1; i++)
    {
vartroncationPoint = resultat.indexOf(str2);
resultat = resultat.substring(troncationPoint+1);
    }
 
vartroncationPoint = resultat.indexOf(str2);
resultat = resultat.substring(0, troncationPoint);
 
alert("Le " + n + " éme mot est " + resultat);
}
*/


/*EXERCICE 9.1 bis*/

var bouton12= document.getElementById("bouton12");
bouton12.addEventListener("click",clickbtn12);
function clickbtn12()


{ //ouverture bouton

   str_1= "robert ;dupont ;conty ;80000" //chaine de caractère;
   str_2= " ;";
   // variable n, numéro du mot saisi
   var n;
   //variable position  du str_2
   var pos =0;
   //all variable mot en lui même
   var mot;
   // variable numéro du mot
   var nummot = 0;


      function strtok(str_1, str_2, n)

   { //ouverture fonction

      var n = parseInt(prompt("renseigner la position du mot que vous souhaitez dans str1"));
      /*METHODE tant que 
      le nombre de caractère est < max lenght
      trouve la position de str_2
      extrait le mot avant str_2 et numérote le, 
      vérifie si le numéro correspond à n
      redéfinir la longueur de la chaine de caractère
      trouve la position du prochain str_2
      cas du dernier mot
      */
   var mot_trouve = false;
   
      while (!mot_trouve) // mot_trouve==false
         { // début while

         // repérer numéro de str_2 dans str_1  (ajusté)
         pos = str_1.indexOf(str_2);
         console.log("place de str_2 dans la chaine de caractère ajustée: "+pos+"<br>");
         // s'il reste au moins un str_2  a revoir
   
         if (pos!=-1)
               {
                  //prendre la chaine de caractère / mot avant str_2 (caractère de 0 à pos) et lui attribuer un numéro
                  mot = str_1.substring(0,(pos));
                  nummot = nummot + 1;
                  console.log(mot+"<br>"); // verification
                  console.log(nummot+"<br>"); // verification
                           //vérification si n = numéro du mot
                           if  (n==nummot)
                              {
                               mot_trouve=true;
                                 document.write(mot+"<br>"); // verification
                              }
                           else
                              {
                              //on raccourci la chaine d'autant de caractère
                              str_1 = (str_1.substring(pos+2));
                              console.log(str_1+"<br>"); // verification de la nouvelle chaine
                              }
               }
   
       //   if (pos==-1)
       //            {
       //            mot = str_1;
       //            nummot = nummot + 1;
       //                  if  (n==nummot)
       //                  {
       //                     document.write(mot+"<br>"); // verification
       //                  }
       //               else
       //                  {
       //                  //on raccourci la chaine d'autant de caractère
       //                  str_1 = 0
       //                  console.log(str_1+"<br>"); // verification de la nouvelle chaine à 0
       //                  }
       //            }
            } // fin while
                     //  return
                     return mot
      } //fin fonction
   
       // activation de la fonction
       var fonctionnumerodemot = strtok(str_1, str_2, n);
       //permet d'utiliser la fonction avec pop up alert
       alert(fonctionnumerodemot);

   }


/*EXERCICE 10*/

var bouton11= document.getElementById("bouton11");
bouton11.addEventListener("click",clickbtn11);
function clickbtn11()
//ouverture bouton

{

                  // FONCTION GETINTEGER

// déclaration des variables de la fonction puis définition de la fonction en elle-même
var nombre = 0;
var texte = "x";
var taille;
var tableau = [];
var resultat;


   function getinteger(nombre, texte)
         {
            nombre = parseInt(prompt(texte));
            return nombre;
         }

         // FONCTION INITAB 

   function initab (taille)

         {
            texte="veuillez renseigner la taille du tableau";
            taille = getinteger(nombre, texte);
            console.log("affectation de la taille dans fonciton initab :" + taille)
            tableau = [taille];
            saisietab(taille);           
            return taille;
         }

         // FONCTION SAISIETAB /remplissagetableau

   function saisietab (taille)
         {
            var donneetab;
            console.log("affectation de la taille dans fonciton saisietab :" + taille)
            texte="veuillez saisir les données du tableau";

            for (i=0; i<=taille-1; i++) 
               {
                  donneetab = getinteger(nombre, texte);
                  tableau[i] = [donneetab];
               }
            return tableau;
         }




// pour retourner  etpouvoir modifier la valeur taille, il faut l'afferter au inveau global

taille=initab(taille);




texte = ("veuillez choisir le menu:" +"<br>"+
    "1) affichage des postes"+"<br>"+
    "2) affichag contenu d'un poste"+"<br>"+
    "3) affichage max et moyenne");
choixmenu = getinteger(nombre, texte);


    
if (choixmenu =="1")
      {
            // FONCTION INFOTAB /remplissagetableau

            function infotab (tableau)
            {
               document.write("les données du tableau sont: "+"<br>");
               for (var i = 0; i < tableau.length; i++) 
                  {
                     document.write(tableau[i]+"<br>");
                  }
               return tableau;
            }

         infotab(tableau);

      }


if (choixmenu =="2")
      {
         
               // FONCTION RECHERCHETAB: pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier

         function recherchetab(nombre)

         {
         texte="veuillez renseigner la position de la valeur recherchée dans le tableau";
         resultat = getinteger(nombre, texte);
         resultat = tableau[nombre+1];
         document.write(resultat+"<br>");
         return tableau;
         }

         recherchetab(nombre);

       }

if (choixmenu =="3")
       {


         // FONCTION MOYENNETAB: qui affichera le maximum et la moyenne des postes.

         function moyennetab()
         {
            console.log("valeur de taille dans la fonction moyennetab: "+taille);
            var totaltableau = 0;
            var moyennetableau = 0;

            for (var i = 0; i < taille; i++) 
            {
               totaltableau =  totaltableau + parseInt(tableau[i]);
               console.log(totaltableau);
               moyennetableau = totaltableau/taille;

            }
            document.write("la somme des éléments du tableau est: "+totaltableau+"<br>");
            document.write("la moyenne des éléments du tableau est: "+moyennetableau+"<br>");
            // return totaltableau,moyennetableau;
         }

         moyennetab();
         console.log("valeur de taille dans la fonction moyennetab apres fonction: "+taille);
       }


} // fermeture bouton
       
/*EXERCICE 10.3 TRI A BULLE*/

var bouton13= document.getElementById("bouton13");
bouton13.addEventListener("click",clickbtn13);
function clickbtn13()


{ //ouverture bouton

   function sort(tab){
      var changed;
      do{
          changed = false;
          for(var i=0; i < tab.length-1; i++) {
              if(tab[i] > tab[i+1]) {
                  var tmp = tab[i];
                  tab[i] = tab[i+1];
                  tab[i+1] = tmp;
                  changed = true;
              }
          }
      } while(changed);
  }
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  document.write(tab +"<br>");



  var tab = [14, 22, 95, 84, 12, 53, 21];
  sort(tab);
  document.write(tab);





} // fermeture bouton



   /* à tester sans  variable booléenne
   var tableau = [1, 6, 12, 85, 42];
                  // document.write(tableau[3]);


      for (var i = 0; i <= tableau.lenght-1; i++)
      {
         var  tableau;
         if (parseInt(tableau[i]) > parseInt(tableau[i+1]))
            {
                  var tmp = tab[i];
                  tab[i] = tab[i+1];
                  tab[i+1] = tmp;
                  changed = true;
            }

      }



      /* Methode variable booléenne 

      {
    var bool;
    do{
        bool = false;
 
        for(var b=0; b < tableau.length-1; b++) 
        {
 
            if(tableau[b] > tableau[b+1]) {
                var tmp = tableau[b];
                tableau[b] = tableau[b+1];
                tableau[b+1] = tmp;
                bool = true;
 
            }
        }
    } while(bool);
    
    document.write("tableau trier : " + tableau + "<br>");

}*/









