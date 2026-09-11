console.log("Hello world.");
const Myname = "John Rey P. Regino";
console.log('NAME:' + Myname);
let age = 20;
console.log('AGE:' + age);
let number = 92342423;
console.log('NUMBER:' + number);
let address = "Brgy 6-a";
console.log('ADDRESS:' + address);

//Functions

function greet(name) {
    return `Good morning, ${name}`;

}
console.log(greet("Rene"));



function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;

    return (`Values: ${num1} and ${num2}. \n Product ${m}, \nQuotient: ${d}, \nSum: ${a}, \nDiff: ${s}`);
}
console.log(mdas(5, 3))

//Query selector
const heading = document.querySelector("h1")
console.log(heading);


const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);


const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

//Text Context
heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
projectHeading.textContent = "My Projects";


