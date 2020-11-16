// for index page
const newsletterName = document.getElementById("newsletterName");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterConfirmation = document.getElementById("newsletterConfirmation");
const newsletterButton = document.getElementById("newsletterButton").addEventListener("click", function() {
    newsletterConfirmation.innerText = `Thank you, ${newsletterName.value}, for subscribing!`;
    newsletterEmail.value = "";
    newsletterName.value = "";
});