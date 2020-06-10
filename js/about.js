 function reverseText() {
   let paragraph = document.querySelector(".about").innerHTML;

   const revereseWord = paragraph
     .split("  ").reverse().join("");

   document.querySelector(".about").innerHTML = revereseWord;
 }
 reverseText();
