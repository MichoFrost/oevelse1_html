
let article1 = document.querySelector(".article1");
let articles = document.querySelector(".articles");
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

let firstArticleP = document.querySelector("article:first-child p");
let secondArticleP = document.querySelector("article:last-child p");
firstArticleP.textContent = "Hej med dig, jeg hedder Kaj!";
secondArticleP.textContent = "Save your prayers little one!"

console.log(firstArticleP)
// console.log(firstArticle)

let firstArticleImg = document.querySelector("article:first-child img");
let secondArticleImg = document.querySelector("article:last-child img");

firstArticleImg.src = "https://picsum.photos/300";
secondArticleImg.src = "https://picsum.photos/300";

firstArticleImg.alt = "Noget tekst om billedet";
secondArticleImg.alt = "Noget andet tekst om et andet billede";


let newArticle = document.createElement("article");
let newImg = document.createElement("img");
newImg.src = "https://picsum.photos/500";
let newArticleHeading = document.createElement("h2");
newArticleHeading.textContent = "NY OVERSKRIFT!"
let newParagraph = document.createElement("p");
newParagraph.textContent = "NOGET NYT TEKST!";
newArticle.appendChild(newImg);
newArticle.appendChild(newArticleHeading);
newArticle.appendChild(newParagraph);
newArticle.appendChild(newParagraph);

articles.appendChild(newArticle);
