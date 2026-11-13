// UPPGIFT 2 – Variabler och scope
// console.log(varVariabel);   // Skriver ut undefined 
// console.log(letVariabel);   // Kraschar (ReferenceError)
// console.log(constVariabel); // Kraschar (ReferenceError)
{
    var stad = "Stockholm"; 
    let temperature = 0;
    const land = "Sverige";


    console.log("uppgift 2 - inuti blocket");
    console.log("stad: ",stad);
    console.log("temperature: ",temperature);
    console.log("land: ",land);
}

console.log("uppgift 2 - utanför blocket");
console.log("stad: ",stad); // fungerar, var är global
// console.log("temperature: ",temperature); // kraschar, let är block scoped
// console.log("land: ",land); // kraschar, const är block scoped

/*
reflection uppgift 2:


1)Beskriver hur var, let och const skiljer sig gällande block.
när jag testar ser jag att VAR fungerar utanför blocket, medan LET och CONST bara fungerar inuti blocket. COST funkar som LET men värden kan inte ändras.

2) Reflekterar över vad som händer vid olika placering av console.log() (före blocket, i blocket, efter blocket).
inuti blocket fungerar alla tre, efter blocket fungerar bara VAR, eftersom LET och CONST är block begränsade till blocket. försök att man använda de utanför blocket kraschar programmet.

*/


//===============================================================================
// Uppgift 3 – Funktion för att addera tal
//===============================================================================

console.log("uppgift 3 - funktion för att addera tal");

// const add = (num1, num2) => {
//    return num1 + num2;
//};


/*
  Reflektion uppgift 3:
1)Beskriver vad som händer om du hade skapat variabeln med nyckelordet let istället.
Om jag väljer att använda let istället för const ag ändra värdet på variabeln ändras senare i koden. Med const är det inte möjligt att ge den ett nytt värde.

2) Visar (med kod inuti kommentaren) hur du hade gjort för att skapa samma funktion med en funktionsdeklaration istället.
sam funktion med funktionsdeklaration:
function add(num1, num2) {
    return num1 + num2;
}

3) Förklarar vad det innebär att en funktion returnerar något.
Return innebär att funktionen ger ett resultat och sedan avslutar. Resultatet kan antingen lagras i en variabel eller visas med hjälp av console.log().

*/


//===============================================================================
// uppgift 4 – Jämförelser och specialvärden
//===============================================================================

console.log("uppgift 4 - jämförelser och specialvärden");

const add = (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);
    return num1 + num2;
};

//ternary operator
console.log(num1 ? "truthy" : "falsy");

// if-sats som kollar att värdarna är null eller undefined
if (
num1 == null && num1 !== undefined &&
num2 == null && num2 !== undefined &&
typeof num1 === 'number' && typeof num2 === 'number' &&
!Number.isNaN(num1) && !Number.isNaN(num2)
){
    return num1 + num2;
} else {
    return "r felaktigt inmatade värden: båda värden måste vara nummer och inte null eller undefined ";

}

//reflection uppgift 4:

/*
1) Förklarar vad en ternary operator är och hur den skiljer sig från en if()-sats.
En ternary operator (? :) fungerar som en kortare form av if/else och ger direkt ett värde. En if-sats kan bestå av flera rader kod.

2) Förklarar vad skillnaden mellan att använda två (==) och tre (===) likhetstecken är.
Tecknet == används för att jämföra värden och kan omvandla typer, medan === jämför både värdet och datatypen.

3) Förklarar hur du löste if-satsens villkor som kontrollerar att parametrarna inte är null.
Jag använde !== null och !== undefined för att säkerställa att värdena existerar. Därefter använde jag typeof och Number.isNaN() för att verifiera att båda är giltiga nummer.

*/

//===============================================================================
// Uppgift 5 – Anropa funktioner
//===============================================================================

console.log("uppgift 5 - anropa funktioner");
const num1 = 0;
let arg1;
let sum = false;

console.log("-Test 1: anrop med argumenten sum och 1 --");
console.log("returvärdet", add(sum, 1));

console.log("Test 2: anrop med argumenten 0 och 3--" );
sum = add("0", 3);
console.log("returvärdet", sum);

console.log("Test 3: anrop med argumenten 3 och num1 --" );
console.log("returvärdet", add(3, "num1"));

console.log("Test 4: anrop med argumenten -5 och num1" );
console.log("returvärdet", add(-5, num1));

console.log("Test 5: anrop med argumenten arg1 och 7" );
console.log("returvärdet", add(arg1, 7));

console.log("Test 6: anrop utan argument" );
console.log("returvärdet", add());

console.log("slutvärde num1: ", num1 );
console.log("slutvärde sum: ", sum );



// reflection uppgift 5:
/*

1) Förklarar skillnaden mellan parameter, variabel och argument.


2)Vilket output får du allra sist (värdet i num1) och varför?



3)Förklarar steg för steg vad som händer i funktionen när den anropas: vilka värden parametrarna får, vad jämförelserna och villkorsoperatorn ger, om if-satsen släpps igenom, och vilket värde som returneras. Det räcker att göra hela genomgången för ett av anropen – för övriga anrop räcker det att förklara returvärdet.






*/
