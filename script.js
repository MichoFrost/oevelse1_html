
let article1 = document.querySelector(".article1");
let image1 = document.querySelector(".image1");
let paragraph1 = document.querySelector(".paragraph1");
let footerText = document.querySelector(".footerText");
let mainHeading= document.querySelector("h1");
let subheading = document.querySelector(".subheading");
// let mainSection = document.querySelector(".mainSection");

// console.log(article1);
// console.log(image1);
// console.log(paragraph1);
// console.log(footerText);
// console.log(subheading);


// console.log(document.querySelector(".mainSection").firstChild);


mainHeading.textContent = "Noget andet!";

let firstArticle = document.querySelector("article:first-child");
let secondArticle = document.querySelector("article:last-child");

firstArticle.textContent = "Hej med dig, jeg hedder Kaj!";
secondArticle.textContent = "Save your prayers little one!"