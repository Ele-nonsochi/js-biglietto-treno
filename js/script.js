//variable and prompt

const ageClient = prompt("How old are you ?");
const kmClient = prompt ("How far you want to go (Km)?");
const priceKm = 0.21;
const ticketPrice = kmClient * priceKm ;

let finalPrice ;

//Add variable to check

//kmClient = parseInt(kmClient);
//ageClient = parseInt(ageClient);

//Condition

if (isNaN(kmClient)) {
    alert("Attention the information is not correct!")
}

if (isNaN(ageClient) || ageClient < 0) {
    alert("Warning invalid age entered!")
}

if (ageClient > 65) {
    finalPrice = ((ticketPrice * 60) / 100)
} else if ( ageClient < 18){
    finalPrice = ((ticketPrice * 80) / 100)
} else {
    finalPrice = ticketPrice;
}

alert("The ticket price is: " + finalPrice.toFixed(2) + "€")