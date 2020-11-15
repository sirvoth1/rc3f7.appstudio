let quoteString = "failure is simply the opportunity to begin again this time more intelligently.";
    uperCaseString = quoteString.toUpperCase()
    alert(`Upper Case string is: ${uperCaseString}`)

let authorString = "- Henry Ford"
alert(authorString)

let completeString = uperCaseString + authorString
alert(completeString)

let found = completeString.includes("Henry")
if (found) {
    console.log("Henry was in the quote string.");
} else {
    console.log("henry was NOT in the quote string.");
    }

let secondQuote = "Talent is Cheaper than table Salt. What separaets the talented indiviudal from the successful one is a lot of hard worlD. - Stephen King";
upersecondQuote = secondQuote.toLowerCase()
console.log(`The Lower Case string is ${upersecondQuote}`)

let x = parseInt(prompt("please enter a number"));

let answer = x + 10;

console.log(`The Number ${x} = 10 is ${answer}.`);
