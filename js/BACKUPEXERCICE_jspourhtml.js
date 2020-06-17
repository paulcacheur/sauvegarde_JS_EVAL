
 
//test DOM

//le bouton est reliéà l'ID boutonx dans html
var bouton1= document.getElementById("bouton1");
// quand on clique on active la fonction clickbtn1
bouton1.addEventListener("click",clickbtn1);
// la fonction clickbtn1 active le script suivant:
function clickbtn1()
{ // ouverture bouton


}


// check pour vérification formulaire
var boutonsoumission = document.getElementById("boutonsoumission");
boutonsoumission.addEventListener("click", fonctioncheckform);

function fonctioncheckform()
{


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
          



/* METHODE BOOLEEN ET EPRESSION

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




Pour ma vérification de code postal, j'utilise ceci :

METHODE AUTRE
if (!eregi("^[0-9]{5}$",$cp))
{ // le code postal n'est pas valide
     $msg_err="Votre code postal n'est pas valide";
}



En gros :
!eregi => si le champs ne contient pas
[0-9] => des chiffres
{5} => 5 au minimum et 5 au maximum ... donc 5
^ => commencer
$ => finir
*/

/* BACK UP GUILLAUME
function checkform(){
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
        
        var environnement = document.getElementById("environnement").value ;
        console.log ("environnement : " + environnement);

        
        //Création d'une variable booléenne pour gerer si questionnaire OK ou pas OK ;
        var status1,status2,status3,status4,status5 = false; //status par défaut fixée à faux pour éviter tout envoi erronné si la vérification comporte une erreur
        
        // vérification automatique de chacun des champs
        do {
            // société
            if (societe.length > 1) {
                var status1 = true;
            } else {
                window.alert("Le nom de votre société doit comprendre plus d'un caractère.");
                var status1 = false;
                break;
            }
            
            // Personne à contacter
            if (contactPersonne.length > 1) {
                var status2 = true;
            } else {
                window.alert("Le nom de la personne à contacter doit comprendre plus d'un caractère.");
                var status2 = false;
                break;
            }
            
            // Code postal
            codePostal = parseInt(codePostal); //conversion du code Postale en numérique
            if (codePostal.length == 5 && isNaN(codePostal) != true) {
                var status3 = true;
            } else {
                window.alert("Le code postal doit comprendre 5 caractères.");
                var status3 = false;
                break;
            }
            
            // Ville
            if (ville.length > 1) {
                var status4 = true;
            } else {
                window.alert("Le nom de la ville doit comprendre plus d'un caractère.");
                var status4 = false;
                break;
            }
            
            // E-mail
            if (email.indexOf("@") != -1) { //si ne trouve pas le symbole @ dans mail
                var status5 = true;
            } else {
                window.alert("L'adresse mail doit comporter un caractère '@'.");
                var status5 = false;
                break;
            }
        }while (status1 == true && status2 == true && status3 == true &&status4 == true &&status5 == true)
        // Vérification finale 
        if (status1 == true && status2 == true && status3 == true &&status4 == true &&status5 == true){
            window.alert("Aucune erreur détectée au sein du formulaire");
        } else {
            window.alert("Au moins 1 erreur détectée au sein du formulaire");
        }
        
}
*/