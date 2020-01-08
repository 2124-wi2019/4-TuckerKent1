/*
Tucker Kent
kent_a04b.js
19WI_INFO_2124_WW Online JavaScript I
Thoendel
8 January 2020
*/

const firstName = "Tucker"; // constant declared and initialized 
let myWeight = "190.0"; // variable declared and initialized
let myHeight = 69.5; // variable declared and initialized
let myAge = "29"; // variable declared and initialized
const marsGravity = 0.38; // constant declared and initialized
const inchesToMeters = 2.54; //constant declared and initialized

let ageInDays = parseInt(myAge) * 365; //variable converting myAge to an int and from years to days
let marsAge = ageInDays / 687; // variable converting ageInDays to age based on the day length of Mars
let marsWeight = parseFloat(myWeight) * marsGravity; // variable converting earth weight to mars weight

//declaring variable message to place template literal
let message = ` 
Hello there, ${firstName}! On Earth you weigh ${myWeight} pounds.
But, since gravity is weaker on the Mars, you would only weigh ${String(marsWeight)} pounds there!

Neat huh? Want to know what else is neat?

Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually
longer than our "terran" year. So although you are ${Number(myAge)} years old on Earth, you're
only ${Number.parseFloat(marsAge).toFixed(2)} years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever decide to move to Europe and want to be
an astronaut, your height in metric is ${myHeight * inchesToMeters} cm.
`;

console.log(message); // calling console.log to output message